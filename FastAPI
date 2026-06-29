from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class CodeRequest(BaseModel):
    repo_url: str

@app.post("/analyze")
async def analyze_code(request: CodeRequest):
    # Тут позже будет вызов OpenAI/Groq через LangChain или напрямую
    return {
        "status": "success",
        "complexity": "High",
        "summary": "AI проанализировал код и нашел потенциал для оптимизации в модуле обработки данных."
    }
