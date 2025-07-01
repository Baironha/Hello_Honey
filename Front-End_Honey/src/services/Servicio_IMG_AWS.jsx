



import Cookies from 'js-cookie';

const BASE_URL = "http://127.0.0.1:8000/api";

async function uploadImageAWS(imagenFile, userId) {
    try {
        const formData = new FormData();
        formData.append("imagen", imagenFile);

        const token = localStorage.getItem("access_token") || Cookies.get("access_token");

        const response = await fetch(`${BASE_URL}/usuarios/${userId}/imagen/`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
                // No pongas Content-Type aquí, el navegador lo maneja automáticamente con FormData
            },
            body: formData
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error("Error al subir imagen: " + errorText);
        }

        return await response.json();
    } catch (error) {
        console.error("Error al subir imagen a AWS:", error);
        throw error;
    }
}

export default uploadImageAWS;
