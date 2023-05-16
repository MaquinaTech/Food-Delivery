import { useEffect, useState } from 'react';
import Link from 'next/link';
import { deleteToken } from '../../components/auxiliar';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styles from '../../styles/Header.module.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
   // Update password
   const logout = async () => {
    const token = localStorage.getItem('token');
    try {
      const { data } = await deleteToken(token);
      if (data) {
        toast.success('Sesion cerrada correctamente');
        localStorage.removeItem('token');
        router.push('/auth/login');
      }
    } catch (error) {
      toast.error('Ocurrió un error al intentar cerrar sesión');
    }
  };
  

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.header__nav} ${isMenuOpen ? styles.header__nav__open : ''}`}>
        <ul className={styles.header__nav__ul}>
          <li className={styles.header__nav__ul__li}>
              <Link className={`${styles.header__nav__a} ${styles.header__nav__link}`} href="/search">
                Inicio
              </Link>
          </li>
          <li className={styles.header__nav__ul__li}>
            <Link className={`${styles.header__nav__a} ${styles.header__nav__link}`} href="/profile">
              Tu Perfil
            </Link>
          </li>
          <li className={styles.header__nav__ul__li}>
            <div className={`${styles.header__nav__a} ${styles.header__nav__link}`} onClick={logout}>
              Cerrar Sesión
            </div>
          </li>
          <li className={styles.header__nav__ul__li}>
            <Link className={`${styles.header__nav__a} ${styles.header__nav__link}`} href="/seguimientousuario">
              Seguimiento usuario
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