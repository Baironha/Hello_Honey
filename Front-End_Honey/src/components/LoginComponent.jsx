
import { useState } from "react";

import "../style/LoginStyle.css";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import PostApiToken from "../services/ServiosLogin";

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
      const tokenData = await /* ServiciosLogin. */PostApiToken(NombreUsu,ContraUsu);
      console.log(tokenData);
      
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
          if (rol === "empleados") {
            navigate("/"); 
          } if (rol === "admins") {
            navigate("/Admins/AdminHome");
          } if (rol === "usuarios"){
            navigate("/");
          }
          else {
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
      
      <Link to="/" id="Login-Honey-Logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Hello Honey
      </Link>
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
        <label  id="LabelLogin2">Contraseña</label><br />
        <input
          id="InputsLogin2"
          type="password"
          value={ContraUsu}
          onChange={handlePasswordChange}
          placeholder="Ingrese su contraseña"
        />
        <br />
        <button id="buttonLogin" onClick={handleLogin}>Iniciar Sesión</button>
        <div id="registroLinkContainer">
          <span className="registro-text">¿No estás registrad@?</span>
          <Link to="/Registrarse" className="registro-link">
            ¡¡Registrate AQUI!!
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}

export default LoginComponent;

