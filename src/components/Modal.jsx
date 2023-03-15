import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { storeFavMovie, removeFavMovie } from '../store/favoriteSlice';

import styles from './styles/modal.module.css';

const content = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  transform: 'translate(-50%, -50%)',
  padding: 0,
  borderRadius: '10px',
  boxShadow: 'rgba(182, 176, 176, 0.35) 0px 5px 15px',
};

function Modal({ show, setShow, movie, location }) {
  const dispath = useDispatch();

  const handleAddFav = () => {
    dispath(storeFavMovie(movie));
    setShow(false);
  };

  const handleRemoveFav = () => {
    dispath(removeFavMovie(movie));
    setShow(false);
  };
  return (
    <ReactModal
      isOpen={show}
      onAfterOpen={() => {}}
      onRequestClose={() => setShow(false)}
      style={{
        content,
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
      }}
      ariaHideApp={false}
    >
      <div className={styles.modal_content}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=''
          className={styles.modal_bg_img}
        />
        <div className={styles.overlay}>
          <div className={styles.top_section}>
            <button
              className={styles.fav_btn}
              onClick={location === 'fav' ? handleRemoveFav : handleAddFav}
            >
              {location === 'home' ? 'Add To Favorite' : 'Remove From Favorite'}
            </button>

            <FontAwesomeIcon
              icon={faXmark}
              className={styles.close_btn}
              onClick={() => setShow(false)}
            />
          </div>
          <div className={styles.movie_details}>
            <h1>{movie.title}</h1>
            <div className={styles.movie_tag}>
              <span className={styles.lang}>{movie.original_language}</span>
              <span className={styles.movie_rating}>★</span>
              <span className={styles.voting}>
                {Math.round(movie.vote_average)} | {movie.vote_count}
              </span>
              <span className={styles.movie_year}>
                &#183; {movie.release_date ? movie.release_date : null}
              </span>
            </div>
            <p className={styles.movie_description}>{movie.overview}</p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

export default Modal;
