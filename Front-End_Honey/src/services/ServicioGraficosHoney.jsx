// src/services/ServicioGraficosHoney.jsx

import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8000/api";
const Token = Cookies.get("access_token");

// ✅ Trae datos de interacciones para el gráfico
export const obtenerInteraccionesTiempoReal = async () => {
  try {
    const response = await fetch(`${BASE_URL}/dashboard/interacciones/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos de interacciones");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en obtenerInteraccionesTiempoReal:", error);
    throw error;
  }
};
