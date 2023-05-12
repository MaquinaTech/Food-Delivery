import React, {useState, useCallback} from 'react';
import Dishes from './Dishes';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './auth';
import styles from "../../styles/styles.module.scss";


const Restaurant = (props) => {
  const { restaurant, categories, dishes, setOrderList, orderList} = props;
  const [isEditable, setIsEditable] = useState(false);
  const { authenticated } = useAuth();

  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (values) => {
    if (!values.address && !values.phone && !values.email && !values.priceRange && !values.category) {
      toast.error('Por favor, complete los campos requeridos', { autoClose: 3500 });
    } else {
      toast.success('Restaurante actualizado', { autoClose: 3500 });
      setRestaurantState([...restaurant,values]);
      setDisabled(true);
    }
  }
  return (
    <div className={styles.EditRestaurants__box}>
        <div className={styles.EditRestaurants__box__title}>
            <img
              src="/logo.png"
              className={styles.login__logo}
              alt="LogoRestaurnt"
            />
            <span>{restaurant && restaurant.name}</span>
        </div>
        <div className={styles.EditRestaurants__box__info}>
          <Formik
          enableReinitialize={true}
          initialValues={{
            ...(restaurant ? { ...restaurant } : null),
            category: categories && categories[0] && categories[0].name,
          }}
            
            onSubmit={(values) => {
              handleSubmit(values)
            }}
          >
            {({ values  }) => (
              <Form>
                <div className={styles.EditRestaurants__box__info__form}>
                  <div className={styles.EditRestaurants__box__info__form__left}>
                    <div className={styles.EditRestaurants__box__info__form__left__item}>
                      <span>Dirección</span>
                      <Field type="text" name="address" disabled={!isEditable} />
                    </div>

                    <div className={styles.EditRestaurants__box__info__form__left__item}>
                      <span>Teléfono</span>
                      <Field type="text" name="telephone" id="telephone" disabled={!isEditable} />
                    </div>

                    <div className={styles.EditRestaurants__box__info__form__left__item}>
                      <span>Correo de contacto</span>
                      <Field type="email" name="contactEmail" id="contactEmail" disabled={!isEditable} />
                    </div>
                  </div>

                  <div className={styles.EditRestaurants__box__info__form__right}>
                    <div className={styles.EditRestaurants__box__info__form__right__item}>
                      <span>Rango de precio</span>
                      <Field type="text" name="minPrice" id="minPrice" disabled={!isEditable} />
                      <Field type="text" name="maxPrice" id="maxPrice" disabled={!isEditable} />
                    </div>

                    <div className={styles.EditRestaurants__box__info__form__right__item}>
                      <span>Categoría</span>
                      <Field type="text" name="category" id="category" disabled={!isEditable} />
                    </div>

                  </div>
                </div>
                  
                <div className={styles.EditRestaurants__box__info__buttons}>
                { authenticated &&
                  <>
                    <button type="button" disabled={!isEditable} onClick={() => handleSubmit(values)}>
                      Guardar
                    </button>
                    <button type="button" onClick={() => setIsEditable(!isEditable)}>
                      {isEditable ? 'Cancelar' : 'Editar'}
                    </button>
                  </>
                  } 
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.EditRestaurants__box__dishes}>
          <Dishes dishes={dishes} setOrderList={setOrderList} orderList={orderList}/>
        </div>
        <ToastContainer />
    </div>
  );
};

export default Restaurant;
