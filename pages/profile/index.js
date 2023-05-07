import React from 'react';
import Link from 'next/link';
import withAuth from '../../components/hoc/withAuth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ProfileConfig from '../../components/hoc/ProfileConfig';
import ChangePassword from '../../components/hoc/ChangePassword';
import styles from '../../styles/styles.module.scss';

function Profile() {
  const router = useRouter();
 

  const handleSubmit = async (values) => {
    if (!values.username || !values.password) {
      toast.error('Por favor, complete todos los campos');
    } else {
      try {
        // Make login request
        const {data} = await getToken(values.username, values.password);
        if (data) {
          toast.success('Datos guardados correctamente');
        }
      } catch (error) {
        toast.error('Ocurrió un error al intentar iniciar sesión');
      }
    }
  };

  return (
      <div className={styles.profile}>

        <div className={styles.profile__back}>
          <Link href="/list-restaurants">
            <img src="/back.svg" alt="back"/>  Volver atrás
          </Link>
        </div>

        <div className={styles.profile__box}>
          <div className={styles.profile__box__forms}>
            <ProfileConfig handleSubmit={handleSubmit}/>
            <ChangePassword />
          </div>
          <div className={styles.profile__box__account}>
            <div className={styles.profile__box__account__danger}>
              <div className={styles.profile__box__account__danger__title}>Eliminar cuenta</div>
              <p className={styles.profile__box__account__danger__text}>
                Si eliminas tu cuenta, no podrás recuperarla. Todos tus datos serán eliminados permanentemente.
              </p>
              <button className={styles.profile__box__danger__button}>Eliminar cuenta</button>
            </div>
          </div>
        </div>

      </div>
  );
}
export default withAuth(Profile);
