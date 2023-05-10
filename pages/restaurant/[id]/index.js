import React, {useState, useEffect} from 'react';
import Ratings from '../../../components/hoc/Ratings';
import Restaurant from '../../../components/hoc/Restaurant';
import Order from '../../../components/hoc/Order';
import Link from 'next/link';
import styles from "../../../styles/styles.module.scss";
import { getRestaurant } from '../../../components/auxiliar';
import { useRouter } from 'next/router';



function EditRestaurants() {
  const [orderList, setOrderList] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const searchRestaurant = async () => {
      try {
        const token = localStorage.getItem('token');
        const restaurantGet = await getRestaurant(token,id);
        setRestaurant(restaurantGet.data);
        
      } catch (error) {
        console.error('Error al obtener los datos del restaurante:', error);
      }
      console.log(restaurant);
    };

    searchRestaurant();
  }, []);
  
    return (
        <div className={styles.EditRestaurants}>
          <div className={styles.EditRestaurants__back}>
            <Link href="/list-restaurants">
              <img src="/back.svg" alt="back"/>  Ir a búsqueda
            </Link>
          </div>
          <Ratings />
          <Restaurant orderList={orderList} setOrderList={setOrderList} restaurant={restaurant}/>
          <Order orderList={orderList} setOrderList={setOrderList} />
        </div>
    );
}      
export default EditRestaurants;