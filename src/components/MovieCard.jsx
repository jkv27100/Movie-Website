import React from 'react';

import Ratings from './Ratings';

import styles from '../styles/homepage.module.css';

function MovieCard({ title, rating, posterPath, language, onClick }) {
  return (
    <div className={styles.moviecard_container} onClick={onClick}>
      {posterPath ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          alt=''
          className={styles.card_img}
        />
      ) : null}
      {title ? <p className={styles.movie_title}>{title}</p> : null}
      <Ratings rating={rating} />
      <p className={styles.movie_lang}>{language}</p>
    </div>
  );
}

export default MovieCard;
