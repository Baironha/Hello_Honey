import React, { useState, useEffect } from "react";
import Llamados from "../services/ServiosLogin";
import '../style/LoginStyle.css';
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

function Prueba() {
    const [NombreUsu, SetNombreUsu] = useState("");
    const [ContraUsu, SetContraUsu] = useState("");
    const [usuarios, SetUsuarios] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function DataUsers() {
            try {
                const datos = await Llamados.getUsers();
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

    function validar() {
        if (!NombreUsu || !ContraUsu) {
            Swal.fire({
                icon: "warning",
                title: "RELLENA LOS CAMPOS",
                text: "Todos los campos son obligatorios.",
            });
            return;
        }

        const usuarioEncontrado = usuarios.find(
            (Usuarios) => Usuarios.nombre === NombreUsu && Usuarios.password === ContraUsu
        );

        if (!usuarioEncontrado) {
            Swal.fire({
                icon: "error",
                title: "Datos incorrectos",
                text: "Por favor verifique sus credenciales.",
            });
        } else {
            // Guardar usuario en localStorage
            localStorage.setItem("user", JSON.stringify(usuarioEncontrado));

            Swal.fire({
                icon: "success",
                title: "Iniciando sesión...",
                text: usuarioEncontrado.rol === "Admin"
                    ? "Administrador, por favor espere."
                    : "Redirigiendo al área de trabajo.",
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                },
            }).then(() => {
                navigate(usuarioEncontrado.rol === "Admin" ? "/Admin" : "/");
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
                <button id="buttonLogin" onClick={validar}>Iniciar Sesión</button>
                <br />
                <strong><Link to={'/Registrarse'}>¿Ya te registraste?</Link></strong>
            </div>
        </div>
    );
}

export default Prueba;
