import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';


import Home_Page from '../pages/Home_Page';
import Carrito_Compras_Page from '../pages/Carrito_Compras_Page';
import AddMembreStandard_page from '../pages/AddMembreStandard_page'
import AddMembresiaPlus from '../components/AddMembresiaPlus';
import AddMembresiaVip from '../components/AddMembresiaVip';
import RegistrarseComponet from '../components/RegistrarseComponet';
import Login_page from '../pages/Login_page';
import ChatHoney_Page from '../pages/ChatHoney_Page.jsx';
import Admin_page from '../pages/Admin_page.jsx';
import Economia_page from '../pages/Economia_page.jsx';

/* OUTLET */
import Gestion_Usuarios from '../components/Gestion_UsuariosComponents.jsx';
import Gestion_Admins from '../components/Gestion_Admins.jsx';
import Gestion_Empleados from '../components/Gestion_Empleados.jsx';
import Gestion_Membresias from '../components/GestionMembresias.jsx';
import NotificacionesAdmins from '../components/FeedbackComponent.jsx';
function Routing() {


    return (
        <div>
            <Router>
                <Routes>

                        {/* Paginas de usuarios */}
                        <Route path="/" element={<Home_Page/>}/>
                        <Route path="/Registrarse" element={<RegistrarseComponet/>}/>
                        <Route path="/Login" element={<Login_page/>}/>
                        <Route path="/Economia" element={<Economia_page/>}/>
                        <Route path="/ChatHoney" element={<ChatHoney_Page/>}/>

                        <Route path="/Carrito" element={<Carrito_Compras_Page/>}/>{/* Carrito*/}

                        <Route path="/AddStandard" element={<AddMembreStandard_page/>}/>{/*MEMBRESIA*/}
                        <Route path="/Addplus" element={<AddMembresiaPlus/>}/>{/* HOMEPAGE */}
                        <Route path="/AddVip" element={<AddMembresiaVip/>}/>{/* HOMEPAGE */}

                        <Route path="/admins" element={<Admin_page/>}>
                            <Route path="Gestion_usuarios" element={<Gestion_Usuarios/>}/>
                            <Route path="Gestion_Admins" element={<Gestion_Admins/>}/>
                            <Route path="Gestion_empleados" element={<Gestion_Empleados/>}/>
                            
                            <Route path="Gestion_Membresias" element={<Gestion_Membresias/>}/>
                            <Route path="Gestion_Notificaciones" element={<NotificacionesAdmins/>}/>
                        </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default Routing

