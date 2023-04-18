import React from 'react';
import Login from './login';
import Search from './search';
import ListRestaurants from './listRestaurants';
import styles from "../styles/styles.module.scss";

function Home() {
  return (
    <div>
      <Search/>
    </div>
  );
}

export default Home;

