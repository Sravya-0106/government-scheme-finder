import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def extract_profile(query):

    prompt = f"""
You are an information extraction system.

Extract information from the user's text.

Return ONLY valid JSON.

DO NOT return markdown.
DO NOT return explanations.
DO NOT use null.

Use ONLY these occupation values:
- Student
- Farmer
- Business
- Self-employed
- Labour
- Any

Use ONLY these gender values:
- Male
- Female
- Any

If any field is missing, use these defaults:

{{
    "age": 18,
    "gender": "Any",
    "state": "All",
    "annual_income": 99999999,
    "occupation": "Any",
    "category": "General",
    "disability": false,
    "student": false,
    "farmer": false,
    "urban": true
}}

Return JSON in exactly this format:

{{
    "age": 20,
    "gender": "Female",
    "state": "Telangana",
    "annual_income": 200000,
    "occupation": "Student",
    "category": "General",
    "disability": false,
    "student": true,
    "farmer": false,
    "urban": true
}}

User:
{query}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash-lite",
        contents=prompt
    )

    text = response.text.strip()

    if text.startswith("```"):
        text = text.replace("```json", "")
        text = text.replace("```", "").strip()

    profile = json.loads(text)

    # Extra safety if Gemini ignores instructions
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

    return profile

def explain_schemes(profile, schemes):

    prompt = f"""
You are a Government Scheme Assistant.

User Profile:
{profile}

Eligible Schemes:
{schemes}

Return ONLY valid JSON.

Format:

{{
  "summary": "Short summary",
  "schemes": [
    {{
      "name": "",
      "why": "",
      "benefits": [
        "",
        ""
      ],
      "documents": [
        "",
        ""
      ],
      "link": ""
    }}
  ]
}}

Rules:

- Return JSON only.
- No markdown.
- No explanations outside JSON.
- benefits must be an array.
- documents must be an array.
- link must be an official website.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash-lite",
        contents=prompt
    )

    text = response.text.strip()

    if text.startswith("```"):
        text = text.replace("```json", "")
        text = text.replace("```", "").strip()

    return json.loads(text)