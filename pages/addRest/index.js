import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import styles from "../../styles/styles.module.scss";
import { addRestaurants } from '../../components/auxiliar';
import { useRouter } from 'next/router';



function AddRestaurants() {
  const router = useRouter();

  const addRestaurantData = async (values) => {
    if(values){
        try {
          const { data } = await addRestaurants(localStorage.getItem('token'), values);
          if (data) {
            toast.success('Datos actualizados correctamente');
          }
        } catch (error) {
          toast.error('Ocurrió un error al intentar actualizar los datos');
        }
      }
  };
  

    return (
        <div className={styles.EditRestaurants}>
          <div className={styles.EditRestaurants__back}>
            <Link href="/list-restaurants">
              <img src="/back.svg" alt="back"/>  Ir a búsqueda
            </Link>
          </div>
          <div className={styles.EditRestaurants__box}>
          <Formik
          initialValues={{
            "address": "",
            "telephone": "",
            "contactEmail": "",
            "name": "",
            "available": false,
            "minPrice": "",
            "maxPrice": "",
            "city": "",
            "bikeFriendly": false,
            "description": "",

          }}
          onSubmit={(values) => {
            addRestaurantData(values)
          }}
        >
          {({values}) => (
            <Form>
              <div className={styles.EditRestaurants__box__info__form}>
                <div className={styles.EditRestaurants__box__info__form__left}>
                  <div className={styles.EditRestaurants__box__info__form__left__item}>
                    <span>Dirección</span>
                    <Field type="text" name="address" id="address" />
                  </div>

                  <div className={styles.EditRestaurants__box__info__form__left__item}>
                    <span>Teléfono</span>
                    <Field type="text" name="telephone" id="telephone" />
                  </div>

                  <div className={styles.EditRestaurants__box__info__form__left__item}>
                    <span>Correo de contacto</span>
                    <Field type="email" name="contactEmail" id="contactEmail" />
                  </div>
                  
                  
                    <div className={styles.EditRestaurants__box__info__form__left__item}>
                      <span>Nombre</span>
                      <Field type="text" name="name" id="name" />
                    </div>
                    <div className={styles.EditRestaurants__box__info__form__right__item}>
                      <span>¿Disponible?</span>
                        <Field type="checkbox" name="available" id="available" onClick={() => {values.available = !values.available}}/>
                    </div>
                  
                  
                </div>

                <div className={styles.EditRestaurants__box__info__form__right}>
                  <div className={styles.EditRestaurants__box__info__form__right__item}>
                    <span>Rango de precio</span>
                      <Field type="number" name="minPrice" id="minPrice" />
                      <Field type="number" name="maxPrice" id="maxPrice" />
                  </div>

                  <div className={styles.EditRestaurants__box__info__form__right__item}>
                    <span>Ciudad</span>
                    <Field type="text" name="city" id="city" />
                  </div>
                  <div className={styles.EditRestaurants__box__info__form__right__item}>
                    <span>bikeFriendly</span>
                    <Field type="checkbox" name="bikeFriendly" id="bikeFriendly" onClick={() => {values.bikeFriendly = !values.bikeFriendly}} />
                  </div>

                </div>
                
              </div>
                <div className={styles.EditRestaurants__box__info__buttons}>
                  <button type="submit">
                      Guardar
                  </button>
                </div>
              
            </Form>
          )}
        </Formik>
          </div>
        </div>
    );
}      
export default AddRestaurants;