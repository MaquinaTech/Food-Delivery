import React from 'react';
import Link from 'next/link';
import styles from "../../styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__nav}>
        <ul className={styles.footer__nav__ul}>
          <li className={styles.footer__nav__li}>
            <Link className={styles.footer__nav__a} href="/">
              Inicio
            </Link>
          </li>
          <li className={styles.footer__nav__li}>
            <Link className={styles.footer__nav__a} href="/acerca">
              Acerca
            </Link>
          </li>
          <li className={styles.footer__nav__li}>
            <Link className={styles.footer__nav__a} href="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;