import React from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import styles from "../../../styles/styles.module.scss";


//Register component
function Register() {
    const router = new useRouter();

  
  const handleSubmit = (values) => {
    if (!values.username || !values.password || !values.email || !values.phone) {
      console.log("error")
      toast.error('Por favor, complete todos los campos', setTimeout(3000));
    } else {
      router.push('/login');
    }
  }

  return (
      <div>
        <div className={styles.login__box}>
        <Formik
          initialValues={{ username: '', password: '' }}
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
              <label className={styles.login__label} htmlFor="username">
                  Email
              </label>
              <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese su email"
                  className={styles.login__input}
              />
              <label className={styles.login__label} htmlFor="username">
                Telefono
              </label>
              <Field
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="Ingrese su teléfono"
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
              <button
                  className={styles.login__submit}
                  type="submit"
              >
                  Ingresar
              </button>
              </Form>
          )}
          </Formik>
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
