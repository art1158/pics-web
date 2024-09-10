import React from "react";
import ContactForm from './components/ContactForm.js';
//import './src/styles/Inicio.css';
//import { defer } from "react-router-dom";

function Contacto(){
    return(
        <div className="contact-form">
            <h2>Contactanos</h2>
            <p>Podemos buscar una solución especialmente para ti. Dejanos tus datos y nos pondremos en contacto contigo.</p>
          <ContactForm />
        </div>
    );
}

export default Contacto;
