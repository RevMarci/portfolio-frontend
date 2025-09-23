import React from 'react';
import '../styles/Contact.css';

const Contact = ({ id, email, phone, chatLink }) => {
    return (
        <div id={id} className="section contact">
            <h2 className="section-title">Kapcsolat</h2>
            <div className="contact-info">
                {email && (
                    <p>
                        Email: <a href={`mailto:${email}`}>{email}</a>
                    </p>
                )}
                {phone && (
                    <p>
                        Telefon: <a href={`tel:${phone}`}>{phone}</a>
                    </p>
                )}
                {chatLink && (
                    <p>
                        Chat:{' '}
                        <a href={chatLink} target="_blank" rel="noopener noreferrer">
                            Kattints ide
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Contact;
