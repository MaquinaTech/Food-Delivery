import React from 'react';
import styles from "../styles/styles.module.scss";
import Slide from '../components/Slide';



function Search() {
  const images = [
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
    "../hamburguesa.jpg",
  ];
    return (
        <div>
          <div className={styles.search}>
            <div className={styles.search__background} >
              <div className={styles.search__card}>
                <div className={styles.search__card__title}>
                  <p> <b>Pide lo que quieras</b> </p>
                  <p> <b>¡Cuando quieras!</b> </p>
                </div>
                <div className={styles.search__card__bar}>
                    <input type="text" id="address" name="address" placeholder="Introduce tu dirección, Ej. Calle Alcalá, 6, Cáceres."/>
                    <button id="searchButton" type="submit"><b>Search</b></button>
                </div>
              </div>
            </div>
            <div className={styles.search__categories}>
              <p className={styles.search__categories__title}><b>Nuestras categorías</b></p>
              <div className={styles.commerceSlide}>
                <Slide images={images}/>
              </div>
          </div>
        </div>
      </div>
    );
}      
export default Search;