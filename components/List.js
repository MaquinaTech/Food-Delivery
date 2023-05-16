import React from 'react';
import styles from '../styles/styles.module.scss';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ restaurants, name }) => {

  const router = new useRouter();
  //Def. item list
  const renderItem = (index) => {
    const restaurant = restaurants[index];
    return (
      <ListGroupItem key={restaurant.id} onClick={() => {router.push(`/restaurant/${restaurant.id}`)}} className={styles.reactList__item}>

        <div className={styles.reactList__item__info}>
          <div className={styles.reactList__item__info__name}>
            {restaurant.name}
          </div>
          <div className={styles.reactList__item__info__rating}>
            Valoración: {restaurant.gradesAverage}
          </div>
        </div>
        <div className={styles.reactList__item__services}>
          <div className={styles.reactList__item__services__delivery}>
            Entrega a domicilio: {restaurant.bikeFriendly ? 'Sí' : 'No'}
          </div>
          <div className={styles.reactList__item__services__time}>
            Email: {restaurant.contactEmail}
          </div>
          <div className={styles.reactList__item__services__price}>
            Precio: {restaurant.minPrice} - {restaurant.maxPrice} €
          </div>
        </div>
      </ListGroupItem>
    );
  }

  return (
    <div className={styles.wrapReactList}>
      <h1>{name}</h1>
      <div className={styles.wrapReactList} style={{overflow: 'auto', maxHeight: 1000}}>
        <ListGroup flush className={styles.reactList}>
          {restaurants.map((_, index) => (
            renderItem(index, index)
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default List;
