import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "../../styles/styles.module.scss";

function ProfileConfig(props) {
  const { setUser, user } = props;
  return (
    <div>
      <div className={styles.login__box}>
        <h1 className={styles.login__title}>Tus datos</h1>

        <Formik
          initialValues={...user}
          enableReinitialize={true}
          onSubmit={(values) => {setUser(values);}}
        >
          {( ) => (
            <Form className={styles.login__form}>
              <div className={styles.flex}>
                <div className={styles.grid}>
                  <label className={styles.login__label} htmlFor="username">
                    Nombre
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingrese su nombre de usuario"
                    className={styles.login__input}
                  />
                </div>
                <div className={styles.grid}>
                  <label className={styles.login__label} htmlFor="username">
                    Apellido
                  </label>
                  <Field
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Ingrese su apellido de usuario"
                    className={styles.login__input}
                  />
                  </div>
              </div>

              <label className={styles.login__label} htmlFor="password">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su email"
                className={styles.login__input}
              />

              <br />
              <button className={styles.login__submit} type="submit">
                Actualizar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default ProfileConfig;
