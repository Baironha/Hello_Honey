import React from 'react'
import '../style/AdminPrueba.css'
import { Outlet, useNavigate } from "react-router-dom";



function SibarEmpleados_Component() {

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <aside className="custom-sidebar">
          
          
          <ul className="sidebar-menu">
            <h1 className="sidebar-title">PANEL</h1>
            <li onClick={() => navigate("Home")}>Home</li>
            <li onClick={() => navigate("Tareas")}>Tareas</li>
            <li onClick={() => navigate("Notificaciones")}>Membresías</li>
            <li onClick={() => navigate("Gestion_Usuarios")}>Notificaciones</li>
            <li onClick={() => navigate("/ventas")}>Ventas</li>
            <li onClick={() => navigate("/ia")}>IA Control</li>
          </ul>
        </aside>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default SibarEmpleados_Component; 
