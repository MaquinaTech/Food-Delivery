import React from 'react';
import { Formik, Field, Form } from 'formik';
import styles from '../styles/styles.module.scss';

const SearchFilter = (props ) => {
  const {title} = props;

  const filter = () => {
    console.log('filter');
  }

  return (
    <div className={styles.searchFilter__content}>
      <div className={styles.searchFilter__content__title}>
        {title}
      </div>
      <div className={styles.searchFilter__content__list}>
      <Formik
        initialValues={{
            restaurantName: '',
            category: [],
            address: '',
            city: '',
            country: '',
            bikeFriendly: false
        }}
        onSubmit={(values, actions) => {
            // submit code goes here
        }}
      >
        {({values, handleChange}) => (
            <Form>
            <div className={styles.searchFilter__content__list__item}>
                <label htmlFor="restaurantName">Nombre del restaurante</label>
                <Field
                id="restaurantName"
                name="restaurantName"
                placeholder="Nombre"
                type="text"
                className="form-control"
                />
            </div>

            <div className={styles.searchFilter__content__list__item}>
                <label htmlFor="address">Dirección del restaurante:</label>
                <Field
                id="address"
                name="address"
                placeholder="Dirección"
                type="text"
                className="form-control"
                />
            </div>

            <div className="form-check">
                <Field
                id="bikeFriendly"
                name="bikeFriendly"
                type="checkbox"
                className="form-check-input"
                />
                <label htmlFor="bikeFriendly" className="form-check-label">
                ¿Bike Friendly?
                </label>
            </div>

            <button type="submit" className="btn btn-warning">
                Filtrar
            </button>
            </Form>
        )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchFilter;
