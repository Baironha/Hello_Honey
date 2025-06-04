import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home_Page from '../pages/Home_Page';
import Carrito_Compras_Page from '../pages/Carrito_Compras_Page';
import AddMembreStandard_page from '../pages/AddMembreStandard_page'
import AddMembresiaPlus from '../components/AddMembresiaPlus';
import AddMembresiaVip from '../components/AddMembresiaVip';
import RegistrarseComponet from '../components/RegistrarseComponet';
import Login_page from '../pages/Login_page';
import ChatHoneyComponet from "../components/ChatHoneyComponet.jsx"
import ChatHoney_Page from '../pages/ChatHoney_Page.jsx';
function Routing() {


    return (
        <div>
            <Router>
                <Routes>

                        {/* Paginas de usuarios */}
                        <Route path="/" element={<Home_Page/>}/>{/* HOMEPAGE */}
                        <Route path="/Registrarse" element={<RegistrarseComponet/>}/>{/* HOMEPAGE */}
                        <Route path="/Login" element={<Login_page/>}/>{/* HOMEPAGE */}

                         <Route path="/ChatHoney" element={<ChatHoney_Page/>}/>{/* HOMEPAGE */}



                        <Route path="/Carrito" element={<Carrito_Compras_Page/>}/>{/* Carrito*/}

                        <Route path="/AddStandard" element={<AddMembreStandard_page/>}/>{/*MEMBRESIA*/}
                        <Route path="/Addplus" element={<AddMembresiaPlus/>}/>{/* HOMEPAGE */}
                        <Route path="/AddVip" element={<AddMembresiaVip/>}/>{/* HOMEPAGE */}
                </Routes>
            </Router>
        </div>
    );
}

export default Routing

