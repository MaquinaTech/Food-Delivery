import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "../../styles/styles.module.scss";

function ProfileConfig(props) {
  const { handleSubmit } = props;
  return (
    <div>
      <div className={styles.login__box}>
        <h1 className={styles.login__title}>Tus datos</h1>

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
      </div>
    </div>
  );
}
export default ProfileConfig;
