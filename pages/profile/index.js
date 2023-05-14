import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ProfileConfig from '../../components/hoc/ProfileConfig';
import ChangePassword from '../../components/hoc/ChangePassword';
import { getUser, updateUser, updatePassword, deleteAccount } from '../../components/auxiliar';
import Modal from 'react-modal';
import styles from '../../styles/styles.module.scss';

function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding:"50px",
      width:"20%",
    },
  };
  

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

  // Update user data
  useEffect(() => {
    const updateUserData = async () => {
      if (user) {
        try {
          const { data } = await updateUser(localStorage.getItem('token'), user);
          if (data) {
            toast.success('Datos actualizados correctamente');
          }
        } catch (error) {
          toast.error('Ocurrió un error al intentar actualizar los datos');
        }
      }
    };

    updateUserData();
  }, [user]);

  // Update password
  const changePassword = async (values) => {
    const token = localStorage.getItem('token');
    
    if (!values.password1 || !values.password2) {
      toast.error('Por favor, complete todos los campos');
    } else {
      if(values.password1 === values.password2){
        try {
          const {data} = await updatePassword(token,values);
          if (data) {
            toast.success('Contraseña actualizada correctamente');
          }
        } catch (error) {
          toast.error('Ocurrió un error al intentar actualizar su contraseña');
        }
      }
      else{
        toast.error('Las contraseñas no coinciden');
      }
    }
  };

  const deleteUser = async () => {
    const token = localStorage.getItem('token');
    try {
      const {data} = await deleteAccount(token);
      if (data) {
        toast.success('Cuenta eliminada correctamente');
        localStorage.removeItem('token');
        router.push('/');
      }
    } catch (error) {
      toast.error('Ocurrió un error al intentar eliminar su cuenta');
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
            <ProfileConfig user={user} setUser={setUser}/>
            <ChangePassword handleSubmit={changePassword} />
          </div>
          <div className={styles.profile__box__account}>
            <div className={styles.profile__box__account__danger}>
              <div className={styles.profile__box__account__danger__title}>Eliminar cuenta</div>
              <p className={styles.profile__box__account__danger__text}>
                Si eliminas tu cuenta, no podrás recuperarla. <br/>Todos tus datos serán eliminados permanentemente.
              </p>
              <button onClick={() => {setOpenModal(!openModal)}} className={styles.profile__box__danger__button}>Eliminar cuenta</button>
              <Modal
                isOpen={openModal}
                onRequestClose={() => {setOpenModal(!openModal)}}
                contentLabel="Eliminar cuenta"
                style={customStyles}
                ariaHideApp={false}
              >
                <div className={styles.profile__box__modal}>
                  <div className={styles.profile__box__modal__close}>
                    <button onClick={() => {setOpenModal(!openModal)}}>cancelar</button>
                  </div>
                    <h2>¡Cuidado!</h2>
                  <div className={styles.profile__box__modal__text}>
                    Esta acción es irreversible
                  </div>
                  <div className={styles.profile__box__modal__button}>
                    <button onClick={deleteUser}>Eliminar cuenta</button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>

      </div>
  );
}
export default Profile;
