const BASE_URL = "http://localhost:8000/api/honey";

export async function enviarTexto(texto) {
  const res = await fetch(`${BASE_URL}/responder/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contenido: texto,
      tipo: "texto",
    }),
  });

  return await res.json();
}

export async function enviarAudio(audioBlob) {
  const formData = new FormData();
  formData.append("audio", audioBlob, "audio.webm");
  formData.append("tipo", "audio");

  const res = await fetch(`${BASE_URL}/responder/`, {
    method: "POST",
    body: formData,
  });

  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
