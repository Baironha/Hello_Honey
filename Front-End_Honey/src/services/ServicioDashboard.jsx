import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8000/api";
const Token = Cookies.get("access_token");

export const obtenerMetricasDashboard = async () => {
  const response = await fetch(`${BASE_URL}/dashboard/metrics/`, {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
  return await response.json();
};
