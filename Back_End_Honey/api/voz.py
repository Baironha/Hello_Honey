# voz.py

import os
import requests
from decouple import config

def generar_audio(texto: str) -> str:
    """
    Genera un archivo MP3 usando ElevenLabs a partir de texto,
    lo guarda en 'static/audio/respuesta.mp3' y devuelve la ruta relativa.
    """
    print("\n[DEBUG] === INICIO generar_audio() ===")
    print(f"[DEBUG] Texto recibido (máx 100): {texto[:100]}...")

    api_key = config("ELEVENLABS_API_KEY", default="").strip()

    if not api_key:
        print("❌ ERROR: ELEVENLABS_API_KEY no está definida o está vacía.")
        return ""

    print(f"[DEBUG] API KEY detectada: {api_key[:8]}... (ocultado por seguridad)")

    voice_id = "EXAVITQu4vr4xnSDxMaL"  # Rachel (voz femenina por defecto)
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"

    headers = {
        "xi-api-key": api_key,
        "Content-Type": "application/json"
    }

    data = {
        "text": texto,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.9
        }
    }

    print("[DEBUG] Haciendo POST a ElevenLabs...")
    try:
        response = requests.post(url, headers=headers, json=data, timeout=30)
    except requests.RequestException as e:
        print(f"❌ ERROR: Problema de red o timeout: {e}")
        return ""

    print(f"[DEBUG] Status de ElevenLabs: {response.status_code}")

    if response.status_code == 200:
        audio_dir = "static/audio"
        audio_path = os.path.join(audio_dir, "respuesta.mp3")

        try:
            os.makedirs(audio_dir, exist_ok=True)

            with open(audio_path, "wb") as f:
                f.write(response.content)

            print(f"[DEBUG] ✅ Audio guardado: {audio_path}")
            return f"/{audio_path}"

        except Exception as e:
            print(f"❌ ERROR al guardar audio: {e}")
            return ""

    else:
        print(f"❌ ERROR ElevenLabs [{response.status_code}]: {response.text}")
        return ""
