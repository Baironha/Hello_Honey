import React from 'react'
import '../style/AdminPrueba.css'
import { Outlet, useNavigate } from "react-router-dom";
import BTN_logout from './BTN_logout';
import FooterHoneyComponent from './FooterHoneyComponent';



function SidebarAdmin() {

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <aside className="custom-sidebar">
          <ul className="sidebar-menu">
            <h1 className="sidebar-title">PANEL</h1>
            <li onClick={() => navigate("AdminHome")}>Home</li>
            <li onClick={() => navigate("TareasAdmin")}>Tareas</li>
            <li onClick={() => navigate("Gestion_Membresias")}>Membresías</li>
            <li onClick={() => navigate("Gestion_Notificaciones")}>Notificaciones</li>
            <li onClick={() => navigate("Gestion_usuarios")}>Usuarios</li>
            <li onClick={() => navigate("Gestion_empleados")}>Empleados</li>
            <li onClick={() => navigate("Gestion_Admins")}>Administradores</li>
            <li onClick={() => navigate("/ventas")}>Ventas</li>
            <li onClick={() => navigate("DashboardHoney")}>IA Control</li>
            <li><BTN_logout/></li>
          </ul>
        </aside>
      </div>
      <div>
        <Outlet/>
        
      </div>
    </div>
  );
}

export default SidebarAdmin; 
