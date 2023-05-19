import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "../../styles/styles.module.scss";

const DishForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        price: 0,
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {() => (
        <Form>
          <div className={styles.profile__box__modal__form__item}>
            <span>Nombre</span>
            <Field type="text" name="name" id="name" />
          </div>

          <div className={styles.profile__box__modal__form__item}>
            <span>Descripción</span>
            <Field as="textarea" name="description" id="description" />
          </div>

          <div className={styles.profile__box__modal__form__item}>
            <span>Precio €</span>
            <Field type="number" name="price" id="price" />
          </div>

          <div className={styles.profile__box__modal__button}>
            <button type="submit">Crear Plato</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DishForm;
