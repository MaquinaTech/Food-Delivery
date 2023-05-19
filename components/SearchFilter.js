import React from 'react';
import { Formik, Field, Form } from 'formik';
import styles from '../styles/styles.module.scss';

const SearchFilter = (props) => {
  const {title, setFilters, filters} = props;

  const handleFilter = (event) => {
    console.log("event", event);
    const { name, address, bikeFriendly, available, gradesAverage } = event;
    setFilters((filters) => ({
      ...filters,
      name: name ? name : "",
      address: address ? address : "",
      bikeFriendly: bikeFriendly ? bikeFriendly : "",
      available: available ? (available !== "all" ? 1 : "all") : 0,
      gradesAverage: gradesAverage ? gradesAverage : "",
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
                />
            </div>

            <div className={styles.searchFilter__content__list__item}>
                <label htmlFor="address">Dirección del restaurante:</label>
                <Field
                id="address"
                name="address"
                placeholder="Dirección"
                type="text"
                />
            </div>
            <div className={styles.searchFilter__content__list__item}>
              <label htmlFor="available">Disponibilidad</label>
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
                        value="1"
                    />
                    Disponibles
                  </label>
                </div>

                <div>
                  <label>
                    <Field
                        name="available"
                        id="noAvailable"
                        type="radio"
                        value="0"
                    />
                    No disponibles
                  </label>
                </div>
              
            </div>

            <div className={styles.searchFilter__content__list__item}>
            <label htmlFor="gradesAverage">Ordenar por Valoración</label>
              <div>
                <label>
                  <Field
                      name="gradesAverage"
                      id="asc"
                      type="radio"
                      value="0"
                  />
                  Menos valorados
                </label>
              </div>
              
              <div>
                <label>
                  <Field
                      name="gradesAverage"
                      id="desc"
                      type="radio"
                      value="1"
                  />
                  Más valorados
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
