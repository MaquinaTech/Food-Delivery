import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap';
import styles from "../../styles/styles.module.scss";

const Order = (props) => {
  const {setOrderList, orderList} = props;
  const [total, setTotal] = useState(0);

  const deleteDish = (index) => {
    const newList = [...orderList];
    newList.splice(index, 1);
    setOrderList(newList);
  };
  useEffect(() => {
    let totalPrice = orderList.reduce((acc, cur) => acc + cur.price, 0);
    setTotal(totalPrice);
  }, [orderList]);
  

  return (
        <div className={styles.EditRestaurants__order}>
          <div className={styles.EditRestaurants__box__orangeSpace}/>
          <div className={styles.EditRestaurants__order__title}>
            <h3>Tu Pedido</h3>
          </div>
          <div className={styles.EditRestaurants__order__list}>
            {orderList.length !== 0 ?
              <ul>
                {orderList.map((order, index) => (
                  <li key={index}>
                    <div className={styles.EditRestaurants__order__list__name}>
                      {order.name}<span>{order.price} €</span>
                    </div>
                    
                    <button type="button" onClick={() => { deleteDish(index) }}>
                      <img width={20} src="/remove.png" alt="deleteComment" />
                    </button>
                  </li>
                ))}
              </ul>
              :
              <div className={styles.EditRestaurants__order__info}>
                <p>Selecciona platos</p>
                <p>para realizar tu pedido</p>
              </div>
            }
          </div>
          <div className={styles.EditRestaurants__order__resume}>
          <InputGroup>
            <InputGroupText>
              Total a pagar
            </InputGroupText>
            <Input value={total + " €"}/>
            <Button color="warning">
              Pagar
            </Button>
          </InputGroup>
          </div>
        </div> 
  );
};

export default Order;
