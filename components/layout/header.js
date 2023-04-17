import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.header__nav} ${isMenuOpen ? styles.header__nav__open : ''}`}>
        <ul className={styles.header__nav__ul}>
          <li className={styles.header__nav__ul__li}>
            <Link className={`${styles.header__nav__a} ${styles.header__nav__link}`} href="/">
              Iniciar sesión
            </Link>
          </li>
          <li className={styles.header__nav__ul__li}>
            <Link className={`${styles.header__nav__a} ${styles.header__nav__link}`} href="/acerca">
              Carrito
            </Link>
          </li>
          <li className={styles.header__nav__ul__li}>
            <Link className={`${styles.header__nav__a} ${styles.header__nav__link}`} href="/acerca">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.header__menuButton} onClick={handleMenuClick}>
        <span className={styles.header__menuButton__bar}></span>
        <span className={styles.header__menuButton__bar}></span>
        <span className={styles.header__menuButton__bar}></span>
      </button>
    </header>
  );
}


export default Header;