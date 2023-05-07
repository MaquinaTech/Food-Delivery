import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useAuth } from '../../../components/hoc/auth';
import { getToken } from '../../../components/auxiliar';
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import styles from '../../../styles/styles.module.scss';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Aquí debes hacer la petición a la API para validar el token
      // Si el token es válido, utiliza la función login del useAuth
      // para establecer el token en el contexto de autenticación
      // y permitir que el usuario acceda a la aplicación web.
      const newToken = '...';
      if (newToken) {
        login(newToken);
      }
    }
  }, []);

  const handleSubmit = async (values) => {
    if (!values.username || !values.password) {
      toast.error('Por favor, complete todos los campos');
    } else {
      try {
        // Make login request
        const {data} = await getToken(values.username, values.password);
        if (data) {
        // Make login in React Context
          login(data);
        // Redirect to search page
          router.push('/search');
        }
      } catch (error) {
        toast.error('Ocurrió un error al intentar iniciar sesión');
      }
    }
  };

  return (
    <div>
      <div className={styles.login__box}>
        <img src="/logo.png" className={styles.login__logo} alt="Logo" />
        <h1 className={styles.login__title}>Iniciar sesión</h1>

        <Formik
          initialValues={{ username: '', password: '' }}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className={styles.login__form}>
              <label className={styles.login__label} htmlFor="username">
                Nombre de usuario
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Ingrese su nombre de usuario"
                className={styles.login__input}
              />

              <label className={styles.login__label} htmlFor="password">
                Contraseña
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
                className={styles.login__input}
              />

              <a className={styles.login__links} href="#">
                ¿Olvidaste tu contraseña?
              </a>
              <br />
              <button className={styles.login__submit} type="submit">
                Ingresar
              </button>
            </Form>
          )}
        </Formik>
        <div style={{ display: 'grid' }}>
          <Link className={styles.login__links} href="/auth/register">
            ¿Nuevo en Foodie? Crear cuenta
          </Link>
        </div>
      </div>
    </div>
  );
}
