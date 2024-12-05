import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

//import './../components/Gradient-1';

function SignIn() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
        <div className="image-cont" id='gradient-1'>
          
        </div>
        <main className="main-login">
          <form onSubmit={handleSubmit}>
            <img className="logo" src="images/logos/logo.png" alt="Logo" />
            <h2>Přihlášení</h2>
            <input
              type="text"
              placeholder="Jméno / email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Heslo"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Přihlásit se</button>
            <div className="soc-platforms">
              <a href={serverUrl+"auth/google"}><img src="images/logos/google.png" alt="Logo Google" /></a>
              <a href={serverUrl+"auth/github"}><img src="images/logos/github.png" alt="Logo Github" /></a>
            </div>
            <div className="line"></div>
            <p>Nemáte účet? <Link to="/sign-up">Zaregistrujte se</Link></p>
          </form>
        </main>
      </div>
    </>
  )
}

export default SignIn
