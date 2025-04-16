import React from 'react';

const Activities = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Activities Page</h2>
            <p>Discover our activities and join us in making a difference!</p>

            <div style={{ marginBottom: '30px' }}>
                <h3>Tree Planting Drive</h3>
                <p>
                    Join us for our monthly tree planting drives, which are conducted every 2nd Sunday of the month. Let's work together to make our environment greener!
                </p>
                <img 
                    src="https://th.bing.com/th/id/OIP.3_h8VOHdNynYDDmjFlKcPAHaEJ?w=283&h=180&c=7&r=0&o=5&pid=1.7" 
                    alt="Tree Planting Drive" 
                    style={{ width: '80%', borderRadius: '10px' }} 
                />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>Educational Workshops on Sustainability</h3>
                <p>
                    We conduct educational workshops on sustainability every 4th Sunday of the month. These workshops are designed to teach practical steps for a greener lifestyle.
                </p>
                <img 
                    src="https://th.bing.com/th/id/OIP.70y16sNEcPyywXESq1KofQHaEK?w=319&h=180&c=7&r=0&o=5&pid=1.7" 
                    alt="Educational Workshops" 
                    style={{ width: '80%', borderRadius: '10px' }} 
                />
            </div>

            <p>
                If you're interested in participating in any of these activities, feel free to contact us via email at 
                <a href="mailto:eco@website.com"> eco@website.com</a>. We would love to have you join us!
            </p>
        </div>
    );
};

export default Activities;
