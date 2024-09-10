import React from "react";
import './styles/Inicio.css';
import ContactForm from './components/ContactForm.js';
//import { defer } from "react-router-dom";

function Inicio(){
    return(
      <div className="home-container">
      <header className="hero-section">
        <h1>Te ayudamos a lograr lo que planeas</h1>
        <p>Agencia de produccion multimedia y consultora estrategica</p>
        <button className="cta-button">Empezar ahora</button>
      </header>
      
      <section className="about-section">
        <h2>¿Quiénes Somos?</h2>
        <p>Somos una agencia de producción multimedia especializada en crear contenido visual impactante que conecta con tu audiencia.</p>
      </section>
      
      <section className="services-section">
        <h2>Soluciones para negocios</h2>
        <div className="services-list">
            <div className="service-item">
                <h3>Marketing digital de contenido</h3>
                <p>Empieza a crecer tu comunidad para aumentar tus ventas.</p>
            </div>
            <div className="service-item">
                <h3>Produccion de fotografia y video</h3>
                <p>Muestra de la manera más llamativa tus productos y servicios.</p>
            </div>
            <div className="service-item">
                <h3>Diseno y branding</h3>
                <p>Creamos un universo completo para tu marca.</p>
            </div>
            <div className="service-item">
                <h3>Estrategias y organizacion de ventas</h3>
                <p>Te ayudamos a estructurar y mejorar tu negocio.</p>
            </div>
            <div className="service-item">
                <h3>Comunity manager</h3>
                <p>Deja que filtremos a tus clientes potenciales y enfócate en tu negocio.</p>
            </div>
        </div>
      </section>

      <section className="demo-reel">

      </section>

      <section className="Contacto">
        <h2>Contactanos</h2>
        <div className="contact-info">
          <div>
            <p>WhatsApp</p>
            <p>244 229 0348</p>
            <p>contacto@picsmex.com</p>
          </div>
        </div>

        <div className="contact-form">
          <ContactForm />
        </div>
      </section>
    </div>
    );
}

export default Inicio;
