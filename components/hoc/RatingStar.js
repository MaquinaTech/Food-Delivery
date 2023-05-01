import React, { useState } from 'react';

const Star = ({ filled, onClick }) => {
  const star = filled ? '/star.png' : '/starEmpty.png';
  return <img src={star} width={25} alt="star" onClick={onClick} />;
};

const RatingStar = (props) => {

  const handleStarClick = (index) => {
    props.setRatingStar(index + 1);
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        filled={i < props.ratingStar}
        onClick={() => handleStarClick(i)}
      />
    );
  }

  return (
    <div >
      {stars}
    </div>
  );
};

export default RatingStar;
