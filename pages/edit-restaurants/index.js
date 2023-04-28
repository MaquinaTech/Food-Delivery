import React from 'react';
import Ratigns from '../../components/hoc/Ratings';
import Restaurant from '../../components/hoc/Restaurant';
import Order from '../../components/hoc/Order';
import styles from "../../styles/styles.module.scss";


function EditRestaurants() {
  const restaurant = [
    {name: 'Burguer King'},
    {description: 'Restaurante de comida rápida, hamburguesas, refrescos, helados...'},
    {dirección: 'Calle prueba'},
    {email: 'burguerking@burguer.com'},
  ];
    return (
        <div className={styles.EditRestaurants}>
          <Ratigns />
          <Restaurant />
          <Order />
        </div>
    );
}      
export default EditRestaurants;