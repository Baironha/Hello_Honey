import React, { useState, useRef } from "react";
import ServiciosRegister from '../services/ServiciosRegister';
import Swal from 'sweetalert2';
import '../style/RegistrarseStyle.css';
import { Link } from "react-router-dom";
import { PutObjectCommand } from '@aws-sdk/client-s3';  // SDK correcto
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
        const params = {
            Bucket: S3_BUCKET,
            Key: file.name,
            Body: file,
            ContentType: file.type,
        };
        const command = new PutObjectCommand(params);
        await s3.send(command);

        const url = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${file.name}`;
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
            ServiciosRegister.postUsers(NombreUsu, EmailUsu, ContraUsu/* , DirecUsu, FotoUsu */)
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
                <label htmlFor="nombre" id="LabelFormTrabajador">Nombre</label><br />
                <input type="text" value={NombreUsu} onChange={nombre} id="InputFormTrabajador" placeholder="Ingrese su nombre completo" />
                <label htmlFor="email" id="LabelFormTrabajador">Correo electrónico</label><br />
                <input type="text" value={EmailUsu} onChange={email} id="InputFormTrabajador" placeholder="Ingrese su correo electrónico" />
                <label htmlFor="password" id="LabelFormTrabajador">Contraseña</label><br />
                <input type="text" value={ContraUsu} onChange={password} id="InputFormTrabajador" placeholder="Ingrese su contraseña" />
                <label htmlFor="direccion" id="LabelFormTrabajador">Dirección</label><br />
                <input type="text" value={DirecUsu} onChange={direccion} id="InputFormTrabajador" placeholder="Ingrese la dirección de entrega" />
                <label htmlFor="foto" id="LabelFormTrabajador">Foto de perfil (Opcional)</label><br />
                <input id="FotoPerfil" type="file" accept="image/*,application/pdf" onChange={cargarImagen} ref={inputFileRef} />
                <button id="BtnCargar" onClick={cargar}>Registrarse</button>
                <div id="registro-to-Link-Container">
                <span className="registro-texto">¿Ya estas registrad@?</span>
                    <Link to="/Login" className="registro-to-link">
                        ¡¡Inicia sesion AQUI!!
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RegistrarseComponet;
