// src/Servicios/ServiosLogin.js

// GET: Obtener todos los usuarios
async function getUsers() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/auth_user/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        });

        if (!response.ok) {
        throw new Error("Error al obtener usuarios");
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
    }

    // POST: Login de usuario
    async function postUsers(username, password) {
    try {
        const userData = {
        username: username,
        password: password,
        };

        const response = await fetch("http://127.0.0.1:8000/api/auth_user/", {
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

        return await response.json();
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

        const response = await fetch(
        `http://127.0.0.1:8000/api/auth_user/${id}/`,
        {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }
        );

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
        const response = await fetch(
        `http://127.0.0.1:8000/api/auth_user/${id}/`,
        {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
        }
        );

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
export default { getUsers, postUsers, updateUsers, deleteUser, };




