import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style/ChatHoney.css";

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [recording, setRecording] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleSend = () => {
    if (!input && !file && !audioURL) return;

    const newMessage = {
      type: file ? "file" : audioURL ? "audio" : "text",
      content: file || audioURL || input,
      role: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setFile(null);
    setAudioURL(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const startRecording = async () => {
    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunks.current = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
    };

    mediaRecorderRef.current.start();
  };

  const stopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current.stop();
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`main-container ${darkMode ? "dark" : ""}`}>
      <aside className="sidebar">
        <button className="new-chat-button" onClick={handleGoHome}>
          🏠 Ir a Home
        </button>

        <button className="new-chat-button">Nuevo Chat</button>

        <input type="text" placeholder="Buscar chat" />
        <label>Modelo:</label>
        <select>
          <option>Psicologia</option>
          <option>Economia</option>
        </select>
        <div className="sidebar-section">Historial de chats</div>
        <div className="sidebar-section">Documentos subidos</div>
        <div className="sidebar-section">Imágenes subidas</div>
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
            <div
              key={index}
              className={`chat-message ${msg.role === "user" ? "user" : "assistant"}`}
            >
              <div className="chat-bubble fade-in">
                {msg.type === "text" && msg.content}
                {msg.type === "file" && (
                  <a
                    href={URL.createObjectURL(msg.content)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📎 {msg.content.name}
                  </a>
                )}
                {msg.type === "audio" && <audio controls src={msg.content} />}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <label className="file-button">
            📎
            <input
              type="file"
              accept=".pdf,.docx,.doc,image/*"
              onChange={handleFileChange}
            />
          </label>

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

export default ChatComponent;
