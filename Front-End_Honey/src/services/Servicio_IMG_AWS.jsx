

/* 

import Cookies from 'js-cookie';

const BASE_URL = "http://127.0.0.1:8000/api";
const Token= Cookies.get("access_token")




async function uploadImageAWS(imagenFile, userId) {
    try {
        const formData = new FormData();
        formData.append("imagen", imagenFile);

        console.log(imagenFile);
        

        const token = localStorage.getItem("access_token") || Cookies.get("access_token");
        console.log(token);
        

        const response = await fetch(`${BASE_URL}/usuarios/${userId}/imagen/`, {
            method: "PUT",
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



async function getUsers(imagenFile, userId) {
    try {
        const response = await fetch(`${BASE_URL}/usuarios/${userId}/imagen/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


export default {getUsers, uploadImageAWS};
 */





// PerfilUsu.js

import Cookies from 'js-cookie';

const BASE_URL = "http://127.0.0.1:8000/api";
const Token = Cookies.get("access_token");

async function uploadImageAWS(imagenFile, userId) {
  try {
    const formData = new FormData();
    formData.append("imagen", imagenFile);

    const token = Token;
    const response = await fetch(`${BASE_URL}/usuarios/${userId}/imagen/`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
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


async function getimagen(userId) {
  try {
    const response = await fetch(`${BASE_URL}/usuarios/${userId}/imagen/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error fetching user image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching user image:', error);
    throw error;
  }
}


export default { getimagen, uploadImageAWS };
