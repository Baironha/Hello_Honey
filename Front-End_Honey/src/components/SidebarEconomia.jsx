



import React from 'react';
import '../style/EcoSIbarStyle.css';
import { Outlet, useNavigate } from "react-router-dom";
import FooterHoneyComponent from './FooterHoneyComponent';
import Navbar_Honey from './Navbar_Honey';

function SidebarEconomia() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='main-contentNavbar'><Navbar_Honey /></div>
      <aside className="custom-sidebarECO">
        <ul className="sidebar-menuECO">
          <h1 className="sidebar-title">PANEL</h1>
          <li onClick={() => navigate("EconomiaHome")}>Home</li>
          <li onClick={() => navigate("Kpi")}>KPI</li>
          <li onClick={() => navigate("Administracion_Proyectos")}>Administracion_Proyectos</li>
          <li onClick={() => navigate("Administracion_Negocios")}>Administracion_Negocios</li>
        </ul>
      </aside>
      <div className='outletECO'>
        <Outlet />
      </div>
      
      <div className="main-contentFOOTER"><FooterHoneyComponent /></div>
    </div>
  );
}

export default SidebarEconomia;
