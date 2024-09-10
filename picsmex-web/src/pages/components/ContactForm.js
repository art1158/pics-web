import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        emailjs //FALTA CONFIGURAR CUENTA DE EMAILJS!!!
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStateMessage('Mensaje enviado');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); //esconde mensaje despues de 5 segundos
                },
                (error) => {
                    setStateMessage('Algo salio mal, por favor intenta de nuevo');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); //esconde el mensaje despues de 5 segundos
                }
            );

            //Limpia el formulario despues de enviar el email
            e.target.reset();
    };

    return (
        <form onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type='text' name='user_name' />
            <label>Email</label>
            <input type='email' name='user_email' />
            <label>Servicio de interes</label>
            <input type='service' />
            <label>Mensaje</label>
            <input type='message' />
            <input type='submit' value='Send' disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
        </form>
    );
};

export default ContactForm;
