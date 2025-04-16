/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Hardcoded login credentials
        if (username === "user123" && password === "pass123") {
            setIsLoggedIn(true); // Update login status
            navigate("/"); // Redirect to the home page
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ margin: "10px", padding: "5px" }}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ margin: "10px", padding: "5px" }}
            />
            <br />
            <button onClick={handleLogin} style={{ padding: "10px 20px", marginTop: "10px" }}>
                Login
            </button>
        </div>
    );
};

export default Login;






import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Redirect after login

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error messages

        try {
            const response = await fetch('http://localhost:5009/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token); // Save token to localStorage
                alert('Login successful!');
                navigate('/'); // Redirect to the home page
            } else {
                const data = await response.json();
                setError(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error">{error}</p>} 
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;*/



