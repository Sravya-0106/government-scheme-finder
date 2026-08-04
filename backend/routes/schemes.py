
from fastapi import APIRouter
from models.user import UserProfile
from models.query import UserQuery
from services.eligibility import find_eligible_schemes
from services.llm import extract_profile
from services.llm import explain_schemes

router = APIRouter()

@router.post("/find-schemes")
def find_schemes(user: UserProfile):
    schemes = find_eligible_schemes(user)
    return {"eligible_schemes": schemes}


@router.post("/extract-profile")
def extract(query: UserQuery):
    return extract_profile(query.query)


@router.post("/ask-ai")
def ask_ai(query: UserQuery):

    profile = extract_profile(query.query)

    # Default values if Gemini misses any field
    profile.setdefault("age", 18)
    profile.setdefault("gender", "Any")
    profile.setdefault("state", "All")
    profile.setdefault("annual_income", 99999999)
    profile.setdefault("occupation", "Any")
    profile.setdefault("category", "General")
    profile.setdefault("disability", False)
    profile.setdefault("student", False)
    profile.setdefault("farmer", False)
    profile.setdefault("urban", True)

    # Handle None values
    if profile["gender"] is None:
        profile["gender"] = "Any"

    if profile["occupation"] is None:
        profile["occupation"] = "Any"

    if profile["state"] is None:
        profile["state"] = "All"



    # 🔥 Fix occupation mapping
    occupation = profile["occupation"].lower()

    if "student" in occupation:
        profile["occupation"] = "Student"
        profile["student"] = True

    elif "farmer" in occupation:
        profile["occupation"] = "Farmer"
        profile["farmer"] = True

    elif "business" in occupation:
        profile["occupation"] = "Business"

    elif "self" in occupation:
        profile["occupation"] = "Self-employed"

    elif "labour" in occupation:
        profile["occupation"] = "Labour"

    else:
        profile["occupation"] = "Any"

    user = UserProfile(**profile)

    schemes = find_eligible_schemes(user)

    summary = f"You are eligible for {len(schemes)} government scheme(s)."

    return {
        "summary": summary,
        "schemes": schemes
    }