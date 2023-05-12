import React, { useState } from "react";
import { Button } from "reactstrap";
import styles from "../../styles/styles.module.scss";

const Dishes = ( props ) => {
    const {dishes, setOrderList, orderList} = props;
  const getDishType = (type) => {
    switch (type) {
      case 0:
        return "Primeros";
      case 1:
        return "Segundos";
      case 2:
        return "Postres";
      case 3:
        return "Bebidas";
      default:
        return "";
    }
  };

  /*const renderDishesByType = (type) => {
    const filteredDishes = dishes.filter((dish) => dish.type === type);
    const addDish = (index) => {
    if (dishes[index]) {
        setOrderList([...orderList,filteredDishes[index] ]);
    }
  };*/

  //Add dish
  const addDish = (index) => {
    if (dishes[index]) {
      setOrderList([...orderList, dishes[index]]);
    }
  };

    return (
      <div className={styles.EditRestaurants__box__dishes__dish}>
        
        <ul>
          {dishes.map((dish, index) => (
            <li key={index}>
              <div className={styles.EditRestaurants__box__dishes__dish__img}>
                <img src={"/"+dish.img} alt="dish" onClick={() => { addDish(index) }}/>
              </div>
              <div className={styles.EditRestaurants__box__dishes__dish__buttons}>
                <Button color="success" size="md" onClick={() => { addDish(index) }}>
                  Añadir
                </Button>
              </div>
              <div>{dish.name}</div>
              <div>{dish.price} €</div>
              <div>{dish.description}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  //};

  /*return (
    <>
      {renderDishesByType(0)}
      {renderDishesByType(1)}
      {renderDishesByType(2)}
      {renderDishesByType(3)}
    </>
  );*/
};

export default Dishes;
