import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Formik from 'formik';
import styles from "../../../styles/styles.module.scss";


function Login() {
  const router = new useRouter();
    return (
        <div>
          <div className={styles.login__box}>
            <img
              src="/logo.png"
              className={styles.login__logo}
              alt="Logo"
            />
            <h1 className={styles.login__title}>Iniciar sesión</h1>
            <form action="LoginServlet.do" className={styles.login__form} method="POST">
              <label className={styles.login__label} htmlFor="username">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ingrese su nombre de usuario"
                className={styles.login__input}
                required
              />
              <label className={styles.login__label} htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
                className={styles.login__input}
                required
              />
              <a className={styles.login__links} href="#">¿Olvidaste tu contraseña?</a>
              <br />
              <input className={styles.login__submit} onClick={() => {router.push('/search')}} type="submit" value="Ingresar" />

            </form>
            <div style={{ display: 'grid' }}>
              <Link className={styles.login__links} href="/auth/register">
                  ¿Nuevo en Foodie? Crear cuenta
              </Link>

            </div>
          </div>
        </div>
        );
}
export default Login;