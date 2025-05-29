/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/CarritoMembresia.css';
import logoMembresia from '../img/PNG_PREMIUN.jpg';

function Carrito_Compra_Components() {
  const [modoOscuro, setModoOscuro] = useState(true);
  const [descuento, setDescuento] = useState(0);
  const navigate = useNavigate();

  const precioBase = 10.00;
  const total = (precioBase - descuento).toFixed(2);

  return (
    <div className={`carrito-container ${modoOscuro ? 'oscuro' : 'claro'}`}>
      <button className='cambiar-modo' onClick={() => setModoOscuro(!modoOscuro)}>
        Cambiar a modo {modoOscuro ? 'claro' : 'oscuro'}
      </button>

      <img src={logoMembresia} alt="Logo membresía" className="logo-membresia" />
      <h2>Membresía Honey VIP</h2>
      <p>Acceso exclusivo a sesiones premium, asistencia personalizada y contenido prioritario.</p>

      <h3>Item:</h3>
      <p>Honey VIP</p>

      <h3>Descuento:</h3>
      <p>
        <input 
          type="number" 
          value={descuento} 
          onChange={(e) => setDescuento(parseFloat(e.target.value) || 0)} 
          placeholder="Agregar descuento desde /emple"
          className="input-descuento"
        />
      </p>

      <h3>Total:</h3>
      <p>${total}</p>

      <div className='botones-pago'>
        <button onClick={() => navigate('/pagoPaypal')}>Pagar con PayPal</button>
        <button onClick={() => navigate('/pagoGoogle')}>Pagar con Google Play</button>
        <button onClick={() => navigate('/pagoPage')}>Pagar en la página</button>
      </div>
    </div>
  );
}

export default Carrito_Compra_Components;
 */



import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/CarritoMembresia.css';
import defaultImage from '../img/IMG_CARD_ECO.jpg';

function Carrito_Compra_Components() {
  const [modoOscuro, setModoOscuro] = useState(true);
  const [descuento, setDescuento] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const datosDefault = {
    nombre: 'Honey VIP',
    precio: 10.0,
    descripcion: 'Acceso exclusivo a sesiones premium, asistencia personalizada y contenido prioritario.',
    imagen: defaultImage
  };

  const { nombre, precio, descripcion, imagen } = location.state || datosDefault;

  useEffect(() => {
    if (!location.state) {
      navigate('/Carrito');
    }
  }, [location.state, navigate]);

  const total = (precio - descuento).toFixed(2);

  return (
    <div className={`carrito-container ${modoOscuro ? 'oscuro' : 'claro'}`}>
      <button className='cambiar-modo' onClick={() => setModoOscuro(!modoOscuro)}>
        Cambiar a modo {modoOscuro ? 'claro' : 'oscuro'}
      </button>

      <img src={imagen} alt="Logo membresía" className="logo-membresia" />
      <h2>Membresía {nombre}</h2>
      <p>{descripcion}</p>

      <h3>Item:</h3>
      <p>{nombre}</p>

      <h3>Descuento:</h3>
      <p>
        <input 
          type="number" 
          value={descuento} 
          onChange={(e) => setDescuento(parseFloat(e.target.value) || 0)} 
          placeholder="Agregar descuento desde /emple"
          className="input-descuento"
        />
      </p>

      <h3>Total:</h3>
      <p>${total}</p>

      <div className='botones-pago'>
        <button onClick={() => navigate('/pagoPaypal')}>Pagar con PayPal</button>
        <button onClick={() => navigate('/pagoGoogle')}>Pagar con Google Play</button>
        <button onClick={() => navigate('/pagoPage')}>Pagar en la página</button>
      </div>
    </div>
  );
}

export default Carrito_Compra_Components;