import React, { useState, useRef } from "react";
import ServiciosRegister from '../services/ServiciosRegister';
import servicesRegisterusu from '../services/servicesRegisterusu.jsx';
import Swal from 'sweetalert2';
import '../style/RegistrarseStyle.css';
import { Link } from "react-router-dom";
import { PutObjectCommand } from '@aws-sdk/client-s3';
import KAWS from "../components/KAWS";

function RegistrarseComponet() {
    const [NombreUsu, SetNombreUsu] = useState("");
    const [EmailUsu, SetEmailUsu] = useState("");
    const [ContraUsu, SetContraUsu] = useState("");
    const [DirecUsu, SetDirecUsu] = useState("");
    const [FotoUsu, setFotoUsu] = useState("");
    const inputFileRef = useRef(null);

    const S3_BUCKET = 'bucketbyronimg';
    const REGION = 'us-east-2';
    const s3 = KAWS.amazon();

    const uploadImageToS3 = async (file) => {
        if (!(file instanceof File)) {
            throw new Error("El archivo proporcionado no es válido.");
        }

        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);

        const uniqueKey = `${Date.now()}-${file.name}`;
        const params = {
            Bucket: S3_BUCKET,
            Key: uniqueKey,
            Body: uint8Array,
            ContentType: file.type,
        };

        const command = new PutObjectCommand(params);
        await s3.send(command);

        const url = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${uniqueKey}`;
        return { Location: url };
    };

    const cargarImagen = async (evento) => {
        const file = evento.target.files[0];
        if (file) {
            try {
                const result = await uploadImageToS3(file);
                setFotoUsu(result.Location);
                console.log("Imagen subida exitosamente:", result.Location);
            } catch (error) {
                console.error('Error al subir la imagen a S3:', error);
                Swal.fire({
                    icon: "error",
                    title: "Error al subir imagen",
                    text: "Hubo un problema al subir la imagen. Intente nuevamente.",
                });
            }
        }
    };

    const nombre = (evento) => SetNombreUsu(evento.target.value);
    const email = (evento) => SetEmailUsu(evento.target.value);
    const password = (evento) => SetContraUsu(evento.target.value);
    const direccion = (evento) => SetDirecUsu(evento.target.value);

    const cargar = () => {
        if (NombreUsu === "" || EmailUsu === "" || ContraUsu === "" || DirecUsu === "") {
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Por favor rellene los espacios!",
            });
        } else {
            ServiciosRegister.postUsers(NombreUsu, EmailUsu, ContraUsu)
            servicesRegisterusu.postUsers(DirecUsu, FotoUsu)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Registro exitoso",
                        text: "Se ha agregado un nuevo trabajador a la planilla",
                    });
                    SetNombreUsu("");
                    SetEmailUsu("");
                    SetContraUsu("");
                    SetDirecUsu("");
                    setFotoUsu("");
                    if (inputFileRef.current) {
                        inputFileRef.current.value = "";
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Error en el registro",
                        text: "Hubo un problema al agregar el trabajador. Intente nuevamente.",
                    });
                    console.error("Error al registrar trabajador:", error);
                });
        }
    };

    return (
        <div id="RegistroContainer">
            <Link to="/" id="Login-Honey-Logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Hello Honey
            </Link>
            <div id="Container-Form-Usuarios">
                <h1 id="TituloRegistrarse">Registrarse</h1>

                <label htmlFor="input-nombre" id="LabelFormTrabajador">Nombre</label><br />
                <input
                    id="input-nombre"
                    className="input-trabajador"
                    type="text"
                    value={NombreUsu}
                    onChange={nombre}
                    placeholder="Ingrese su nombre completo"
                />

                <label htmlFor="input-email" id="LabelFormTrabajador">Correo electrónico</label><br />
                <input
                    id="input-email"
                    className="input-trabajador"
                    type="text"
                    value={EmailUsu}
                    onChange={email}
                    placeholder="Ingrese su correo electrónico"
                />

                <label htmlFor="input-password" id="LabelFormTrabajador">Contraseña</label><br />
                <input
                    id="input-password"
                    className="input-trabajador"
                    type="password"
                    value={ContraUsu}
                    onChange={password}
                    placeholder="Ingrese su contraseña"
                />

                <label htmlFor="input-direccion" id="LabelFormTrabajador">Dirección</label><br />
                <input
                    id="input-direccion"
                    className="input-trabajador"
                    type="text"
                    value={DirecUsu}
                    onChange={direccion}
                    placeholder="Ingrese la dirección de entrega"
                />

                <label htmlFor="FotoPerfil" id="LabelFormTrabajador">Foto de perfil (opcional)</label><br />
                <input
                    id="FotoPerfil"
                    type="file"
                    accept="image/*"
                    onChange={cargarImagen}
                    ref={inputFileRef}
                />

                <button id="BtnCargar" onClick={cargar}>Registrarse</button>

                <div id="registro-to-Link-Container">
                    <span className="registro-texto">¿Ya estás registrad@?</span>
                    <Link to="/Login" className="registro-to-link">
                        ¡¡Inicia sesión AQUÍ!!
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RegistrarseComponet;
