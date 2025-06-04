
// src/Componentes/LoginComponent.jsx

import { useState } from "react";
import ServiosLogin from "../services/ServiosLogin";
import "../style/LoginStyle.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [NombreUsu, SetNombreUsu] = useState("");
  const [ContraUsu, SetContraUsu] = useState("");
  const navigate = useNavigate();

  function nombre(evento) {
    SetNombreUsu(evento.target.value);
  }

  function password(evento) {
    SetContraUsu(evento.target.value);
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

      const rol = response.user?.rol;

      if (!rol) {
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
          navigate("/R_product");
        } else if (rol === "admins") {
          navigate("/R_empleados");
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
