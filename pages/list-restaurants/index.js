import React, {useState, useEffect} from 'react';
import styles from "../../styles/styles.module.scss";
//import Slide from '../../components/Slide';
import _ from 'lodash';
import List from '../../components/List';
import SearchFilter from '../../components/SearchFilter';
import { getRestaurants } from '../../components/auxiliar';

function ListRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [filters, setFilters] = useState({ name: ' ', address: ' ', bikeFriendly: false, available: 'all',gradesAverage:""});
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const searchRestaurants = async () => {
      try {
        const token = localStorage.getItem('token');
        const restaurantList = await getRestaurants(token);
        setRestaurants(restaurantList.data);
        console.log("Restaurants: ", restaurantList.data);
      } catch (error) {
        console.error('Error al obtener la lista de restaurantes:', error);
      }
    };
    

    searchRestaurants();
  }, []);

  useEffect(() => {
    const filteredRestaurants = _.filter(restaurants, (restaurant) => {
      const { name, address, bikeFriendly, available } = filters;
      console.log("Filtros: ",available);
      return (
        (name === ' ' || restaurant.name.includes(name)) &&
        (address === ' ' || restaurant.address.includes(address)) &&
        (!bikeFriendly || restaurant.bikeFriendly) &&
        (available === 'all' || restaurant.available === available)
      );
    });
    if(filters.gradesAverage != ""){
      const sortedRestaurants = _.orderBy(filteredRestaurants, ['gradesAverage'], [filters.gradesAverage == "1" ? 'desc' : 'asc']);
      setFilteredData(sortedRestaurants);
    }
    else{
      setFilteredData(filteredRestaurants);
    }
  }, [filters, restaurants]);
  
    return (
        <div className={styles.ListRestaurants}>
          <div className={styles.commerceSlide}>
            {/*<Slide images={images}/>*/}
          </div>
          <div className={styles.ListRestaurants__content}>
            <div className={styles.ListRestaurants__content__filter}>
              <div className={styles.ListRestaurants__content__filter__box}>
                <SearchFilter setFilters={setFilters} filters={filters} title="Filtro"/>
              </div>
            </div>
            <div className={styles.ListRestaurants__content__list}>
              <List restaurants={filteredData}/>
            </div>
          </div>
      </div>
    );
}      
export default ListRestaurants;