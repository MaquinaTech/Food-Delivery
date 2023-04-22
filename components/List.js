import React from 'react';
import styles from '../styles/styles.module.scss';
import { ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ restaurants, name }) => {
  const renderItem = (index, key) => {
    return <div key={key}>{restaurants[index].name}</div>;
  }

  return (
    <div className={styles.wrapReactList}>
      <h1>{name}</h1>
      <div className={styles.wrapReactList} style={{overflow: 'auto', maxHeight: 1000}}>
      <ListGroup flush className={styles.reactList}>
        <ListGroupItem className={styles.reactList__item}>
          Burguer King
        </ListGroupItem>
        <ListGroupItem className={styles.reactList__item}>
          Telepizza
        </ListGroupItem>
        <ListGroupItem className={styles.reactList__item}>
          Atrio
        </ListGroupItem>
        <ListGroupItem className={styles.reactList__item}>
          Wicco
        </ListGroupItem>
        <ListGroupItem className={styles.reactList__item}>
          La mafia se sienta a la mesa
        </ListGroupItem>
      </ListGroup>
      </div>
    </div>
  );
};

export default List;
