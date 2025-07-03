import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { enviarMensaje, obtenerHistorial } from "../services/ServicioChatHoney";
import "../style/ChatHoney.css";

function ChatHoneyComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [recording, setRecording] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const cargarHistorial = async () => {
      try {
        const data = await obtenerHistorial();
        const formateado = data.flatMap((item) => [
          { type: "text", content: item.mensaje, role: "user" },
          { type: "text", content: item.respuesta, role: "assistant" },
        ]);
        setMessages(formateado);
      } catch (error) {
        console.error("Error al cargar historial:", error);
      }
    };

    cargarHistorial();
  }, []);

  // ✅ Envía mensaje de texto puro
  const handleSend = async () => {
    if (!input) return;

    const newUserMessage = { type: "text", content: input, role: "user" };
    setMessages((prev) => [...prev, newUserMessage]);

    try {
      const res = await enviarMensaje(input); // solo texto
      console.log("[DEBUG] Respuesta del backend:", res);

      const respuestaTexto = res.respuesta;
      const respuestaAudio = res.audio;

      setMessages((prev) =>
        [
          ...prev,
          { type: "text", content: respuestaTexto, role: "assistant" },
          respuestaAudio
            ? {
                type: "audio",
                content: `http://localhost:8000${respuestaAudio}`,
                role: "assistant",
              }
            : null,
        ].filter(Boolean)
      );
    } catch (err) {
      console.error("Error al enviar mensaje:", err);
    }

    setInput("");
  };

  //  Inicia grabación de audio
  const startRecording = async () => {
    try {
      setRecording(true);
      audioChunks.current = [];

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data) audioChunks.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        if (!audioChunks.current.length) return;

        const blob = new Blob(audioChunks.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        console.log("🎙️ Audio grabado:", url);

        //Muestra en UI mensaje "usuario envió audio"
        setMessages((prev) => [
          ...prev,
          { type: "audio", content: url, role: "user" },
        ]);

        try {
          const res = await enviarMensaje("", blob);
          console.log("[DEBUG] Respuesta backend:", res);

          const respuestaTexto = res.respuesta;
          const respuestaAudio = res.audio;

          setMessages((prev) =>
            [
              ...prev,
              { type: "text", content: respuestaTexto, role: "assistant" },
              respuestaAudio
                ? {
                    type: "audio",
                    content: `http://localhost:8000${respuestaAudio}`,
                    role: "assistant",
                  }
                : null,
            ].filter(Boolean)
          );
        } catch (err) {
          console.error("Error enviando audio:", err);
        }
      };

      mediaRecorderRef.current.start();
    } catch (err) {
      console.error("Error al iniciar grabación:", err);
    }
  };

  // Detiene grabación y envía
  const stopRecording = () => {
    setRecording(false);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`main-container ${darkMode ? "dark" : ""}`}>
      <aside className="sidebar">
        <button className="new-chat-button" onClick={handleGoHome}>
          Ir a Home
        </button>
        <button className="new-chat-button">Nuevo Chat</button>
        <input type="text" placeholder="Buscar chat" />
        <label>Contactanos:</label>
        <select>
          <option>contacto1@gmail.com</option>
          <option>contacto2@outlook.com</option>
        </select>
        <div className="theme-switch">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>
      </aside>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.role}`}>
              <div className="chat-bubble fade-in">
                {msg.type === "text" && (
                  <div className="message-text">
                    {msg.content.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                )}
                {msg.type === "audio" && <audio controls src={msg.content} />}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <button
            className={`mic-button ${recording ? "recording" : ""}`}
            onClick={recording ? stopRecording : startRecording}
          >
            🎤
          </button>
          <input
            type="text"
            value={input}
            placeholder="Escribe tu mensaje..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-button" onClick={handleSend}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatHoneyComponent;
