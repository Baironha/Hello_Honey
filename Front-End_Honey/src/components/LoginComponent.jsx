
// src/Componentes/LoginComponent.jsx

/* import { useState, useEffect } from "react";
import ServiosLogin from "../services/ServiosLogin";
import "../style/LoginStyle.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Cookies from 'cookies-js'

function LoginComponent() {
  const [NombreUsu, SetNombreUsu] = useState("");
  const [ContraUsu, SetContraUsu] = useState("");
  const [usuarios, SetUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
        async function DataUsers() {
            try {
                const datos = await ServiosLogin.getUsers();
                SetUsuarios(datos);
            } catch (error) {
                console.error("Error obteniendo usuarios:", error);
            }
        }
        DataUsers();
    }, []);


  function nombre(evento) {
    SetNombreUsu(evento.target.value);
  }

  function password(evento) {
    SetContraUsu(evento.target.value);
  }

  

  async  function prueba() {
    try {
      const tokenData = await ServiosLogin.PostApiToken(NombreUsu, ContraUsu);
    console.log(tokenData);
    if (tokenData && tokenData.access && tokenData.refresh && tokenData.role) {
      // Guardar cada token en una cookie individual
      Cookies.set("access_token", tokenData.access, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
        path: "/",
      });
      Cookies.set("refresh_token", tokenData.refresh, {
        expires: 7, // Por lo general el refresh token dura más
        secure: true,
        sameSite: "Strict",
        path: "/",
      });
      Cookies.set("user_role", tokenData.role, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
        path: "/",
      });
            navigate("/sobreNosotros");
        } else {
          Swal.fire({
            icon: "error",
            title: "datos incorrectos",
            text: "llene los datos de nuevo",
              });
        }
        } catch (error) {
        }
            }


  async function prueba() {
    if (!NombreUsu || !ContraUsu) {
      Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Por favor complete todos los campos.",
      });
      return;
    }

    try {
      const response = await ServiosLogin.postUsers(NombreUsu, ContraUsu);
      console.log("Respuesta del login:", response);
      console.log(usuarios)
      const rol = response.role

      if (rol === null) {
        throw new Error("No se pudo obtener el rol del usuario.");
      }

      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: "Redirigiendo según tu rol...",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      }).then(() => {
        if (rol === "empleados") {
          navigate("/");
        } else if (rol === "admins") {
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Rol desconocido",
            text: "No se pudo redirigir porque el rol no es válido.",
          });
        }
      });

      SetNombreUsu("");
      SetContraUsu("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: error.message || "Datos incorrectos o error en el servidor.",
      });
    }
  }

  return (
    <div id="Login">
      <div id="contForm">
        <label htmlFor="nombre" id="LabelLogin1">Nombre</label><br />
        <input
          id="InputsLogin1"
          type="text"
          value={NombreUsu}
          onChange={nombre}
          placeholder="Ingrese su nombre completo"
        />
        <br />
        <label htmlFor="password" id="LabelLogin2">Contraseña</label><br />
        <input
          id="InputsLogin2"
          type="password"
          value={ContraUsu}
          onChange={password}
          placeholder="Ingrese su contraseña"
        />
        <br />
        <button id="buttonLogin" onClick={prueba}>Iniciar Sesión</button>
        <br />
      </div>
    </div>
  );
}

export default LoginComponent;
 */




// src/Componentes/LoginComponent.jsx

import { useState } from "react";
import ServiosLogin from "../services/ServiosLogin";
import "../style/LoginStyle.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-js";

function LoginComponent() {
  const [NombreUsu, SetNombreUsu] = useState("");
  const [ContraUsu, SetContraUsu] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => SetNombreUsu(e.target.value);
  const handlePasswordChange = (e) => SetContraUsu(e.target.value);

  const handleLogin = async () => {
    if (!NombreUsu || !ContraUsu) {
      Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Por favor complete todos los campos.",
      });
      return;
    }

    try {
      const tokenData = await ServiosLogin.PostApiToken(NombreUsu, ContraUsu);
      if (tokenData && tokenData.access && tokenData.refresh && tokenData.role) {
        // Guardar los tokens en cookies
        Cookies.set("access_token", tokenData.access, {
          expires: 3600,
          secure: true,
          sameSite: "Strict",
          path: "/",
        });
        Cookies.set("refresh_token", tokenData.refresh, {
          expires: 3600,
          secure: true,
          sameSite: "Strict",
          path: "/",
        });
        Cookies.set("user_role", tokenData.role, {
          expires: 3600,
          secure: true,
          sameSite: "Strict",
          path: "/",
        });

        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: "Redirigiendo según tu rol...",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        }).then(() => {
          const rol = tokenData.role;
          if (rol === "empleados" || rol === "admins") {
            navigate("/"); // Puedes diferenciar rutas si lo deseas
          } else {
            Swal.fire({
              icon: "error",
              title: "Rol desconocido",
              text: "No se pudo redirigir porque el rol no es válido.",
            });
          }
        });

        // Limpieza de campos
        SetNombreUsu("");
        SetContraUsu("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Datos incorrectos",
          text: "Llene los datos de nuevo",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: err?.message || "Datos incorrectos o error en el servidor.",
      });
    }
  };

  return (
    <div id="Login">
      <div id="contForm">
        <label htmlFor="nombre" id="LabelLogin1">Nombre</label><br />
        <input
          id="InputsLogin1"
          type="text"
          value={NombreUsu}
          onChange={handleUsernameChange}
          placeholder="Ingrese su nombre completo"
        />
        <br />
        <label htmlFor="password" id="LabelLogin2">Contraseña</label><br />
        <input
          id="InputsLogin2"
          type="password"
          value={ContraUsu}
          onChange={handlePasswordChange}
          placeholder="Ingrese su contraseña"
        />
        <br />
        <button id="buttonLogin" onClick={handleLogin}>Iniciar Sesión</button>
        <br />
      </div>
    </div>
  );
}

export default LoginComponent;







