import React, { useEffect, useState } from "react";
import "../style/Gestion_NotificacionesStyle.css";
import ServiciosFeedback from "../services/ServiciosFeedBack";

const Gestion_Notificaciones = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [respuestas, setRespuestas] = useState({});

  useEffect(() => {
    const cargarFeedbacks = async () => {
      try {
        const data = await ServiciosFeedback.get();
        console.log("Feedbacks:", data);
        setFeedbacks(data);
      } catch (error) {
        console.error("Error al cargar feedbacks:", error);
      }
    };

    cargarFeedbacks();
  }, []);

  const handleResponder = async (feedbackId, correo) => {
    const mensaje = respuestas[feedbackId] || "";

    const enviado = await ServiciosFeedback.post(correo, mensaje);

    if (enviado) {
      const actualizado = await ServiciosFeedback.patch(feedbackId);

      if (actualizado) {
        setFeedbacks((prev) =>
          prev.map((f) =>
            f.id === feedbackId ? { ...f, estado: "respondido" } : f
          )
        );
        setRespuestas((prev) => ({ ...prev, [feedbackId]: "" }));
      }
    }
  };

  return (
    <div className="panel-container">
      <h1 className="panel-title">Panel de Notificaciones</h1>
      <p className="panel-subtitle">
        Gestiona las consultas y mensajes de tus usuarios
      </p>
      <div className="panel-feedbacks">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <div className="feedback-header">
              <div className="feedback-userinfo-row">
                <div className="feedback-avatar"></div>
                <div className="feedback-name-email">
                  <div>
                    <strong>{feedback.nombre_usu}</strong>
                    {feedback.estado !== "respondido" && (
                      <span className="badge-nuevo">Nuevo</span>
                    )}
                  </div>
                  <div className="feedback-email">{feedback.email_usu}</div>
                </div>
              </div>
              <label className="feedback-check">
                <input type="checkbox" disabled /> Marcar como leído
              </label>
            </div>

            <p className="feedback-time">Hace {feedback.dias || 0} días</p>

            <div className="feedback-text">{feedback.texto}</div>

            {feedback.estado !== "respondido" && (
              <div className="respuesta-form">
                <textarea
                  value={respuestas[feedback.id] || ""}
                  onChange={(e) =>
                    setRespuestas({
                      ...respuestas,
                      [feedback.id]: e.target.value,
                    })
                  }
                  placeholder="Escribe tu respuesta..."
                />
                <button
                  className="btn-responder"
                  onClick={() =>
                    handleResponder(feedback.id, feedback.email_usu)
                  }
                >
                  Enviar respuesta
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gestion_Notificaciones;
