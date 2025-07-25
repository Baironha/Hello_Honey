 import React from 'react'
import '../style/AdminPrueba.css'
import { Outlet, useNavigate } from "react-router-dom";



function SidebarEconomia() {

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <aside className="custom-sidebar">
          
          
          <ul className="sidebar-menu">
            <h1 className="sidebar-title">PANEL</h1>
            <li onClick={() => navigate("AdminHome")}>Home</li>
            <li onClick={() => navigate("Kpi")}>KPI</li>
            <li onClick={() => navigate("Administracion_Proyectos")}>Administracion_Proyectos</li>
            <li onClick={() => navigate("Administracion_Negocios")}>Administracion_Negocios</li>
          </ul>
        </aside>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default SidebarEconomia; 
