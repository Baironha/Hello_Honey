/* 


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
 */
















/* "use client"

import { useState } from "react"
import "../style/CarritoMembresia.css"

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Membresía Premium",
      price: 19.99,
      duration: "mensual",
      quantity: 1,
      description: "Acceso completo con soporte prioritario",
    },
    {
      id: 2,
      name: "Plan Empresarial",
      price: 49.99,
      duration: "mensual",
      quantity: 2,
      description: "Solución completa para equipos grandes",
    },
    {
      id: 3,
      name: "Membresía Básica",
      price: 9.99,
      duration: "mensual",
      quantity: 1,
      description: "Funciones esenciales para comenzar",
    },
  ])

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTax = () => {
    return getSubtotal() * 0.1 // 10% tax
  }

  const getShipping = () => {
    return getSubtotal() > 50 ? 0 : 5.99
  }

  const getTotal = () => {
    return getSubtotal() + getTax() + getShipping()
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="cartCarrito-container">
      <div className="cart-header">
        <h1>Tu Carrito de Compras</h1>
        <p className="items-count">{getTotalItems()} artículos</p>
      </div>

      <div className="cart-content">
        <div className="cart-items-section">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h2>Tu carrito está vacío</h2>
              <p>Agrega algunos productos para comenzar</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <div className="placeholder-image">
                      <span>📦</span>
                    </div>
                  </div>

                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <p className="item-duration">Facturación {item.duration}</p>
                  </div>

                  <div className="item-controls">
                    <div className="quantity-section">
                      <label>Cantidad:</label>
                      <div className="quantity-controls">
                        <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          -
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className="price-section">
                      <div className="unit-price">${item.price.toFixed(2)} c/u</div>
                      <div className="total-price">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>

                    <button className="remove-btn" onClick={() => removeItem(item.id)} title="Eliminar producto">
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="summary-card">
              <h2>Resumen del Pedido</h2>

              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal ({getTotalItems()} artículos):</span>
                  <span>${getSubtotal().toFixed(2)}</span>
                </div>

                <div className="summary-row">
                  <span>Envío:</span>
                  <span>
                    {getShipping() === 0 ? (
                      <span className="free-shipping">GRATIS</span>
                    ) : (
                      `$${getShipping().toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Impuestos (10%):</span>
                  <span>${getTax().toFixed(2)}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
              </div>

              <div className="promo-section">
                <input type="text" placeholder="Código de descuento" className="promo-input" />
                <button className="promo-btn">Aplicar</button>
              </div>

              <button className="checkout-btn">Proceder al Pago</button>

              <div className="security-info">
                <span>🔒 Pago 100% seguro</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}








 */


























import { useState } from "react"
import "../style/CarritoMembresia.css"

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Membresía Premium",
      price: 19.99,
      duration: "mensual",
      quantity: 1,
      description: "Acceso completo con soporte prioritario",
    },
    {
      id: 2,
      name: "Plan Empresarial",
      price: 49.99,
      duration: "mensual",
      quantity: 2,
      description: "Solución completa para equipos grandes",
    },
    {
      id: 3,
      name: "Membresía Básica",
      price: 9.99,
      duration: "mensual",
      quantity: 1,
      description: "Funciones esenciales para comenzar",
    },
  ])

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTax = () => {
    return getSubtotal() * 0.1
  }

  const getShipping = () => {
    return getSubtotal() > 50 ? 0 : 5.99
  }

  const getTotal = () => {
    return getSubtotal() + getTax() + getShipping()
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="app-wrapper">
      <div className="cartCarrito-container">
        <div className="cart-header">
          <h1>Tu Carrito de Compras</h1>
          <p className="items-count">{getTotalItems()} artículos</p>
        </div>

        <div className="cart-content">
          <div className="cart-items-section">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-icon">🛒</div>
                <h2>Tu carrito está vacío</h2>
                <p>Agrega algunos productos para comenzar</p>
              </div>
            ) : (
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <div className="placeholder-image">
                        <span>📦</span>
                      </div>
                    </div>

                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                      <p className="item-duration">Facturación {item.duration}</p>
                    </div>

                    <div className="item-controls">
                      <div className="quantity-section">
                        <label>Cantidad:</label>
                        <div className="quantity-controls">
                          <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            -
                          </button>
                          <span className="quantity-display">{item.quantity}</span>
                          <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            +
                          </button>
                        </div>
                      </div>

                      <div className="price-section">
                        <div className="unit-price">${item.price.toFixed(2)} c/u</div>
                        <div className="total-price">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>

                      <button className="remove-btn" onClick={() => removeItem(item.id)} title="Eliminar producto">
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-summary">
              <div className="summary-card">
                <h2>Resumen del Pedido</h2>

                <div className="summary-details">
                  <div className="summary-row">
                    <span>Subtotal ({getTotalItems()} artículos):</span>
                    <span>${getSubtotal().toFixed(2)}</span>
                  </div>

                  <div className="summary-row">
                    <span>Envío:</span>
                    <span>
                      {getShipping() === 0 ? (
                        <span className="free-shipping">GRATIS</span>
                      ) : (
                        `$${getShipping().toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="summary-row">
                    <span>Impuestos (10%):</span>
                    <span>${getTax().toFixed(2)}</span>
                  </div>

                  <div className="summary-divider"></div>

                  <div className="summary-row total-row">
                    <span>Total:</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="promo-section">
                  <input type="text" placeholder="Código de descuento" className="promo-input" />
                  <button className="promo-btn">Aplicar</button>
                </div>

                <button className="checkout-btn">Proceder al Pago</button>

                <div className="security-info">
                  <span>🔒 Pago 100% seguro</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
