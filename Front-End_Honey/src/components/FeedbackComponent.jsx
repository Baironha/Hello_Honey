/* import React from 'react'

function NotificacionesAdmins() {
    return (
        <div>
            <div>
                <h1>¿Te gusto la experiencia en Hello Honey?</h1>
                <h3>Deja tu comnetario y nosotros lo leeremos, animate y cuentanos la experiencia vida para poder ,mejorar</h3>
            </div>
        </div>
    )
}

export default NotificacionesAdmins */


import React, { useState } from "react";
import { Star } from "lucide-react";
import ServiciosFeedBack from "../services/ServiciosFeedBack"; // Ajusta la ruta según la ubicación real
import "../style/Feedback.css";

export default function FeedbackComponent() {
  const [email, setEmail] = useState("");
  const [nombre, setnombre] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ServiciosFeedBack.postUsers(nombre,email,feedback,rating);
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="feedback-input"
              required
            />
          </div>

          <div>
            <label className="feedback-label">Nombre del usuario</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setnombre(e.target.value)}
              className="feedback-input"
              required
            />
          </div>

          <div>
            <label className="feedback-label">Tu feedback</label>
            <textarea
              value={feedback}
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
