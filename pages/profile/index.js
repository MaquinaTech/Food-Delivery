import React from 'react';
import { Formik, Field } from 'formik';
import { useRouter } from 'next/router';
import styles from '../styles/styles.module.scss';

const Login = () => {
  const router = useRouter();
  

  const handleLogin = async (values) => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__content}>
        <div className={styles.login__content__title}>Iniciar sesión</div>
        <div className={styles.login__content__form}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, actions) => {
              handleLogin(values);
            }}
          >
            {({ values, handleChange }) => (
              <form>
                <div className={styles.login__content__form__item}>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                <div className={styles.login__content__form__item}>
                  <label htmlFor="password">Contraseña</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <div className={styles.login__content__form__item}>
                  <button type="submit">Iniciar sesión</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
