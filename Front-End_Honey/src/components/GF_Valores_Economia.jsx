import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../style/GF_Valores_Economia.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GF_Valores_Economia = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch('https://v6.exchangerate-api.com/v6/edbf157c47c3938221494262/latest/USD');
      const data = await response.json();
      if (data.result === 'success') {
        setExchangeRates(data.conversion_rates);
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const selectedCurrencies = ['EUR', 'CRC', 'MXN', 'PEN', 'CLP', 'ARS', 'COP', 'BRL', 'JPY', 'CAD'];

  const chartData = {
    labels: selectedCurrencies,
    datasets: [
      {
        label: 'Valor frente al USD',
        data: selectedCurrencies.map(currency => exchangeRates[currency]),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="gf-valores-container">
      <h2 className="gf-valores-title">Valores del Dólar frente a otras monedas</h2>
      {loading ? <p className="gf-valores-loading">Cargando datos...</p> : <Bar data={chartData} />}
    </div>
  );
};

export default GF_Valores_Economia;
