import React, {useState, useEffect} from 'react';
import styles from "../../styles/styles.module.scss";
import Slide from '../../components/Slide';
import List from '../../components/List';
import SearchFilter from '../../components/SearchFilter';
import { getRestaurants } from '../../components/auxiliar';

function ListRestaurants() {
  const images = [
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
  ];
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const searchRestaurants = async () => {
      try {
        const token = localStorage.getItem('token');
        const restaurantList = await getRestaurants(token);
        setRestaurants(restaurantList.data);
      } catch (error) {
        console.error('Error al obtener la lista de restaurantes:', error);
      }
    };

    searchRestaurants();
  }, []);
  
    return (
        <div className={styles.ListRestaurants}>
          <div className={styles.commerceSlide}>
            <Slide images={images}/>
          </div>
          <div className={styles.ListRestaurants__content}>
            <div className={styles.ListRestaurants__content__filter}>
              <div className={styles.ListRestaurants__content__filter__box}>
                <SearchFilter title="Filtro"/>
              </div>
            </div>
            <div className={styles.ListRestaurants__content__list}>
              <List restaurants={restaurants ? restaurants : []}/>
            </div>
          </div>
      </div>
    );
}      
export default ListRestaurants;