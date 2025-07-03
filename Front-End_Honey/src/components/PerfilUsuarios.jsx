

// PerfilUsuarios.jsx

import React, { useEffect, useState } from 'react';
import "../style/PerfilUsuStyle.css";
import Cookies from 'js-cookie';
import ServiciosRegister from '../services/ServiciosRegister';
import Servicio_IMG_AWS from '../services/Servicio_IMG_AWS';
import PerfilUsu from '../services/PerfilUsu';
import { jwtDecode } from "jwt-decode";

function PerfilUsuarios() {
  const token = Cookies.get("access_token");
  const datos = jwtDecode(token);

  const [usuario, setUsuario] = useState({});
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Email, setEmail] = useState("");
  const [imagen, setImagen] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);
  const [imagenBD, setImagenBD] = useState("");

  useEffect(() => {
    async function fetchDataImagen() {
      try {
        const res = await PerfilUsu.getUsers(datos.user_id);
        setImagenBD(res.Imagen);
      } catch (error) {
        console.error("Error al cargar la imagen:", error);
      }
    }

    async function fetchDataUsuario() {
      try {
        const res = await ServiciosRegister.getUsers(datos.user_id);
        setUsuario(res);
        setNombre(res.username || "");
        setApellido(res.last_name || "");
        setEmail(res.email || "");
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
      }
    }

    fetchDataImagen();
    fetchDataUsuario();
  }, [datos.user_id]);

  const inputNombre = (e) => setNombre(e.target.value);
  const inputApellido = (e) => setApellido(e.target.value);
  const inputEmail = (e) => setEmail(e.target.value);

  const btneditarPerfil = () => {
    setNombre(usuario.username || "");
    setApellido(usuario.last_name || "");
    setEmail(usuario.email || "");
  };

  const btnguardarPerfil = async () => {
    try {
      let nuevaImagenURL = imagenBD;

      if (imagen instanceof File) {

        const resultado2 = await Servicio_IMG_AWS.getimagen(datos.user_id);
        console.log(resultado2)
        const resultado = await Servicio_IMG_AWS.uploadImageAWS(imagen, datos.user_id);
        
        if (resultado.url) {
          nuevaImagenURL = resultado.url;
          setImagenPreview(resultado.url);
          setImagenBD(resultado.url);
        }
      }

      const response = await fetch(`http://127.0.0.1:8000/api/usuarios/${datos.user_id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          direccion: usuario.direccion || "",
          edad: usuario.edad || 0,
          Imagen: nuevaImagenURL
        })
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Respuesta del servidor:", text);
        throw new Error("Error en la actualización del perfil");
      }

      alert("Perfil actualizado correctamente.");
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      alert("Hubo un error al actualizar el perfil.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImagen(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Solo se permiten archivos de imagen');
      e.target.value = null;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-left">
          <div className="profile-image-container">
            <div className="profile-image">
              {imagenPreview ? (
                <img src={imagenPreview} alt="Imagen nueva" className="preview-img" />
              ) : imagenBD ? (
                <img src={imagenBD} alt="Imagen actual" className="preview-img" />
              ) : (
                <p>Selecciona una imagen</p>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="edit-photo-button"
              onChange={handleImageChange}
            />
          </div>
          <h2>{usuario.username}</h2>
          <h3>{usuario.last_name}</h3>
          <div className="info">
            <p>📧 {usuario.email}</p>
            <p>🗓️ Miembro desde {usuario.date_joined?.slice(0, 10)}</p>
          </div>
        </div>

        <div className="profile-right">
          <div className="header">
            <h3>Información Personal</h3>
            <button onClick={btneditarPerfil} className="edit-button">Editar Perfil</button>
          </div>
          <div className="section">
            <h4>Datos Básicos</h4>
            <div className="input-group">
              <input type="text" value={Nombre} onChange={inputNombre} placeholder="Nombre" />
              <input type="text" value={Apellido} onChange={inputApellido} placeholder="Apellido" />
            </div>
          </div>
          <div className="section">
            <h4>Contacto</h4>
            <input type="email" value={Email} onChange={inputEmail} placeholder="Email" />
          </div>
          <br />
          <button onClick={btnguardarPerfil} className="edit-button">Guardar Cambios</button>
        </div>
      </div>
    </div>
  );
}

export default PerfilUsuarios;
