


import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import ServiciosFeedBack from "../services/ServiciosFeedBack"; // Ajusta la ruta si es necesario
import "../style/Feedback.css";

export default function FeedbackComponent() {
  const [email_usu, setEmail] = useState("");
  const [nombre_usu, setnombre] = useState("");
  const [texto, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [fecha, setFecha] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Establecer la fecha actual al cargar el componente
  useEffect(() => {
    const hoy = new Date();
    const formatoFecha = hoy.toISOString().split("T")[0]; // YYYY-MM-DD
    setFecha(formatoFecha);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ServiciosFeedBack.postUsers(nombre_usu, email_usu, texto, rating, fecha);
      setSubmitted(true);
    } catch (error) {
      console.error("Error al enviar feedback:", error);
    }
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Tu opinión importa</h2>
      {submitted ? (
        <div className="feedback-success">¡Gracias por tu feedback!</div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div>
            <label className="feedback-label">Correo electrónico</label>
            <input
              type="email"
              value={email_usu}
              onChange={(e) => setEmail(e.target.value)}
              className="feedback-input"
              required
            />
          </div>

          <div>
            <label className="feedback-label">Nombre del usuario</label>
            <input
              type="text"
              value={nombre_usu}
              onChange={(e) => setnombre(e.target.value)}
              className="feedback-input"
              required
            />
          </div>

          <div>
            <label className="feedback-label">Fecha</label>
            <input
              type="date"
              value={fecha}
              readOnly // evita que se modifique
              className="feedback-input"
            />
          </div>

          <div>
            <label className="feedback-label">Tu feedback</label>
            <textarea
              value={texto}
              onChange={(e) => setFeedback(e.target.value)}
              className="feedback-textarea"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="feedback-label">¿Qué tan satisfecho estás?</label>
            <div className="feedback-stars">
              {[...Array(5)].map((_, index) => {
                const current = index + 1;
                return (
                  <button
                    type="button"
                    key={current}
                    onClick={() => setRating(current)}
                    onMouseEnter={() => setHover(current)}
                    onMouseLeave={() => setHover(rating)}
                    className="star-button"
                  >
                    <Star
                      fill={current <= (hover || rating) ? "#facc15" : "none"}
                      stroke="#facc15"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <button type="submit" className="feedback-button">
            Enviar feedback
          </button>
        </form>
      )}
    </div>
  );
}
