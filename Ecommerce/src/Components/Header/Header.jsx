import styles from './Header.module.css';
import BurguerMenu from '../BurguerMenu/BurguerMenu';

const Header = () => {
  return (
    <header>
      <a className={styles.logo} href='#'>
        <span>Master</span> Project
      </a>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Project</a>
          </li>
        </ul>
      </nav>
      <BurguerMenu />
    </header>
  );
};

export default Header;
