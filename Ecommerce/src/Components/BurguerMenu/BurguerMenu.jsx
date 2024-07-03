import { useState } from 'react';
import './BurguerMenu.css';

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={'burguer_menu'}>
        <div className={'burguer_icon'} onClick={toggleMenu}>
          <div className={isOpen ? 'bar bar1 open' : 'bar bar1'}></div>
          <div className={isOpen ? 'bar bar2 open' : 'bar bar2'}></div>
          <div className={isOpen ? 'bar bar3 open' : 'bar bar3'}></div>
        </div>
        <nav className={isOpen ? 'nav_menu open' : 'nav_menu'}>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>News</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BurguerMenu;
