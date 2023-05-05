import React from 'react';
import { useRouter } from 'next/router';
import Formik from 'formik';
import styles from "../../../styles/styles.module.scss";

//Register component
function Register() {
    const router = new useRouter();
    const 
    return (
        <div>
          <div className={styles.login__box}>
            <img
              src="/logo.png"
              className={styles.login__logo}
              alt="Logo"
            />
            <h1 className={styles.login__title}>Registrate</h1>
            <form action="" className={styles.login__form} method="POST">
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
              <label className={styles.login__label} htmlFor="email">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                className={styles.login__input}
                required
              />
              <label className={styles.login__label} htmlFor="phone">
                Teléfono
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Ingrese su teléfono"
                className={styles.login__input}
                required
              />
              <label className={styles.login__label} htmlFor="address">
                Dirección
              </label>
              <input
                type="address"
                id="address"
                name="address"
                placeholder="Ingrese su dirección"
                className={styles.login__input}
                required
              />
              <input className={styles.login__submit} onClick={() => {router.push('/search')}} type="submit" value="Registrarse" />

            </form>
            <div style={{ display: 'grid' }}>
              <a className={styles.login__links} href="LoginServlet.do">
                ¿Ya tienes una cuenta? Inicia sesión
              </a>
            </div>
          </div>
        </div>
        );
}

export default Register;
