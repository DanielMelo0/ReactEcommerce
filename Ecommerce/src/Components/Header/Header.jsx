// src/components/Header.jsx
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div className='logo'>Logo</div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className='hamburger' onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
};

export default Header;
