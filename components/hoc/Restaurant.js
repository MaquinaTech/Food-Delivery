import React from 'react';
import styles from "../../styles/styles.module.scss";

const Restaurant = () => {

  return (
    <div className={styles.EditRestaurants__box}>
        <div className={styles.EditRestaurants__box__title}>
            Burguer King
        </div>
        <div className={styles.EditRestaurants__box__info}>
            <a>Dirección: Calle prueba, 78, 11A</a>
            <a>Teléfono: </a>
            <a>Correo de contacto: </a>
            <a>Rango de precio: </a>
            <a>Categoría: </a>
            <a>Media de valoraciones: 4/5</a>
            <a>Bike Friendly: <input type="checkbox" /></a>
        </div>
        <div className={styles.EditRestaurants__box__dishes}>

        </div>
    </div>
  );
};

export default Restaurant;
