import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home_Page from '../pages/Home_Page';


function Routing() {


    return (
        <div>
            <Router>
                <Routes>

                        {/* Paginas de usuarios */}
                        <Route path="/" element={<Home_Page/>}/>{/* HOMEPAGE */}
                </Routes>
            </Router>
        </div>
    );
}

export default Routing

