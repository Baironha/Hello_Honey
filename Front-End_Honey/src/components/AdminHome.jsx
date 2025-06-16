

import React, { useState } from "react";
import JitsiRoom from "../components/ReunionesAdminComponent";
import "../style/AdminHomeStyle.css";

const AdmininHome = () => {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [roomName, setRoomName] = useState(null);

  const handleEnviarCorreo = () => {
    if (!correo || !mensaje) {
      alert("Por favor completa el correo y el mensaje.");
      return;
    }
    alert(`Correo enviado a: ${correo}\nMensaje: ${mensaje}`);
    setCorreo("");
    setMensaje("");
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
          <input
            type="email"
            className="input"
            placeholder="Correo destinatario"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <textarea
            className="textarea"
            placeholder="Escribe tu mensaje aquí..."
            rows={6}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <button className="button" onClick={handleEnviarCorreo}>Enviar</button>
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
              <tr><td>Básica</td><td>$10</td><td>1 mes</td></tr>
              <tr><td>Estándar</td><td>$25</td><td>3 meses</td></tr>
              <tr><td>Premium</td><td>$80</td><td>12 meses</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>Ventas Actuales</h2>
          <div className="dashboard-placeholder">[Gráfico de ventas actuales]</div>
        </div>

        <div className="card">
          <h2>Predicción de Ventas Futuras</h2>
          <div className="dashboard-placeholder">[Gráfico de predicciones]</div>
        </div>
      </div>
    </div>
  );
};

export default AdmininHome;
