import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Empty from '../components/Empty';
import Modal from '../components/Modal';

import MovieCard from '../components/MovieCard';

import styles from './styles/favoritepage.module.css';

function Favorite() {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const favMovies = useSelector(state => state.favorite.movieDetails);

  const handleModalOpen = (e, movie) => {
    setShow(true);
    setModalData(movie);
  };

  return (
    <div className={styles.favpage_container}>
      {favMovies.length === 0 ? (
        <Empty message={'Please add Favorite Movies ❤️'} />
      ) : (
        <>
          <Modal show={show} setShow={setShow} movie={modalData} location='fav' />
          <div className={styles.heading}>
            <h1>Your Favorites</h1>
          </div>
          <div className={styles.fav_card_container}>
            {favMovies.map((movie, index) => (
              <MovieCard
                onClick={e => handleModalOpen(e, movie)}
                key={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                rating={movie.vote_average}
                language={movie.original_language}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favorite;
