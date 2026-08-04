from pydantic import BaseModel

class UserProfile(BaseModel):
    age: int
    gender: str = "Any"
    annual_income: int
    state: str = "All"
    occupation: str = "Any"
    category: str = "General"
    disability: bool = False
    student: bool = False
    farmer: bool = False
    urban: bool = True