import React, {useState, useEffect} from 'react';
import { Input, Button } from 'reactstrap';
import RatingStar from './RatingStar';
import { toast } from 'react-toastify';
import { getReviews, addReviews } from '../auxiliar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../styles/styles.module.scss";

const Ratings = (idR) => {
  const [ratingComment, setRatingComment] = useState('');
  const [ratingList, setRatingList] = useState([]);
  const [ratingStar, setRatingStar] = useState(0);
  const [ratingAVG, setRatingAVG] = useState(0);
  const deleteComment = (index) => {
    const newList = [...ratingList];
    newList.splice(index, 1);
    setRatingList(newList);
  };

  const sendRating = async () => {
    if (ratingStar && ratingComment) {
      setRatingList([...ratingList, { comment: ratingComment, stars: ratingStar }]);
      const token = localStorage.getItem('token');
      if(ratingComment && ratingStar && idR){
        try {
          const {data} = await addReviews(token, idR.idR, ratingComment, ratingStar);
          if (data) {
            toast.success('Review añadida correctamente');
          }
        } catch (error) {
          toast.error('Ocurrió un error al intentar añadir la review');
        }
      }
    }
    setRatingComment('');
  };


  useEffect(() => {
    const totalStars = ratingList.reduce((acc, cur) => acc + cur.stars, 0);
    const newRatingAVG = totalStars / (ratingList.length || 1);
    setRatingAVG(newRatingAVG);
  }, [ratingList]);

  useEffect(() => {
    const searchReviews = async () => {
      const token = localStorage.getItem('token');
      if(idR){
        try {
          const {data} = await getReviews(token, idR.idR);
          if (data) {
            setRatingList(data);
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
          {ratingList.map((comment, index) => (
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
