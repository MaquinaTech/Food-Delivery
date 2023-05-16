import React, {useState, useEffect} from 'react';
import { Input, Button } from 'reactstrap';
import RatingStar from './RatingStar';
import { toast } from 'react-toastify';
import { getReviews, addReviews, deleteReviews } from '../auxiliar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../styles/styles.module.scss";

const Ratings = (idR) => {
  const [ratingComment, setRatingComment] = useState('');
  const [ratingList, setRatingList] = useState([]);
  const [ratingStar, setRatingStar] = useState(0);
  const [ratingAVG, setRatingAVG] = useState(0);
  const deleteComment = async (index) => {
    const token = localStorage.getItem('token');
    if(idR){
      try {
        const {data} = await deleteReviews(token, idR.idR);
        if (data) {
          toast.success('Review eliminada correctamente');
          const newList = [...ratingList];
          newList.splice(index, 1);
          setRatingList(newList);
        }
      } catch (error) {
        toast.error('Ocurrió un error al añadir tu review');
      }
    }

  };

  const sendRating = async () => {
    if (ratingStar && ratingComment) {
      
      const token = localStorage.getItem('token');
      if(ratingList && ratingComment && ratingStar && idR){
        try {
          const {data} = await addReviews(token, idR.idR, ratingComment, ratingStar);
          if (data) {
            toast.success('Review añadida correctamente');
            setRatingList([...ratingList, { comment: ratingComment, stars: ratingStar }]);
          }
          else{
            toast.error('Sólo podrás añadir una review por restaurante');
          }
        } catch (error) {
          toast.error('Ocurrió un error al añadir tu review');
        }
      }
    }
    setRatingComment('');
  };


  useEffect(() => {
    if(ratingList && ratingList.length > 0){
      const totalStars = ratingList.reduce((acc, cur) => acc + cur.stars, 0);
      const newRatingAVG = totalStars / (ratingList.length || 1);
      setRatingAVG(newRatingAVG);
    }
  }, [ratingList]);

  useEffect(() => {
    const searchReviews = async () => {
      const token = localStorage.getItem('token');
      if(idR){
        try {
          const {data} = await getReviews(token, idR.idR);
          if (data) {
            setRatingList();
            setRatingList([{ comment: data[0].review, stars: data[0].grade }]);
          }
        } catch (error) {
          toast.error('Ocurrió un error al intentar actualizar las reviews');
        }
      }
    };
    searchReviews();
  }, [idR]);
  return (
    <div className={styles.EditRestaurants__ratings}>
      <div className={styles.EditRestaurants__ratings__title}>
        <span>Puntuación media: {ratingAVG.toFixed(2)}</span>
      </div>
      <div className={styles.EditRestaurants__ratings__list}>
        <ul>
          {ratingList && ratingList.map((comment, index) => (
            <li key={index}>
              <div className={styles.EditRestaurants__ratings__list__item}>
                {comment.comment}
                {<RatingStar setRatingStar={setRatingStar} ratingStar={comment.stars} />}
              </div>
              <button type="button" onClick={() => { deleteComment(index) }}>
                <img width={20} src="/remove.png" alt="deleteComment" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.EditRestaurants__ratings__comment__stars}>
        <RatingStar setRatingStar={setRatingStar} ratingStar={ratingStar} />
      </div>
      <div className={styles.EditRestaurants__ratings__comment}>
        <Input type="textarea" value={ratingComment} onChange={(e) => setRatingComment(e.target.value)} />
        <Button type="submit" color="success" onClick={sendRating}>
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default Ratings;
