import React from 'react';
import { Formik, Field, Form } from 'formik';
import styles from '../styles/styles.module.scss';

const SearchFilter = (props ) => {
  const {title} = props;

  const handleFilter = (event) => {
    const { name, address, bikeFriendly, available } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: name,
      [address]: address,
      [bikeFriendly]: bikeFriendly,
      [available]: available,
    }));
  };

  return (
    <div className={styles.searchFilter__content}>
      <div className={styles.searchFilter__content__title}>
        {title}
      </div>
      <div className={styles.searchFilter__content__list}>
      <Formik
        initialValues={{
            name: '',
            address: '',
            bikeFriendly: false,
            available: 'all'
        }}
        onSubmit={(values) => {
          handleFilter(values)
        }}
      >
        {({values, handleChange}) => (
            <Form>
            <div className={styles.searchFilter__content__list__item}>
                <label htmlFor="name">Nombre del restaurante</label>
                <Field
                id="name"
                name="name"
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
            <div className={styles.flex}>
              <div>
                <label>
                  <Field
                      name="available"
                      id="all"
                      type="radio"
                      value="all"
                  />
                  Todos
                </label>
              </div>
              
              <div>
                <label>
                  <Field
                      name="available"
                      id="yesAvailable"
                      type="radio"
                      value="yesAvailable"
                  />
                  Disponibles
                </label>
              </div>
              <div>
                <label>
                  <Field
                      name="noAvailable"
                      id="available"
                      type="radio"
                      value="noAvailable"
                  />
                  No disponibles
                </label>
              </div>
            </div>


            <div>
                <Field
                id="bikeFriendly"
                name="bikeFriendly"
                type="checkbox"
                />
                <label htmlFor="bikeFriendly">
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
