
import Cookies from "js-cookie";

const API_URL = "http://127.0.0.1:8000/api/auth_user/";
const Token= Cookies.get("access_token")
////////////// LLAMADO GET //////////////

async function getUsers() {
    try {
        const response = await fetch(API_URL, {
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

////////////// LLAMADO POST //////////////

async function postUsers(username, email, password) {
    try {
        const userData = { 
            username,
            password, 
            email, 
            rol: "empleados" };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            },
            body: JSON.stringify(userData)
        });

        const mensaje = await response.json();
        console.log('Mensaje del backend:', mensaje);
        return mensaje;
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

////////////// LLAMADO UPDATE //////////////

async function updateUsers(username, email, password,id) {
    try {
        const userData = {username, email, password,};

        const response = await fetch(`${API_URL}${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`

            },
            body: JSON.stringify(userData)
        });

        return await response.json();
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

////////////// LLAMADO DELETE (con token) //////////////

async function deleteUser(id) {
    try {
        const token = Cookies.get('access_token'); // asegúrate de haber guardado el token

        const response = await fetch(`${API_URL}${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
        }

        return { message: `Usuario con id ${id} eliminado exitosamente` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

////////////// EXPORTS //////////////

export default { getUsers, postUsers, updateUsers, deleteUser};
