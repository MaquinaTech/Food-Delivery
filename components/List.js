import React from 'react';
import ReactList from 'react-list';
import styles from '../styles/styles.module.scss';

const List = ({ restaurants, name }) => {
  const renderItem = (index, key) => {
    return <div key={key}>{restaurants[index].name}</div>;
  }

  return (
    <div>
      <h1>{name}</h1>
      <div className={styles.reactList} style={{overflow: 'auto', maxHeight: 1000}}>
        <ReactList
          itemRenderer={renderItem}
          length={restaurants.length}
          type='uniform'
        />
      </div>
    </div>
  );
};

export default List;
