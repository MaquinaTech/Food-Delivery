import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ProfileConfig from '../../components/hoc/ProfileConfig';
import ChangePassword from '../../components/hoc/ChangePassword';
import { getUser, updateUser } from '../../components/auxiliar';
import styles from '../../styles/styles.module.scss';

function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Get Restaurant details and dishes
  useEffect(() => {
    const searchUser = async () => {
      const token = localStorage.getItem('token');
      const userGet = await getUser(token);
      if(!userGet.error){
        if(userGet.data){
          setUser(userGet.data);
        }
      }
      else{
        console.log(userGet.error);
      }
    };
    searchUser();
  }, []);
  console.log("Usuario recogido: ", user);

  const handleSubmit = async (values) => {
    const token = localStorage.getItem('token');

    if (!values.name || !values.surname || !values.email) {
      toast.error('Por favor, complete todos los campos');
    } else {
      values = {...values, id: user.id};
      try {
        const {data} = await updateUser(values, token);
        if (data) {
          toast.success('Datos actualizados correctamente');
        }
      } catch (error) {
        toast.error('Ocurrió un error al intentar actualizar los datos');
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
            <ProfileConfig user={user} handleSubmit={handleSubmit}/>
            <ChangePassword />
          </div>
          <div className={styles.profile__box__account}>
            <div className={styles.profile__box__account__danger}>
              <div className={styles.profile__box__account__danger__title}>Eliminar cuenta</div>
              <p className={styles.profile__box__account__danger__text}>
                Si eliminas tu cuenta, no podrás recuperarla. <br/>Todos tus datos serán eliminados permanentemente.
              </p>
              <button className={styles.profile__box__danger__button}>Eliminar cuenta</button>
            </div>
          </div>
        </div>

      </div>
  );
}
export default Profile;
