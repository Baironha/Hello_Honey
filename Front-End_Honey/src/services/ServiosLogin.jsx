// src/Servicios/ServiosLogin.js

import Cookies from "js-cookie";

// Función para obtener el token desde la cookie
function getToken() {
  return Cookies.get("authToken");
}

// GET: Obtener todos los usuarios
async function getUsers() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/auth_user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener usuarios");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

// POST: Login de usuario
async function postUsers(username, password) {
  try {
    const userData = {
      username,
      password
    };

    console.log(userData)

    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData.detail ||
        Object.values(errorData).flat().join(" ") ||
        "Usuario o contraseña incorrectos.";
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log(data);
    

    // Guardar el token en cookie si existe
    if (data.token) {
      Cookies.set("authToken", data.token, { expires: 1 }); // 1 día
    }

    return data;
  } catch (error) {
    console.error("Error posting user:", error);
    throw error;
  }
}

// PUT: Actualizar usuario por ID
async function updateUsers(rol, username, email, password, direccion, id) {
  try {
    const userData = {
      rol,
      username,
      email,
      password,
      direccion,
    };

    const response = await fetch(`http://127.0.0.1:8000/api/auth_user/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.detail ||
        Object.values(errorData).flat().join(" ") ||
        "Error al actualizar el usuario."
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error update user:", error);
    throw error;
  }
}

// DELETE: Eliminar usuario por ID
async function deleteUser(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/auth_user/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      },
    });

    if (!response.ok) {
      throw new Error(`Error al eliminar el usuario con id ${id}`);
    }

    return { message: `Usuario con id ${id} eliminado correctamente.` };
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

// Exportación de funciones
export default {
  getUsers,
  postUsers,
  updateUsers,
  deleteUser,
};
