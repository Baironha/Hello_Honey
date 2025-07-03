import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
/* NO ES ERROR, SOLO ME ABVIERTE DE EL USO DE LIRERIA */
import "../style/EconomiaBodyStyle.css";

function EconomiaBodyComponent() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/Economia/EconomiaHome");
    };

    return (
        <motion.section
        id="economia-intro-section"
        className="intro-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        <div className="intro-container" id="economia-intro-container">
            <h1 className="intro-title" id="economia-intro-title">
            El nuevo eje del desarrollo: <br />
            <span className="highlight">innovación, capital y mercados globales</span>
            </h1>

            <p className="intro-description" id="economia-intro-description">
            La economía contemporánea se redefine por la acelerada expansión de las
            <strong> empresas emergentes</strong>, cuya capacidad de innovación las posiciona
            como motores clave del crecimiento económico. En paralelo, los{" "}
            <strong>mercados bursátiles globales</strong> canalizan capital hacia sectores
            estratégicos, transformando el panorama financiero global.
            </p>

            <div className="intro-cta" id="economia-intro-cta">
            <button className="intro-button" onClick={handleRedirect}>
                Explorá la sección de economía →
            </button>
            </div>
        </div>
        </motion.section>
    );
}
export default EconomiaBodyComponent;