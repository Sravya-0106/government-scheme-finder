from utils.loader import load_schemes


def find_eligible_schemes(user):
    schemes = load_schemes()
    eligible = []

    for scheme in schemes:

        e = scheme["eligibility"]

        # Age
        if not (e["min_age"] <= user.age <= e["max_age"]):
            continue

        # Income
        if user.annual_income > e["annual_income_max"]:
            continue

        # Occupation
        if "Any" not in e["occupation"]:
            if user.occupation not in e["occupation"]:
                continue

        
        # Gender
        if user.gender != "Any":
            if user.gender not in e["gender"]:
                continue

        # Category
        if user.category != "General":
            if "Any" not in e["category"]:
                if user.category not in e["category"]:
                    continue

        # Student
        if e["student"] != user.student:
            continue

        # Farmer
        if e["farmer"] != user.farmer:
            continue

        # Disability
        if e["disability"] != "Any":
            if e["disability"] != user.disability:
                continue

        # Urban / Rural
        if e["urban"] != "Any":
            if e["urban"] != user.urban:
                continue

        # State
        if user.state != "All":
            if "All" not in e["state"]:
                if user.state not in e["state"]:
                    continue

        eligible.append(scheme)

    return eligible