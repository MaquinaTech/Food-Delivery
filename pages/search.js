import React from 'react';
import styles from "../styles/styles.module.scss";

function Search() {
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
                  <form action="SearchServlet.do" method="GET" className={styles.search__card__bar__form} id="searchForm">
                      <input type="text" id="address" name="address" placeholder="Introduce tu dirección, Ej. Calle Alcalá, 6, Cáceres."/>
                      <button id="searchButton" type="submit"><b>Search</b></button>
                  </form>
                </div>
              </div>
            </div>
            <div className={styles.search__categories}>
              <p className={styles.search__categories__title}><b>Nuestras categorías</b></p>
              <div className={styles.search__categories__carousel} class="carousel">
                <div className={styles.search__categories__carousel__controls}>
                  <button id="prevBtn">&larr;</button>
                  <button id="nextBtn">&rarr;</button>
                </div>
                <div className={styles.search__carousel__slide}>
                  <div className={styles.search__carousel__slide__card}>
                    <a href='SearchServlet.do?='>
                      <img src="${pageContext.request.contextPath}/public/${category.img}" alt="Category"/>
                    </a>
                    <h1>Nombre categoria</h1>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
}      
export default Search;