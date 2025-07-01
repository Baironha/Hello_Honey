import { useState, useEffect } from "react";
import { obtenerMetricasDashboard } from "../services/ServicioDashboard";
import { obtenerInteraccionesTiempoReal } from "../services/ServicioGraficosHoney";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "../style/DashboardHoney.css";

function DashboardHoney() {
  const [metrics, setMetrics] = useState({
    total_chats: 0,
    total_audios: 0,
    promedio_respuesta: 0,
    estado_lmstudio: "",
    ultima_transcripcion: "",
  });

  const [timeSeries, setTimeSeries] = useState([]);
  const [avanceAnalitico, setAvanceAnalitico] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await obtenerMetricasDashboard();
        console.log("[DEBUG] Métricas recibidas:", data);
        setMetrics(data);
      } catch (error) {
        console.error("Error al obtener métricas:", error);
      }
    };

    const fetchTimeSeries = async () => {
      try {
        const series = await obtenerInteraccionesTiempoReal();
        console.log("[DEBUG] Series recibidas:", series);
        setTimeSeries(series);
      } catch (error) {
        console.error("Error al obtener interacciones:", error);
      }
    };

    const fetchAvanceAnalitico = async () => {
      try {
        // 🔍 Simulación mejorada: añade precisión y satisfacción por semana
        const mock = [
          { week: "Semana 1", interacciones: 50, precision: 70, satisfaccion: 65 },
          { week: "Semana 2", interacciones: 120, precision: 75, satisfaccion: 70 },
          { week: "Semana 3", interacciones: 200, precision: 80, satisfaccion: 78 },
          { week: "Semana 4", interacciones: 320, precision: 82, satisfaccion: 80 },
          { week: "Semana 5", interacciones: 450, precision: 85, satisfaccion: 83 },
        ];
        setAvanceAnalitico(mock);
      } catch (error) {
        console.error("Error al obtener avance analítico:", error);
      }
    };

    fetchMetrics();
    fetchTimeSeries();
    fetchAvanceAnalitico();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>📊 Dashboard Honey</h1>

      <div className="cards">
        <div className="card">
          <h3>Total Mensajes</h3>
          <p>{metrics.total_chats}</p>
        </div>

        <div className="card">
          <h3>Total Audios Generados</h3>
          <p>{metrics.total_audios}</p>
        </div>

        <div className="card">
          <h3>Tiempo Promedio Respuesta</h3>
          <p>{metrics.promedio_respuesta} s</p>
        </div>

        <div className="card">
          <h3>Estado LM Studio</h3>
          <p>{metrics.estado_lmstudio}</p>
        </div>

        <div className="card full">
          <h3>Última Transcripción</h3>
          <p>{metrics.ultima_transcripcion}</p>
        </div>

        <div className="card full">
          <h3>📈 Interacciones en Tiempo Real</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeSeries}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card full">
          <h3>📊 Avance Analítico de Honey</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={avanceAnalitico}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="interacciones" stroke="#8884d8" name="Interacciones" />
              <Line type="monotone" dataKey="precision" stroke="#82ca9d" name="Precisión (%)" />
              <Line type="monotone" dataKey="satisfaccion" stroke="#ffc658" name="Satisfacción (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardHoney;
