import React, {useState, useEffect} from 'react';
import Dishes from './Dishes';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import { updateRestaurant, deleteRestaurant } from '../auxiliar';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import styles from "../../styles/styles.module.scss";


const Restaurant = (props) => {
  const { restaurant, setRestaurant, categories, dishes, setOrderList, orderList, owner} = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding:"50px",
      width:"20%",
    },
  };

  const updateRestaurantData = async (values) => {
    if (restaurant) {
      try {
        const { data } = await updateRestaurant(localStorage.getItem('token'), values);
        if (data) {
          toast.success('Datos actualizados correctamente');
        }
      } catch (error) {
        toast.error('Ocurrió un error al intentar actualizar los datos');
      }
    }
  };

  const handleSubmit = (values) => {
    if (!values.address && !values.telephone && !values.contactEmail && !values.priceRange && !values.category && !values.available && !values.bikeFriendly) {
      toast.error('Por favor, complete los campos requeridos', { autoClose: 3500 });
    } else {
      toast.success('Restaurante actualizado', { autoClose: 3500 });
      setRestaurant(values);
      updateRestaurantData(values);
    }
  };

  const deleteRest = async () => {
    const token = localStorage.getItem('token');
    if(restaurant.id){
      try {
        const {data} = await deleteRestaurant(token,restaurant.id);
        if (data) {
          toast.success('Restaurante eliminado correctamente');
          localStorage.removeItem('token');
          router.push('/');
        }
      } catch (error) {
        toast.error('Ocurrió un error al intentar eliminar su cuenta');
      }
    }
  };
  return (
    <div className={styles.EditRestaurants__box}>
      <div className={styles.EditRestaurants__box__logo}>
        {restaurant && restaurant.available ?
          <img
            src="/check.png"
            className={styles.EditRestaurants__box__logo__mini}
            alt="LogoRestaurnt"
          />
          :
          <img
            src="/noCheck.png"
            className={styles.EditRestaurants__box__logo__mini}
            alt="LogoRestaurnt"
          />
        }

        <img
          src="/logo.png"
          className={styles.EditRestaurants__box__logo__big}
          alt="LogoRestaurnt"
        />
        {restaurant && restaurant.bikeFriendly ?
          <img
            src="/delivery.png"
            className={styles.EditRestaurants__box__logo__mini}
            alt="LogoRestaurnt"
          />
          :
          <div
            className={styles.EditRestaurants__box__logo__mini}
          />
        }
        
      </div>
      <div className={styles.EditRestaurants__box__title}>
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
          {({values}) => (
            <Form>
              <div className={styles.EditRestaurants__box__info__form}>
                <div className={styles.EditRestaurants__box__info__form__left}>
                  <div className={styles.EditRestaurants__box__info__form__left__item}>
                    <span>Dirección</span>
                    <Field type="text" name="address" id="address" disabled={isDisabled} />
                  </div>

                  <div className={styles.EditRestaurants__box__info__form__left__item}>
                    <span>Teléfono</span>
                    <Field type="text" name="telephone" id="telephone" disabled={isDisabled} />
                  </div>

                  <div className={styles.EditRestaurants__box__info__form__left__item}>
                    <span>Correo de contacto</span>
                    <Field type="email" name="contactEmail" id="contactEmail" disabled={isDisabled} />
                  </div>
                  {!isDisabled && 
                  <>
                    <div className={styles.EditRestaurants__box__info__form__left__item}>
                      <span>Nombre</span>
                      <Field type="text" name="name" id="name" disabled={isDisabled} />
                    </div>
                    <div className={styles.EditRestaurants__box__info__form__right__item}>
                      <span>¿Disponible?</span>
                        <Field type="checkbox" name="available" id="available" onClick={() => {values.available = !values.available}}/>
                    </div>
                  </>
                  }
                </div>

                <div className={styles.EditRestaurants__box__info__form__right}>
                  <div className={styles.EditRestaurants__box__info__form__right__item}>
                    <span>Rango de precio</span>
                      <Field type="number" name="minPrice" id="minPrice" disabled={isDisabled} />
                      <Field type="number" name="maxPrice" id="maxPrice" disabled={isDisabled} />
                  </div>
                  <div className={styles.EditRestaurants__box__info__form__right__item}>
                    <span>Categoría</span>
                    <Field type="text" name="category" id="category" disabled={isDisabled} />
                  </div>

                  {!isDisabled && 
                  <>
                    <div className={styles.EditRestaurants__box__info__form__right__item}>
                      <span>Ciudad</span>
                      <Field type="text" name="city" id="city" disabled={isDisabled} />
                    </div>
                    <div className={styles.EditRestaurants__box__info__form__right__item}>
                      <span>bikeFriendly</span>
                      <Field type="checkbox" name="bikeFriendly" id="bikeFriendly" onClick={() => {values.bikeFriendly = !values.bikeFriendly}} />
                    </div>
                  </>
                  }

                </div>
                
              </div>
              {!isDisabled && 
                <div className={styles.EditRestaurants__box__info__buttons}>
                  <button type="submit">
                      Guardar
                  </button>
                </div>
              }
            </Form>
          )}
        </Formik>
        {owner &&
          <div className={styles.EditRestaurants__box__info__buttons}>
            <button onClick={() => {setIsDisabled(!isDisabled)}} type="button">
            {isDisabled ? "Editar" : "Cancelar"}
            </button>
              <button style={{backgroundColor:"red", width:"fit-content"}} onClick={() => {setOpenModal(!openModal)}} >Eliminar restaurante</button>
              <Modal
                isOpen={openModal}
                onRequestClose={() => {setOpenModal(!openModal)}}
                contentLabel="Eliminar cuenta"
                style={customStyles}
                ariaHideApp={false}
              >
                <div className={styles.profile__box__modal}>
                  <div className={styles.profile__box__modal__close}>
                    <button onClick={() => {setOpenModal(!openModal)}}>cancelar</button>
                  </div>
                    <h2>¡Cuidado!</h2>
                  <div className={styles.profile__box__modal__text}>
                    Esta acción es irreversible
                  </div>
                  <div className={styles.profile__box__modal__button}>
                    <button onClick={deleteRest}>Eliminar restaurante</button>
                  </div>
                </div>
              </Modal>

          </div>
        }
      </div>

      <div className={styles.EditRestaurants__box__whiteSpace}/>
      <div className={styles.EditRestaurants__box__dishes}>
        <h3>Menú</h3>
        <Dishes dishes={dishes} setOrderList={setOrderList} orderList={orderList} enabled={restaurant && restaurant.available ? false : true} owner={owner} idR={restaurant && restaurant.id}/>
      </div>
    </div>
  );
};

export default Restaurant;
