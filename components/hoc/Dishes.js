import React, { useState } from "react";
import { Button } from "reactstrap";
import { updateDish, addDish, deleteDish } from '../auxiliar';
import { Formik, Form, Field } from 'formik';
import Modal from 'react-modal';
import DishForm from './DishForm';
import { useRouter } from "next/router";

import {  toast } from 'react-toastify';
import styles from "../../styles/styles.module.scss";

const Dishes = (props) => {
  const router = useRouter();
  const { dishes, setDishes, setOrderList, orderList, enabled, owner, idR } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalNew, setOpenModalNew] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding:"50px",
      width:"50%",
    },
  };

  const sendDish = (index) => {
    if (dishes[index]) {
      setOrderList([...orderList, dishes[index]]);
    }
  };

  const editDish = async (values) => {
    if(values){
      try {
        const { data, error } = await updateDish(localStorage.getItem('token'), values);
        if (data) {
          toast.success('Datos del plato actualizados correctamente');
          setOpenModalDelete(false);
        }
      } catch (error) {
        toast.error('Ocurrió un error al intentar actualizar los datos del plato');
      }
    }
    else{
      console.log("no hay values");
    }
  };

  const removeDish = async (index) => {
    if(idR){
      //Find dish id
      console.log("index",index);
      const id = dishes[index].id;
      console.log("id",id);
      try {
        const { data } = await deleteDish(localStorage.getItem('token'), id);
        console.log(data);
        if (data) {
          toast.success('Plato eliminado');
          const newDishes = dishes.filter((dish) => dish.id !== id);
          setDishes(newDishes);
          setOpenModalDelete(false);
        }
        else{
          toast.error('Ocurrió un error al intentar eliminar el plato');
        }
      } catch (error) {
        toast.error('Ocurrió un error al intentar eliminar el plato');
      }
    }
  };


  const newDish = async (values) => {
    if(idR){
      if(!values.name || !values.description || !values.price){
        toast.error('Debe añadir todos los campos');
        return;
      }
      try {
        const data = await addDish(localStorage.getItem('token'), values,idR);
        if (data.data) {
          toast.success('Plato añadido correctamente');
          setOpenModalNew(false);
          console.log(data.data);
          values = {...values,id: data.data};
          console.log(values);
          setDishes([...dishes, values]);
        }
        else{
          toast.success('Error al crear plato');
        }
      } catch (error) {
        toast.error('Ocurrió un error al intentar añadir el plato');
      }
    }
  };

  return (
    <div className={styles.EditRestaurants__box__dishes__dish}>
      <div className={styles.EditRestaurants__box__dishes__dish__edit}>
        <div className={styles.EditRestaurants__box__dishes__dish__edit__buttons}>
          {owner &&
            <>
            <Modal
                isOpen={openModalNew}
                onRequestClose={() => {setOpenModalNew(!openModalNew)}}
                contentLabel="Crear plato"
                style={customStyles}
                ariaHideApp={false}
              >
                <div className={styles.profile__box__modal}>
                  <div className={styles.profile__box__modal__close}>
                    <button onClick={() => {setOpenModalNew(!openModalNew)}}>cancelar</button>
                  </div>
                    <h2>Añadir un nuevo plato</h2>
                  <div className={styles.profile__box__modal__text}>
                    Complete todos los campos, porfavor
                  </div>
                  <div className={styles.profile__box__modal__form}>
                    <DishForm onSubmit={newDish}/>
                  </div>
                  
                </div>
              </Modal>
              <div className={styles.profile__box__modal__button}>
                <Button color="warning" size="md" disabled={enabled} onClick={() => setOpenModalNew(!openModalNew)}>
                Crear
                </Button>
              </div>
              <div className={styles.profile__box__modal__button__edit}>
                <Button color="info" size="md" disabled={enabled} onClick={() => setIsDisabled(!isDisabled)}>
                  {isDisabled ? "Editar" : "Cancelar"}
                </Button>
              </div>
            </> 
          }
        </div>
      </div>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            <div className={styles.EditRestaurants__box__dishes__dish__img}>
              <img src={dish.img ? ("/" + dish.img) : "/logo.png"} alt="dish" onClick={() => sendDish(index)} />
            </div>
            <div className={styles.EditRestaurants__box__dishes__dish__buttons}>
              <Modal
                isOpen={openModalDelete}
                onRequestClose={() => {setOpenModalDelete(!openModalDelete)}}
                contentLabel="Eliminar plato"
                style={customStyles}
                ariaHideApp={false}
              >
                <div className={styles.profile__box__modal}>
                  <div className={styles.profile__box__modal__close}>
                    <button onClick={() => {setOpenModalDelete(!openModalDelete)}}>cancelar</button>
                  </div>
                    <h2>¡Cuidado!</h2>
                  <div className={styles.profile__box__modal__text}>
                    Esta acción es irreversible
                  </div>
                  <div className={styles.profile__box__modal__button}>
                    <button onClick={() => {}}>Eliminar Plato</button>
                  </div>
                </div>
              </Modal>
              {!isDisabled && (
              <div className={styles.EditRestaurants__box__dishes__dish__buttons}>
                <Button color="danger" size="md" disabled={enabled} onClick={() => removeDish(index)}>
                  Eliminar
                </Button>
              </div>
              )}
              <Button color="success" size="md" disabled={enabled} onClick={() => sendDish(index)}>
                Pedir
              </Button>
              {/*!isDisabled && (
                <div className={styles.EditRestaurants__box__dishes__dish__buttons}>
                  <Button color="warning" size="md" disabled={enabled} onClick={() => editDish(index)}>
                    Editar
                  </Button>
                </div>
              )*/}

            </div>
            <div className={styles.EditRestaurants__box__dishes__dish__info}>
              <Formik
              enableReinitialize={true}
                initialValues={{
                  ...(dish ? { ...dish } : {}),
                }}
                onSubmit={(values) => {
                  editDish(values)
                }}
              >
                {() => (
                  <Form>
                    <div className={styles.EditRestaurants__box__dishes__dish__info__item}>
                      <label>
                        Nombre
                      </label>
                      <Field type="text" name="name" id="name" disabled={isDisabled} />
                    </div>
                    <div className={styles.EditRestaurants__box__dishes__dish__info__item}>
                      <label>
                        Precio
                      </label>
                      <Field type="number" name="price" id="price" disabled={isDisabled} />
                    </div>
                    <div className={styles.EditRestaurants__box__dishes__dish__info__item}>
                      <label>
                        Descripción
                      </label>
                      <Field as="textarea" name="description" id="description" disabled={isDisabled}/>
                    </div>
                    {!isDisabled && (
                    <div className={styles.EditRestaurants__box__dishes__dish__buttons}>
                      <Button color="warning" size="md" disabled={enabled} type="submit">
                        Editar
                      </Button>
                    </div>
                  )}
                  </Form>
                )}
              </Formik>
              
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dishes;
