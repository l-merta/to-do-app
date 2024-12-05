import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    navigate("/");
    /*
    e.preventDefault();
    try {
      await axios.post('/signin', { username, password });
      navigate('/task/id');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
      */
  };

  return (
    <>
      <div className="login-vp">
        <div className="image-cont">
          
        </div>
        <main className="main-login">
          <form onSubmit={handleSubmit}>
            <img className="logo" src="images/logos/logo.png" alt="Logo" />
            <h2>Registrace</h2>
            <input
              type="text"
              placeholder="Uživatelské jméno"
              //value={username}
              //onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              //value={username}
              //onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Heslo"
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Opakujte heslo"
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Zaregistrovat se</button>
            <div className="soc-platforms">
              <a href={serverUrl+"auth/google"}><img src="images/logos/google.png" alt="Logo Google" /></a>
              <a href={serverUrl+"auth/github"}><img src="images/logos/github.png" alt="Logo Github" /></a>
            </div>
            <div className="line"></div>
            <p>Již máte účet? <Link to="/sign-in">Přihlašte se</Link></p>
          </form>
        </main>
      </div>
    </>
  )
}

export default SignUp