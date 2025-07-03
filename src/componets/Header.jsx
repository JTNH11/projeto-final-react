import React from 'react';
import './Header.css';
import logo from '../assets/Bayside Logo.jpg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Bayside Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">O SHOPPING</a></li>
          <li><a href="#">LOJAS</a></li>
          <li><a href="#">ACONTECE</a></li>
          <li><a href="#">LOCALIZAÇÃO</a></li>
          <li><a href="#">FALE COM O SÍNDICO</a></li>
        </ul>
      </nav>
    </header>
  );
}
