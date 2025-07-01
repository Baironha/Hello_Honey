import Cookies from "js-cookie";
const API_URL = "http://127.0.0.1:8000/api/UserGroup/"
const Token = Cookies.get("access_token");

////////////// LLAMADO GET //////////////

async function getUsers() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
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

async function postUsers(user) {
  try {
    const userData = { 
      user,
      group: 2
    };

    console.log(userData);
    

    const response = await fetch("http://127.0.0.1:8000/api/UserGroup/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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

async function updateUsers(user, group) {
  try {
    const userData = { user, group };

    const response = await fetch(`${API_URL}${user}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
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
    const response = await fetch(`${API_URL}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Token}`
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

export default { getUsers, postUsers, updateUsers, deleteUser };
