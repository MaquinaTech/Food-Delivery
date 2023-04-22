import React from 'react';
import Login from './auth/login';
import Search from './search';
import ListRestaurants from './list-restaurants';
import styles from "../styles/styles.module.scss";

function Home() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default Home;

