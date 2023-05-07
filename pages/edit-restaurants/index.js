import React, {useState} from 'react';
import withAuth from "../components/hoc/withAuth";
import Ratings from '../../components/hoc/Ratings';
import Restaurant from '../../components/hoc/Restaurant';
import Order from '../../components/hoc/Order';
import Link from 'next/link';
import styles from "../../styles/styles.module.scss";



function EditRestaurants() {
  const [orderList, setOrderList] = useState([]);
    return (
        <div className={styles.EditRestaurants}>
          <div className={styles.EditRestaurants__back}>
            <Link href="/list-restaurants">
              <img src="/back.svg" alt="back"/>  Ir a búsqueda
            </Link>
          </div>
          <Ratings />
          <Restaurant orderList={orderList} setOrderList={setOrderList}/>
          <Order orderList={orderList} setOrderList={setOrderList} />
        </div>
    );
}      
export default EditRestaurants;