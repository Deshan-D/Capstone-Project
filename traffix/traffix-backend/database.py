from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("MONGODB_URL"))
db = client["traffix_db"]

# Collections (Tables)
admins_collection = db["admins"]
officers_collection = db["officers"]