import React from 'react';
import { Input } from 'reactstrap';
import styles from "../../styles/styles.module.scss";

const Ratigns = () => {

  return (
        <div className={styles.EditRestaurants__ratings}>
            <div className={styles.EditRestaurants__ratings__title}>
                <a>Valoraciones</a>
            </div>
            <div className={styles.EditRestaurants__ratings__list}>

            </div>
            <div className={styles.EditRestaurants__ratings__comment}>
                <Input type="textarea" />
            </div>
        </div> 
  );
};

export default Ratigns;
