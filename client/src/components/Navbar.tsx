//import React from 'react'

import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <nav className="nav-main">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo icon" />
        <span className="name">Loopy</span>
      </div>
      <div className="line"></div>
      <div className="links">
        <NavbarLink link="/" icon="fa-solid fa-user" iconHover="fa-regular fa-user">Profil</NavbarLink>
        <NavbarLink link="/" icon="fa-solid fa-house" iconHover="fa-regular fa-house">Domů</NavbarLink>
        <NavbarLink link="/" icon="fa-regular fa-list-dropdown" iconHover="fa-light fa-list-dropdown">Seznamy</NavbarLink>
        <NavbarLink link="/" icon="fa-solid fa-gear" iconHover="fa-regular fa-gear">Nastavení</NavbarLink>
        <NavbarLink link="/sign-in" icon="fa-solid fa-right-from-bracket" iconHover="fa-regular fa-right-from-bracket">Odhlásit se</NavbarLink>
      </div>
    </nav>
  )
}

export default Navbar