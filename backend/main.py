from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.schemes import router

app = FastAPI(
    title="Government Scheme Finder API",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(router)


@app.get("/")
def home():
    return {"message": "Government Scheme Finder API is running 🚀"}


@app.get("/health")
def health():
    return {"status": "Healthy"}