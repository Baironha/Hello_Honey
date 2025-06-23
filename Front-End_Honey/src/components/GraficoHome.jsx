import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import '../style/GFHomestyle.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const symbols = {
  AAPL: "Apple",
  TSLA: "Tesla",
  GOOGL: "Google",
  MSFT: "Microsoft",
  AMZN: "Amazon",
  META: "Meta (Facebook)",
  NFLX: "Netflix",
  NVDA: "NVIDIA",
  INTC: "Intel",
  AMD: "AMD",
  IBM: "IBM"
};

function GraficoHome() {
  const [symbol, setSymbol] = useState("AAPL");
  const [dataChart, setDataChart] = useState({});

  const fetchQuoteData = async (symbol) => {
    try {
      const token = 'd0nsvf9r01qn5ghlrbdgd0nsvf9r01qn5ghlrbe0'; // tu token válido
      const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.c) {
        const color = 'rgb(33, 71, 241)'; // azul opaco
        const now = new Date();
        const timestamps = [
          new Date(now.getTime() - 60000 * 3), // hace 3 min
          new Date(now.getTime() - 60000 * 2), // hace 2 min
          new Date(now.getTime() - 60000 * 1), // hace 1 min
          now                                  // ahora
        ];

        const chart = {
          datasets: [
            {
              label: `Precio de ${symbols[symbol]}`,
              data: [
                { x: timestamps[0], y: data.o },
                { x: timestamps[1], y: data.h },
                { x: timestamps[2], y: data.l },
                { x: timestamps[3], y: data.c }
              ],
              borderColor: color,
              backgroundColor: color,
              fill: false,
              tension: 0,
              pointRadius: 5,
              pointHoverRadius: 7
            }
          ]
        };

        setDataChart(chart);
      }
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  };

  useEffect(() => {
    fetchQuoteData(symbol);
    const interval = setInterval(() => fetchQuoteData(symbol), 1000); // actualiza cada 2s
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div id="grafico-home-container" className="grafico-home-container">
      <div id="grafico-home-content" className="grafico-home-card">
        <h1 className="grafico-home-title">¿Cómo va el mundo?</h1>

        <p className="grafico-home-description">
          
            Es importante entender la economía, cómo se mueve y funciona para poder desarrollar proyectos <br />
            con mayor posibilidad de rentabilidad. Saber de economía garantiza un mayor porcentaje de anclaje en el mercado. <br />
            ¡NO TE QUEDES SIN TU ESPACIO EN EL MUNDO EMPRESARIAL!
          
        </p>

        <div id="grafico-home-selector" className="grafico-home-selector">
          <label htmlFor="symbol" className="grafico-home-label">Selecciona un activo:</label>
          <select
            id="symbol"
            className="grafico-home-select"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          >
            {Object.entries(symbols).map(([key, name]) => (
              <option key={key} value={key}>{name}</option>
            ))}
          </select>
        </div>

        <div id="grafico-home-chart" className="grafico-home-chart">
          {dataChart?.datasets ? (
            <Line
              data={dataChart}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: context => `$${context.raw.y.toFixed(2)}`,
                      title: context => {
                        const date = context[0].parsed.x;
                        return new Date(date).toLocaleString();
                      },
                      labelTextColor: () => 'rgb(33, 71, 241)'
                    }
                  }
                },
                scales: {
                  x: {
                    type: 'time',
                    time: {
                      tooltipFormat: 'PPpp',
                      unit: 'minute'
                    },
                    ticks: { color: 'rgb(33, 71, 241)' },
                    grid: { color: '#222' }
                  },
                  y: {
                    ticks: {
                      color: 'rgb(33, 71, 241)' ,
                      callback: value => `$${value}`
                    },
                    grid: { color: '#222' }
                  }
                }
              }}
            />
          ) : (
            <p className="stock-chart-loading">Cargando datos...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GraficoHome;








