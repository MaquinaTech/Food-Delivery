import React from 'react';
import styles from "../../styles/styles.module.scss";
import Slide from '../../components/Slide';
import List from '../../components/List';
import SearchFilter from '../../components/SearchFilter';

function ListRestaurants() {
  const restaurants = [
    {name: 'Burguer King'},
    {name: 'Telepizza'},
    {name: 'Kebab'},
    {name: 'Atrio'},
  ];
  const images = [
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
  ];
    return (
        <div className={styles.ListRestaurants}>
          <div className={styles.commerceSlide}>
            <Slide images={images}/>
          </div>
          <div className={styles.ListRestaurants__content}>
            <div className={styles.ListRestaurants__content__filter}>
              <div className={styles.ListRestaurants__content__filter__box}>
                <SearchFilter title="Filtro"></SearchFilter>
              </div>
            </div>
            <div className={styles.ListRestaurants__content__list}>
              <List restaurants={restaurants} name="Restaurantes"/>
            </div>
          </div>
      </div>
    );
}      
export default ListRestaurants;