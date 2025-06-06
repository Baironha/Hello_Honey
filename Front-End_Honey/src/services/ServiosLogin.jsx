


/* 

const token = Cookies.get("mi-token");
console.log(Cookies.get());


async function getUsers() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/auth_user/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${ token ()}`
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


async function postUsers(username, password) {
    try {
        const userData = {
        username,
        password
        };

        console.log(userData)

        const response = await fetch("http://127.0.0.1:8000/api/login/", {
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
        

        
        if (data.token) {
        Cookies.set("authToken", data.token, { expires: 1 });
        }

        return data;
    } catch (error) {
        console.error("Error posting user:", error);
        throw error;
    }
}


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
            Authorization: `Token ${ token ()}`
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

    
    async function deleteUser(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/auth_user/${id}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${ token ()}`
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

    
export default {
    getUsers,
    postUsers,
    updateUsers,
    deleteUser,
};
 */











async function PostApiToken(username, password) {
    try {
        const userData2 = {
                username: username,
                password: password
        };
        console.log(userData2);
        const res = await fetch("http://127.0.0.1:8000/api/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 /* "Authorization": `Bearer ${token}`  */
            },
            body: JSON.stringify(userData2),
        });
        if (!res.ok) {
            const errorData = await res.json();
            console.error("Backend error:", errorData);  // <-- esto ayuda muchísimo
            throw new Error("Error posting user");
        }
        const result = await res.json();
        console.log("respuestas:", result);

        return result;
        
        } catch (error) {
        console.error("Error:", error.message);
        }
}

export default {PostApiToken};






