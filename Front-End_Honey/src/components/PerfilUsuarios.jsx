/* import React, { useEffect, useState } from 'react'
import "../style/PerfilUsuStyle.css"
import Cookies from 'js-cookie';
import ServiciosRegister from '../services/ServiciosRegister';
import uploadImageAWS from '../services/Servicio_IMG_AWS'
import { FaUserCircle } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

function PerfilUsuarios() {
    const id = Cookies.get("user_id");
    const token = Cookies.get("access_token");
    const datos = jwtDecode(token)

    console.log(datos);
    

    const [usuario, setUsuario] = useState([]);
    const [Nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Email, setEmail] = useState("");
    const [imagen, setimagen] = useState("");
    const [imagenPreview, setImagenPreview] = useState(null); 

    useEffect(() => {
        async function fetchData() {
            if (!datos.user_id) {
                console.error("No se encontró la cookie user_id");
                return;
            }
            if (token) {
                try {
                    const datillos = await ServiciosRegister.getUsers(datos.user_id);
                    setUsuario(datillos);
                    setNombre(datillos.username || "");
                    setApellido(datillos.last_name || "");
                    setEmail(datillos.email || "");
                    setimagen(datillos.Imagen || "");
                    setImagenPreview(datillos.Imagen || "");
                } catch (error) {
                    console.error("Error al cargar los datos del usuario:", error);
                }
            }
        }
        fetchData();
    }, []);

    console.log(usuario);
    

    function inputNombre(evento) {
        setNombre(evento.target.value);
    }

    function inputApellido(evento) {
        setApellido(evento.target.value);
    }

    function inputEmail(evento) {
        setEmail(evento.target.value);
    }

    function btneditarPerfil() {
        setNombre(usuario.username || "");
        setApellido(usuario.last_name || "");
        setEmail(usuario.email || "");
        setimagen(usuario.Imagen || "");
        setImagenPreview(usuario.Imagen || "");
    }

    async function btnguardarPerfil() {
        try {
            
            if (!id) {
                console.error("ID de usuario no disponible");
                return;
            }

            
            const response = await fetch(`http://127.0.0.1:8000/api/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    direccion: usuario.direccion || "",
                    edad: usuario.edad || 0,
                    Imagen: usuario.Imagen || ""
                })
            });

            if (!response.ok) {
                const text = await response.text();
                console.error("Respuesta del servidor:", text);
                throw new Error("Error en la actualización del perfil");
            }

            
            if (imagen instanceof File) {
                const resultado = await uploadImageAWS(imagen, id);
                if (resultado.url) {
                    setImagenPreview(resultado.url);
                }
            }

            alert("Perfil actualizado correctamente.");
            location.reload();
        } catch (error) {
            console.error("Error al actualizar perfil:", error);
            alert("Hubo un error al actualizar el perfil.");
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setimagen(file); 
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
                                <img src={imagenPreview} alt="Imagen seleccionada" className="preview-img" />
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
                        <p>:correo:{usuario.email}</p>
                        <p>:fecha: Miembro desde {usuario.date_joined?.slice(0, 10)}</p>
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
 */



















import React, { useEffect, useState } from 'react';
import "../style/PerfilUsuStyle.css";
import Cookies from 'js-cookie';
import ServiciosRegister from '../services/ServiciosRegister';
import PerfilUsu from '../services/PerfilUsu';
import uploadImageAWS from '../services/Servicio_IMG_AWS';
import { jwtDecode } from "jwt-decode";


function PerfilUsuarios() {
    //const id = Cookies.get("user_id");
    const token = Cookies.get("access_token");
    const datos = jwtDecode(token);

    const [usuario, setUsuario] = useState([]);
    const [Nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Email, setEmail] = useState("");
    const [imagen, setImagen] = useState("");
    const [perrito, setImagenVieja] = useState();
    const [imagenPreview, setImagenPreview] = useState(null);




    useEffect(() => {
        async function fetchDataImagenes() {
            try {
                const imagenesBD = await PerfilUsu.getUsers();
                console.log(datos.user_id)
                const imagenEncontrada = imagenesBD.find(img => img.id === datos.user_id);
                console.log("Objeto encontrado:");
                console.log(imagenEncontrada);
                /* const imagenfiltrada = imagenesBD.filter(img => imagenesBD[i] === datos.user_id) */
                /* setImagenVieja(imagenesBD[0].id) */
                


            } catch (error) {
                
                console.error("Error al cargar los datos del usuario:", error);
            }
        }
        fetchDataImagenes();
    }, []);

    console.log(perrito)

    useEffect(() => {
        async function fetchData() {
            if (!datos.user_id || !token) return;
            try {
                const datillos = await ServiciosRegister.getUsers(datos.user_id);
                
                




                console.log(datillos);
                
                setUsuario(datillos);
                setNombre(datillos.username || "");
                setApellido(datillos.last_name || "");
                setEmail(datillos.email || "");
                setImagenVieja(datillos.Imagen || "");
                setImagenPreview(datillos.Imagen || "");
            } catch (error) {
                
                console.error("Error al cargar los datos del usuario:", error);
            }
        }
        fetchData();
    }, []);
    
    const inputNombre = (e) => setNombre(e.target.value);
    const inputApellido = (e) => setApellido(e.target.value);
    const inputEmail = (e) => setEmail(e.target.value);

    const btneditarPerfil = () => {
        setNombre(usuario.username || "");
        setApellido(usuario.last_name || "");
        setEmail(usuario.email || "");
        setImagen(usuario.Imagen || "");
        setImagenPreview(usuario.Imagen || "");
    };

    const btnguardarPerfil = async () => {
        try {
           


            //AQUI IMPRIMO LA IMAGEN NUEVA

            console.log(imagen);
            console.log(imagenVieja);

            //AQUI IMPRIMO LA VIEJA

            const imagenviejafiltrada = imagenVieja.filter(img=> imagen.id=img.id)
            console.log(imagenviejafiltrada);
            



            //Aqui imprimo la imagen nueva y sustituyo el nombre 

            let nuevaImagenURL = usuario.Imagen;

            //AQUI GUARDA EN AMAZON MODULADO

            if (imagen instanceof File) {
                const resultado = await uploadImageAWS(imagen, datos.user_id);
                if (resultado.url) {
                    nuevaImagenURL = resultado.url;
                    setImagenPreview(resultado.url);
                }
            }

            const response = await fetch(`http://127.0.0.1:8000/api/usuarios/${datos.user_id}`, {
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
                {/* Lado Izquierdo */}
                <div className="profile-left">
                    <div className="profile-image-container">
                        <div className="profile-image">
                            {imagenPreview ? (
                                <img src={imagenPreview} alt="Imagen seleccionada" className="preview-img" />
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

                {/* Lado Derecho */}
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
