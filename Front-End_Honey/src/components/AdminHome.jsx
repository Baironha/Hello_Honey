import React, { useState, useRef } from "react";
import JitsiRoom from "../components/ReunionesAdminComponent";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import "../style/AdminHomeStyle.css";

const AdmininHome = () => {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [roomName, setRoomName] = useState(null);

  const form = useRef();

  const handleEnviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_15kzjih', 'template_hktr8lp', form.current, {
        publicKey: 'oC2Z_8LglE8Xa6AM2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setCorreo("");
          setMensaje("");

          Swal.fire({
            title: '✅ Correo enviado de forma exitosa',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            background: '#ffffff',
            color: '#333',
            position: 'center',
            customClass: {
              popup: 'swal2-show-large',
              title: 'swal2-title-large'
            },
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleIniciarReunion = () => {
    const nombreSala = "reunion-" + Math.random().toString(36).substring(2, 10);
    setRoomName(nombreSala);
  };

  return (
    <div className="admin-Home-container">
      <h1 className="title">Panel de Administración</h1>

      <div className="vertical-container">
        <div className="card">
          <h2>Enviar Correos</h2>
          <form ref={form} onSubmit={handleEnviarCorreo}>
            <input
              type="email"
              name="user_email"
              className="input"
              placeholder="Correo destinatario"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <textarea
              name="message"
              className="textarea"
              placeholder="Escribe tu mensaje aquí..."
              rows={6}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            <button className="button" type="submit">Enviar</button>
          </form>
        </div>

        <div className="card">
          <h2>Videollamada / Reuniones</h2>
          <button className="button" onClick={handleIniciarReunion}>Iniciar Reunión</button>
          <div className="video-placeholder">
            {roomName ? (
              <div style={{ height: "100%", width: "100%" }}>
                <JitsiRoom roomName={roomName} />
              </div>
            ) : (
              "[Video en vivo]"
            )}
          </div>
        </div>

        <div className="card">
          <h2>Membresías</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>FREE</td><td>$0.0</td><td>1 mes</td></tr>
              <tr><td>PREMIUM</td><td>$5.00</td><td>1 mes</td></tr>
              <tr><td>VIP</td><td>$9.00</td><td>1 mes</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdmininHome;
