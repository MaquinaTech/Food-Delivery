import React from 'react';
import { useRouter } from 'next/router';
import { registerUser } from '../../../components/auxiliar';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import styles from "../../../styles/styles.module.scss";


//Register component
function Register() {
    const router = new useRouter();

  
  const handleSubmit = async (values) => {
    if (!values.name ||!values.surname || !values.password || !values.email || !values.telephone) {
      console.log("error")
      toast.error('Por favor, complete todos los campos', setTimeout(3000));
    } else {
      try {
        const { data } = await registerUser(localStorage.getItem('token'), values);
        if (data) {
          toast.success('Datos actualizados correctamente');
        }
      } catch (error) {
        toast.error('Ocurrió un error, la contraseña debe tener al menos 8 caracteres, 1 mayuscula, 1 minuscula y 1 numero');
      }
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
              <label className={styles.login__label} htmlFor="name">
                  Nombre de usuario
              </label>
              <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingrese su nombre de usuario"
                  className={styles.login__input}
              />
              <label className={styles.login__label} htmlFor="surname">
                  Apellido
              </label>
              <Field
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Ingrese su apellido"
                  className={styles.login__input}
              />
              <label className={styles.login__label} htmlFor="email">
                  Email
              </label>
              <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese su email"
                  className={styles.login__input}
              />
              <label className={styles.login__label} htmlFor="telephone">
                Telefono
              </label>
              <Field
                  type="phone"
                  id="telephone"
                  name="telephone"
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
