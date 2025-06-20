async function getUsers() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/feedback_usuarios/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Error fetching users');

    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

async function postUsers() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/feedback_usuarios/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Error fetching users');

    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}


async function responderFeedback(feedback_id, mensaje) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/RespuestaFeedback/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ feedback: feedback_id, mensaje })  // ✅ Nombres correctos
    });

    if (!response.ok) {
      throw new Error("Error al responder feedback");
    }

    return await response.json();
  } catch (error) {
    console.error("Error enviando respuesta:", error);
    return null;
  }
}


async function updateUsers(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/feedback_usuarios/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estado: "respondido" })
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
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error(`Error deleting user with id ${id}`);

    return { message: `User with id ${id} deleted successfully` };
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

export default {
  post: postUsers,
  get: getUsers,
  responder: responderFeedback,
  patch: updateUsers,
  delete: deleteUser
};
