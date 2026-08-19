# TraffiX Backend Microservice

This is the Python/FastAPI backend for the TraffiX application, responsible for AI video analysis and AI model execution.

## Setup Instructions

1. Ensure you have Python installed.
2. Install the necessary dependencies by running:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the local microservice by executing:
   ```bash
   uvicorn app.main:app --reload
   ```

The backend server will run and listen for incoming analysis requests (e.g., from the Next.js frontend).
