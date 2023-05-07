import React, {useState, useCallback} from 'react';
import Dishes from './Dishes';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../styles/styles.module.scss";


const Restaurant = (props) => {
  const { setOrderList, orderList} = props;
  const [isEditable, setIsEditable] = useState(false);
  const [restaurant, setRestaurant] = useState(
    {name: 'Burguer King', address: 'Calle prueba', email: 'burguerking@burguer.com', phone:'999999999', category:'Burguer', priceRange:'10 - 20'}
  );

  const dishes = [
    { name: "Ensalada César", price: 10.5, type: 0, description: "Lechuga, pollo, parmesano y crutones" },
    { name: "Paella", price: 18, type: 1, description: "Arroz con mariscos" },
    { name: "Tarta de manzana", price: 5, type: 2, description: "Tarta de manzana casera con helado" },
    { name: "Refresco", price: 2, type: 3, description: "Refresco de cola" },
    { name: "Pizza Margarita", price: 12, type: 1, description: "Pizza con tomate, mozzarella y albahaca" },
    { name: "Agua", price: 1.5, type: 3, description: "Agua mineral" },
    { name: "Crema Catalana", price: 6, type: 2, description: "Postre típico catalán" },
    { name: "Sopa de cebolla", price: 8, type: 0, description: "Sopa de cebolla con queso gratinado" },
    { name: "Coca-Cola", price: 2, type: 3, description: "Refresco de cola" },
    { name: "Pasta a la carbonara", price: 13, type: 1, description: "Pasta con salsa de nata, huevo y bacon" }
  ];

  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (values) => {
    if (!values.address && !values.phone && !values.email && !values.priceRange && !values.category) {
      toast.error('Por favor, complete los campos requeridos', { autoClose: 3500 });
    } else {
      toast.success('Restaurante actualizado', { autoClose: 3500 });
      setRestaurant([restaurant,values]);
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
            <span>Burguer King</span>
        </div>
        <div className={styles.EditRestaurants__box__info}>
          <Formik
            initialValues={{
              address: restaurant.address,
              phone: restaurant.phone,
              email: restaurant.email,
              priceRange: restaurant.priceRange,
              category: restaurant.category,
              bikeFriendly: restaurant.bikeFriendly,
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
                      <span>Dirección:</span>
                      <Field type="text" name="address" disabled={!isEditable} />
                    </div>

                    <div className={styles.EditRestaurants__box__info__form__left__item}>
                      <span>Teléfono:</span>
                      <Field type="text" name="phone" disabled={!isEditable} />
                    </div>

                    <div className={styles.EditRestaurants__box__info__form__left__item}>
                      <span>Correo de contacto:</span>
                      <Field type="email" name="email" disabled={!isEditable} />
                    </div>
                  </div>

                  <div className={styles.EditRestaurants__box__info__form__right}>
                    <div className={styles.EditRestaurants__box__info__form__right__item}>
                      <span>Rango de precio:</span>
                      <Field type="text" name="priceRange" disabled={!isEditable} />
                    </div>

                    <div className={styles.EditRestaurants__box__info__form__right__item}>
                      <span>Categoría:</span>
                      <Field type="text" name="category" disabled={!isEditable} />
                    </div>

                  </div>
                </div>
                  
                <div className={styles.EditRestaurants__box__info__buttons}>
                  <button type="button" disabled={!isEditable} onClick={() => handleSubmit(values)}>
                    Guardar
                  </button>

                  <button type="button" onClick={() => setIsEditable(!isEditable)}>
                    {isEditable ? 'Cancelar' : 'Editar'}
                  </button>
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
