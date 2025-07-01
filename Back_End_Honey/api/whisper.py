# whisper.py

import os
import requests
from decouple import config

def transcribir_audio(audio_file_path: str) -> str:
    """
    Envía un archivo de audio a la API Whisper de OpenAI y devuelve el texto transcrito.
    """
    print("\n[DEBUG] === INICIO transcribir_audio() ===")
    print(f"[DEBUG] Archivo recibido: {audio_file_path}")

    api_key = config("OPENAI_API_KEY", default="").strip()

    if not api_key:
        print("❌ ERROR: OPENAI_API_KEY no está definida o está vacía.")
        return ""

    print(f"[DEBUG] API KEY detectada: {api_key[:8]}... (ocultado por seguridad)")

    url = "https://api.openai.com/v1/audio/transcriptions"

    headers = {
        "Authorization": f"Bearer {api_key}"
    }

    print("[DEBUG] Enviando POST a Whisper API...")

    try:
        with open(audio_file_path, "rb") as audio_file:
            files = {
                "file": (os.path.basename(audio_file_path), audio_file),
                "model": (None, "whisper-1")
            }

            response = requests.post(url, headers=headers, files=files, timeout=60)

    except requests.RequestException as e:
        print(f"❌ ERROR: Problema de red o timeout: {e}")
        return ""
    except Exception as e:
        print(f"❌ ERROR abriendo archivo: {e}")
        return ""

    print(f"[DEBUG] Status Whisper: {response.status_code}")

    if response.status_code == 200:
        texto = response.json().get("text", "")
        print(f"[DEBUG] ✅ Texto transcrito: {texto[:100]}...")
        return texto
    else:
        print(f"❌ ERROR Whisper [{response.status_code}]: {response.text}")
        return ""
