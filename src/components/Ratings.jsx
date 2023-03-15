import React from 'react';
import './style.css';

function Ratings({ rating }) {
  const roundedRating = Math.round(rating) * 10;
  return (
    <div className='star-ratings'>
      <div className='fill-ratings' style={{ width: `${roundedRating}` }}>
        <span className='rating'>★★★★★</span>
      </div>
      <div className='empty-ratings'>
        <span className='rating'>★★★★★</span>
      </div>
    </div>
  );
}

export default Ratings;
