import React from "react";
//import './src/styles/Inicio.css';
//import { defer } from "react-router-dom";

function Negocios(){
    return(
        <div className="negocios-container">
            <section className="hero-section">
                <h1>Empieza a crecer tu negocio</h1>
                <p>Desde la produccion hasta la estrategia</p>
            </section>

            <section className="servicios-section">
                <div className="services-item">
                    <h3>Produccion</h3>
                    <p>Producción audiovisual totalmente profesional y única.</p>
                </div>
                <div className="services-item">
                    <h3>Distribucion</h3>
                    <p>Equipos de Comunity Manager y Copywriter respaldando la comunicación entre tu empresa y tu público.</p>
                </div>
                <div className="services-item">
                    <h3>Estrategia</h3>
                    <p>Desde el entorno digital a conectar con todas las personas de tu negocio para lograr su crecimiento.</p>
                </div>
            </section>

            <section className="galery-section">

            </section>
        </div>
    );
}

export default Negocios;
