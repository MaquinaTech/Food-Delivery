import React from 'react';
import { Formik, Field, Form } from 'formik';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styles from '../styles/styles.module.scss';

const SearchFilter = (props ) => {
  const {title} = props;
  const animatedComponents = makeAnimated();
  const categories = [
    {
      value: 'Burguer',
      label: 'Burguer'
    },
    {
      value: 'Pizza',
      label: 'Pizza'
    },
    {
      value: 'Sushi',
      label: 'Sushi'
    },
    {
      value: 'Italiano',
      label: 'Italiano'
    },
    {
      value: 'Kebab',
      label: 'Kebab'
    },
  ];

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
                placeholder="nombre del restaurante"
                type="text"
                className="form-control"
                />
            </div>

            <div className={styles.searchFilter__content__list__item}>
                <label htmlFor="category">Categoría</label>
                <Select
                  //defaultValue={categories[0]}
                  isMulti
                  name="colors"
                  options={categories}
                  components={animatedComponents}
                  closeMenuOnSelect={false}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  menuPlacement="auto"
                  menuPosition="absolute"
                  menuShouldScrollIntoView={true}
                  placeholder="Categoría"
                  
                />
            </div>

            <div className={styles.searchFilter__content__list__item}>
                <label htmlFor="address">Dirección:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  list="address-list"
                />
                <datalist id="address-list">
                  <option value="Calle prueba 1" />
                  <option value="Calle prueba 2" />
                  <option value="Calle prueba 3" />
                  {/* ... */}
                </datalist>
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
