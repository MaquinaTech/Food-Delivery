import React from 'react';
import styles from '../styles/styles.module.scss';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ restaurants, name }) => {

  const router = new useRouter();
  //Def. item list
  const renderItem = (index, key) => {
    const restaurant = restaurants[index];
    return (
      <ListGroupItem onClick={() => {router.push(restaurant.url)}} key={key} className={styles.reactList__item}>
        <div className={styles.reactList__item__info}>
          <div className={styles.reactList__item__info__name}>
            {restaurant.name}
          </div>
          <div className={styles.reactList__item__info__rating}>
            Valoración: {restaurant.rating}
          </div>
        </div>
        <div className={styles.reactList__item__services}>
          <div className={styles.reactList__item__services__delivery}>
            Entrega a domicilio: {restaurant.delivery ? 'Sí' : 'No'}
          </div>
          <div className={styles.reactList__item__services__time}>
            Tiempo: {restaurant.time}
          </div>
          <div className={styles.reactList__item__services__price}>
            Precio: {restaurant.price}
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
