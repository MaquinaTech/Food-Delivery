import React from 'react';
import styles from "../styles/styles.module.scss";
import Slide from '../components/Slide';
import List from '../components/List';

function ListRestaurants() {
  const restaurants = [
    {name: 'Burguer King'},
    {name: 'Telepizza'},
    {name: 'Kebab'},
    {name: 'Atrio'},
  ];
    return (
        <div className={styles.ListRestaurants}>
          <div className={styles.commerceSlide}>
            <Slide/>
          </div>
          <div className={styles.ListRestaurants__list}>
            <List restaurants={restaurants} name="Restaurantes"/>
          </div>
      </div>
    );
}      
export default ListRestaurants;