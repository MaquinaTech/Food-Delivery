import React, {useState, useEffect} from 'react';
import Ratings from '../../../components/hoc/Ratings';
import Restaurant from '../../../components/hoc/Restaurant';
import Order from '../../../components/hoc/Order';
import Link from 'next/link';
import styles from "../../../styles/styles.module.scss";
import { getRestaurant, getDishes } from '../../../components/auxiliar';
import { useRouter } from 'next/router';



function EditRestaurants() {
  const [orderList, setOrderList] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const id = router.query.id;

  //Get Restaurant details and dishes
  useEffect(() => {
    const searchRestaurant = async () => {
      if(id){
        const token = localStorage.getItem('token');
        const restaurantGet = await getRestaurant(token,id);
        if(!restaurantGet.error){
          if(restaurantGet.data[0]){
            setRestaurant(restaurantGet.data[0]);
          }
          if(restaurantGet.data[1]){
            setDishes(restaurantGet.data[1]);
          }
          if(restaurantGet.data[2]){
            setCategories(restaurantGet.data[2]);
          }
          
        }
        else{
          console.log(restaurantGet.error);
        }
      }
    };

    searchRestaurant();
  }, [id]);
  

    return (
        <div className={styles.EditRestaurants}>
          <div className={styles.EditRestaurants__back}>
            <Link href="/list-restaurants">
              <img src="/back.svg" alt="back"/>  Ir a búsqueda
            </Link>
          </div>
          <Ratings />
          <Restaurant orderList={orderList} setOrderList={setOrderList} restaurant={restaurant} categories={categories} dishes={dishes}/>
          <Order orderList={orderList} setOrderList={setOrderList} />
        </div>
    );
}      
export default EditRestaurants;