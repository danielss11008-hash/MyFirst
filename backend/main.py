from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
from steam_web_api import Steam
from dotenv import load_dotenv
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/user/{steam_id}")
def read_user(steam_id: str):
    KEY = os.environ.get("STEAM_API_KEY")

    if not KEY:
        raise HTTPException(status_code=500, detail="Missing STEAM_API_KEY environment variable")

    steam = Steam(KEY)

    user = steam.users.get_user_details(steam_id)
    user = steam.users.search_user(steam_id)

    return {"user": user}
