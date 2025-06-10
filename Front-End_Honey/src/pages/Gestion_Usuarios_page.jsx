import React from 'react'
import SideBarAdmins from '../components/SideBarAdmins'
import Gestion_UsuariosComponents from '../components/Gestion_UsuariosComponents'

import '../Style/GestionUsuariosPage.css'; // estilos nuevos
function Gestion_Usuarios_page() {

    return (
        <div className="gestion-usuarios-layout">
        <SideBarAdmins />
        <div className="gestion-main-content">
            <Gestion_UsuariosComponents />
        </div>
        </div>
    );
}

export default Gestion_Usuarios_page;


