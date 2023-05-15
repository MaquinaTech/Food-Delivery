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
  const auth = useAuth();

  useEffect(() => {
    const { error } = router.query;
    if(error){
      toast.error(error);
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
          auth.login(data);
          router.push("/list-restaurants");
        } else {
          toast.error('Ocurrió un error al intentar iniciar sesión');
        }
      }
      catch (error) {
        // Show error message
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
