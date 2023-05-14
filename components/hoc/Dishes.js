import React, { useState } from "react";
import { Button } from "reactstrap";
import { updateDish } from '../auxiliar';
import {  toast } from 'react-toastify';
import styles from "../../styles/styles.module.scss";

const Dishes = (props) => {
  const { dishes, setOrderList, orderList, enabled, owner } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const [editedDishes, setEditedDishes] = useState(dishes);

  const addDish = (index) => {
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

  const handleSaveDish = async (index) => {
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

  return (
    <div className={styles.EditRestaurants__box__dishes__dish}>
      <div className={styles.EditRestaurants__box__dishes__dish__edit}>
        <div className={styles.EditRestaurants__box__dishes__dish__edit__buttons}>
          {owner && (
            <button onClick={() => setIsDisabled(!isDisabled)} type="button">
              {isDisabled ? "Editar" : "Cancelar"}
            </button>
          )}
        </div>
      </div>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            <div className={styles.EditRestaurants__box__dishes__dish__img}>
              <img src={"/" + dish.img} alt="dish" onClick={() => addDish(index)} />
            </div>
            <div className={styles.EditRestaurants__box__dishes__dish__buttons}>
              <Button color="success" size="md" disabled={enabled} onClick={() => addDish(index)}>
                Añadir
              </Button>
              {!isDisabled && (
              <div className={styles.EditRestaurants__box__dishes__dish__buttons}>
                <button onClick={() => handleSaveDish(index)} type="button">
                  Guardar
                </button>
              </div>
            )}
            </div>
            <div className={styles.EditRestaurants__box__dishes__dish__info}>
              <input
                name="name"
                value={editedDishes[index].name}
                disabled={isDisabled}
                onChange={(event) => handleInputChange(index, event)}
              />
              <input
                name="price"
                value={editedDishes[index].price}
                disabled={isDisabled}
                onChange={(event) => handleInputChange(index, event)}
              />
              <input
                name="description"
                value={editedDishes[index].description}
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
