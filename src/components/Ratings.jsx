import React from 'react';
import styles from './styles/ratings.module.css';

function Ratings({ rating }) {
  const roundedRating = Math.round(rating) * 10;
  return (
    <div className={styles.star_ratings}>
      <div className={styles.fill_ratings} style={{ width: `${roundedRating}%` }}>
        <span className={styles.rating}>★★★★★</span>
      </div>
      <div className={styles.empty_ratings}>
        <span className={styles.rating}>★★★★★</span>
      </div>
    </div>
  );
}

export default Ratings;
