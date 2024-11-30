//import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-main">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo icon" />
        <span className="name">Loopy</span>
      </div>
      <div className="line"></div>
      <div className="links">
        <Link to="/" className="link link-profile">Profil</Link>
        <Link to="/" className="link">
          <i className="fa-solid fa-house"></i>
          <span>Domů</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar