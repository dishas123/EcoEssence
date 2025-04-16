import React from 'react';

const ContactUs = () => {
    return (
        <div
            style={{
                padding: '20px',
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center',
                backgroundColor: 'lime',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h2 style={{ color: '#005f73' }}>Contact Us</h2>
            <p style={{ fontSize: '1rem', color: '#023047' }}>We'd love to hear from you!</p>
            <div style={{ marginTop: '30px' }}>
                <h3 style={{ color: '#023047' }}>Get in Touch</h3>
                <p style={{ fontSize: '1rem', color: '#023047' }}>
                    You can reach us through the following methods:
                </p>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    <li>
                        <strong>Email:</strong> <a href="mailto:ecoessence@gmail.com">ecoessence@gmail.com</a>
                    </li>
                    <br></br>
                    <li>
                        <strong>Phone:</strong> 8154390781
                    </li>
                    <br></br>
                    <li>
                        <strong>LinkedIn:</strong>{' '}
                        <a href="https://www.linkedin.com/company/ecoessence" target="_blank" rel="noopener noreferrer">
                            EcoItems on LinkedIn
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <strong>Instagram:</strong>{' '}
                        <a href="https://www.instagram.com/ecoessence" target="_blank" rel="noopener noreferrer">
                            @ecoitems
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <strong>Facebook:</strong>{' '}
                        <a href="https://www.facebook.com/ecoessence" target="_blank" rel="noopener noreferrer">
                            EcoItems on Facebook
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactUs;
