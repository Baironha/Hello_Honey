// src/services/ServicioChatHoney.jsx

import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8000/api";
const Token = Cookies.get("access_token");

export const enviarMensaje = async (prompt = "", audioBlob = null) => {
  console.log("[DEBUG] Enviando a backend:", audioBlob || prompt);

  let options = {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${Token}`
    },
  };

  if (audioBlob) {
    const formData = new FormData();
    formData.append("audio", audioBlob, "grabacion.webm");
    options.body = formData;
    // Ojo: no pongas Content-Type aquí. fetch lo maneja.
  } else {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify({ prompt });
  }

  try {
    const response = await fetch(`${BASE_URL}/chat/`, options);

    if (!response.ok) {
      throw new Error("Error enviando mensaje");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en enviarMensaje:", error);
    throw error;
  }
};




// ✅ GET - Obtener historial
export const obtenerHistorial = async () => {
  const response = await fetch(`${BASE_URL}/chat/historial/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  return await response.json();
};

// ✅ PUT - Editar mensaje
export const actualizarMensaje = async (id, datosActualizados) => {
  try {
    const response = await fetch(`${BASE_URL}/chat/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify(datosActualizados),
    });

    return await response.json();
  } catch (error) {
    console.error("Error actualizando mensaje:", error);
    throw error;
  }
};

// ✅ DELETE - Eliminar mensaje
export const eliminarMensaje = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/chat/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`No se pudo eliminar el mensaje con ID ${id}`);
    }

    return { message: `Mensaje con ID ${id} eliminado` };
  } catch (error) {
    console.error("Error eliminando mensaje:", error);
    throw error;
  }
};
