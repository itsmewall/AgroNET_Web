// NavBar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaHome, FaChartLine, FaHeart, FaEnvelope, FaUser } from 'react-icons/fa';

const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setActiveIcon(icon);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };

  return (
    <header className="top-bar">
      <div className="container">
        <div className="logo">AgroNET</div>
        <nav>
          <ul>
            <li
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" className={activeIcon === 'home' ? 'active' : ''}>
                <FaHome size={40} />
                <span>INÍCIO</span>
              </Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('chart')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/cotacoes" className={activeIcon === 'chart' ? 'active' : ''}>
                <FaChartLine size={40} />
                <span>COTAÇÕES</span>
              </Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('heart')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/interesses" className={activeIcon === 'heart' ? 'active' : ''}>
                <FaHeart size={40} />
                <span>INTERESSES</span>
              </Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('envelope')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/mensagens" className={activeIcon === 'envelope' ? 'active' : ''}>
                <FaEnvelope size={40} />
                <span>MENSAGENS</span>
              </Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('user')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/perfil" className={activeIcon === 'user' ? 'active' : ''}>
                <FaUser size={40} />
                <span>PERFIL</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
