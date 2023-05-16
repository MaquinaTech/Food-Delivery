import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getData } from '../../components/auxiliar';
import { toast } from 'react-toastify';
import styles from '../../styles/styles.module.scss';

function Seguimiento() {
  const router = useRouter();
  const [reviews, setReviews] = useState(0);
  const [restaurant, setRestaurant] = useState(0);

  // Update user data
  useEffect(() => {
    const searchData = async () => {
      const token = localStorage.getItem('token');
      const {data} = await getData(token);
      if(data){
        if(data[0]){
          setRestaurant(data[0]);
        }
        if(data[1]){
          setReviews(data[1]);
        }
      }
      else{
        toast.error('Ocurrió un error al intentar actualizar los datos');
      }
    };

    searchData();
  }, []);
  return (
      <div className={styles.profile}>

        {reviews < 3 ?
          <div className={styles.defensa}>
            <span>Numero de reviews: {reviews}</span>
            <span>Numero de restaurantes: {restaurant}</span>          
          </div>
          :
          <div className={styles.defensa3}>
            <span>Numero de reviews: {reviews}</span>
            <span>Numero de restaurantes: {restaurant}</span>          
          </div>
        }

        <div className={styles.mt}>
        <Link href="/profile">
            <img src="/back.svg" alt="back"/>  Volver atrás
          </Link>
        </div>

      </div>
  );
}
export default Seguimiento;
