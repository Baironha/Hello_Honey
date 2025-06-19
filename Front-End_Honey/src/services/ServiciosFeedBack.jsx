async function getUsers() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/feedback_usuarios', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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

async function postUsers(email_usu, texto) {
  try {
    const userData = {
      email_usu,
      texto,
    };

    const response = await fetch("http://127.0.0.1:8000/api/feedback_usuarios/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const mensaje = await response.json();
    console.log('Mensaje de respuesta del Backend:', mensaje);
    return mensaje;
  } catch (error) {
    console.error('Error posting user:', error);
    throw error;
  }
}

async function updateUsers(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/feedback_usuarios/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ estado: "respondido" }),
    });

    return await response.json();
  } catch (error) {
    console.error('Error update user:', error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/feedback_usuarios/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error deleting user with id ${id}`);
    }

    return { message: `User with id ${id} deleted successfully` };
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

export default {
  get: getUsers,
  post: postUsers,
  patch: updateUsers,
  delete: deleteUser,
};
