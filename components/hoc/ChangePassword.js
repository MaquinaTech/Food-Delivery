import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "../../styles/styles.module.scss";
function ChangePassword(props) {
  const { handleSubmit } = props;
  return (
    <div>
      <div className={styles.login__box}>
        <h1 className={styles.login__title}>Cambiar contraseña</h1>

        <Formik
          initialValues={{ password1: '', password2: '' }}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className={styles.login__form}>
              <label className={styles.login__label} htmlFor="password">
                Nueva contraseña
              </label>
              <Field
                type="password"
                id="password1"
                name="password1"
                placeholder="Ingrese su contraseña"
                className={styles.login__input}
              />

              <label className={styles.login__label} htmlFor="password">
                Repita su contraseña
              </label>
              <Field
                type="password"
                id="password2"
                name="password2"
                placeholder="Repita su contraseña"
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
export default ChangePassword;