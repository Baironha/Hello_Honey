// api.js o authService.js
export async function loginUser(username, password) {
  const response = await fetch('http://localhost:8000/api/login/', {
    method: 'POST',
    credentials: 'include', // 👈 Esto permite guardar cookies
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Login failed');
  return data;
}




export async function checkSesionActiva() {
  const response = await fetch('http://localhost:8000/api/sesion-activa/', {
    method: 'GET',
    credentials: 'include', // 👈 Importante para enviar cookies
  });

  if (response.ok) {
    const data = await response.json();
    return data.usuario;
  }
  return null;
}
