import React, { useState } from "react";
import { Button } from "reactstrap";
import { updateDish, newDish } from '../auxiliar';
import Modal from 'react-modal';

import {  toast } from 'react-toastify';
import styles from "../../styles/styles.module.scss";

const Dishes = (props) => {
  const { dishes, setOrderList, orderList, enabled, owner, idR } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const [editedDishes, setEditedDishes] = useState(dishes ? dishes : []);

  const sendDish = (index) => {
    if (dishes[index]) {
      setOrderList([...orderList, dishes[index]]);
    }
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedDishes = [...editedDishes];
    updatedDishes[index] = { ...updatedDishes[index], [name]: value };
    setEditedDishes(updatedDishes);
  };

  const editDish = async (index) => {
    const dishToUpdate = editedDishes[index];
    try {
      const { data } = await updateDish(localStorage.getItem('token'), dishToUpdate);
      if (data) {
        toast.success('Datos del plato actualizados correctamente');
      }
    } catch (error) {
      toast.error('Ocurrió un error al intentar actualizar los datos del plato');
    }
  };


  const newDish = async (values) => {
    if(idR){
      try {
        const { data } = await addDish(localStorage.getItem('token'), values,idR);
        if (data) {
          toast.success('Plato añadido correctamente');
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
              <button onClick={() => setIsDisabled(!isDisabled)} type="button">
                {isDisabled ? "Editar" : "Cancelar"}
              </button>

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
            </> 
          }
        </div>
      </div>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            <div className={styles.EditRestaurants__box__dishes__dish__img}>
              <img src={"/" + dish.img} alt="dish" onClick={() => sendDish(index)} />
            </div>
            <div className={styles.EditRestaurants__box__dishes__dish__buttons}>
              <Button color="success" size="md" disabled={enabled} onClick={() => sendDish(index)}>
                Añadir
              </Button>
              {!isDisabled && (
              <div className={styles.EditRestaurants__box__dishes__dish__buttons}>
                <button onClick={() => editDish(index)} type="button">
                  Guardar
                </button>
              </div>
            )}
            </div>
            <div className={styles.EditRestaurants__box__dishes__dish__info}>
              <input
                name="name"
                value={editedDishes[index] ? editedDishes[index].name : dish.name}
                disabled={isDisabled}
                onChange={(event) => handleInputChange(index, event)}
              />
              <input
                name="price"
                value={editedDishes[index] ? editedDishes[index].price : dish.price}
                disabled={isDisabled}
                onChange={(event) => handleInputChange(index, event)}
              />
              <input
                name="description"
                value={editedDishes[index] ? editedDishes[index].description : dish.description}
                disabled={isDisabled}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dishes;
