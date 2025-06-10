import React from 'react'
import '../style/AdminPrueba.css'
import { useNavigate } from "react-router-dom";
function SideBarAdmins() {

  const navigate = useNavigate();

  return (
    <aside className="custom-sidebar">
      <div className="sidebar-title">Panel</div>
      <ul className="sidebar-menu">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/tareas")}>Tareas</li>
        <li onClick={() => navigate("/membresias")}>Membresías</li>
        <li onClick={() => navigate("/notificaciones")}>Notificaciones</li>
        <li onClick={() => navigate("/Gestion_usuarios")}>Usuarios</li>
        <li onClick={() => navigate("/empleados")}>Empleados</li>
        <li onClick={() => navigate("/administradores")}>Administradores</li>
        <li onClick={() => navigate("/ventas")}>Ventas</li>
        <li onClick={() => navigate("/ia")}>IA Control</li>
      </ul>
    </aside>
  );
}

export default SideBarAdmins;