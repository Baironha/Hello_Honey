import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home_Page from '../pages/Home_Page';
import Carrito_Compras_Page from '../pages/Carrito_Compras_Page';
import AddMembreStandard_page from '../pages/AddMembreStandard_page'

function Routing() {


    return (
        <div>
            <Router>
                <Routes>

                        {/* Paginas de usuarios */}
                        <Route path="/" element={<Home_Page/>}/>{/* HOMEPAGE */}
                        <Route path="/Carrito" element={<Carrito_Compras_Page/>}/>{/* HOMEPAGE */}
                        <Route path="/AddStandard" element={<AddMembreStandard_page/>}/>{/* HOMEPAGE */}
                </Routes>
            </Router>
        </div>
    );
}

export default Routing

