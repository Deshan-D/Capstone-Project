from fastapi import FastAPI, HTTPException, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from database import admins_collection
from database import officers_collection
from auth import get_password_hash, verify_password, create_access_token
from datetime import timedelta
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Models (Structure of data coming from Frontend)
class AdminRegister(BaseModel):
    fullName: str
    email: EmailStr
    password: str
    secretKey: str # Institutional Access Key

class AdminLogin(BaseModel):
    email: EmailStr
    password: str
    secretKey: str

INSTITUTIONAL_KEY = "TRAFFIX_SECURE_2026"

# Admin Registration Endpoint
@app.post("/api/admin/register", status_code=status.HTTP_201_CREATED)
async def register_admin(admin: AdminRegister):
    
    if admin.secretKey != INSTITUTIONAL_KEY:
        raise HTTPException(status_code=403, detail="Invalid Institutional Access Key")
    
    existing_admin = admins_collection.find_one({"email": admin.email})
    if existing_admin:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = get_password_hash(admin.password)
    admin_dict = admin.dict()
    admin_dict["password"] = hashed_password
    del admin_dict["secretKey"]

    admins_collection.insert_one(admin_dict)
    return {"message": "Admin registered successfully"}

# Admin Login Endpoint
@app.post("/api/admin/login")
async def login_admin(admin: AdminLogin):
    
    if admin.secretKey != INSTITUTIONAL_KEY:
        raise HTTPException(status_code=403, detail="Invalid Institutional Access Key")

    db_admin = admins_collection.find_one({"email": admin.email})
    if not db_admin or not verify_password(admin.password, db_admin["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    access_token_expires = timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")))
    access_token = create_access_token(
        data={"sub": admin.email, "role": "admin"}, expires_delta=access_token_expires
    )

    return {"access_token": access_token, "token_type": "bearer"}

# --- OFFICER MODELS ---
class OfficerRegister(BaseModel):
    fullName: str
    idNumber: str
    email: EmailStr
    mobileNumber: str
    password: str

class OfficerLogin(BaseModel):
    nameWithInitials: str
    idNumber: str
    mobileNumber: str

# --- OFFICER ENDPOINTS ---

# Officer Registration
@app.post("/api/officer/register", status_code=status.HTTP_201_CREATED)
async def register_officer(officer: OfficerRegister):

    existing_officer = officers_collection.find_one({"idNumber": officer.idNumber})
    if existing_officer:
        raise HTTPException(status_code=400, detail="Officer ID already registered")

    hashed_password = get_password_hash(officer.password)
    officer_dict = officer.dict()
    officer_dict["password"] = hashed_password

    officers_collection.insert_one(officer_dict)
    return {"message": "Officer registered successfully"}

# Officer Login
@app.post("/api/officer/login")
async def login_officer(officer: OfficerLogin):
    
    db_officer = officers_collection.find_one({
        "idNumber": officer.idNumber,
        "mobileNumber": officer.mobileNumber
    })
    
    if not db_officer:
        raise HTTPException(status_code=401, detail="Invalid ID or Mobile Number")

    # create JWT Token
    access_token_expires = timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")))
    access_token = create_access_token(
        data={"sub": officer.idNumber, "role": "officer"}, expires_delta=access_token_expires
    )

    return {"access_token": access_token, "token_type": "bearer"}
