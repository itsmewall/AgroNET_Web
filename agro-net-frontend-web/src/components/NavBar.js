import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="top-bar">
      <div className="container">
        <div className="logo">AgroNET</div>
        <nav>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Cotações</a></li>
            <li><a href="#">Interesses</a></li>
            <li><a href="#">Mensagens</a></li>
            <li><a href="#">Perfil</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;