import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';

import { storeFavMovie, removeFavMovie } from '../store/favoriteSlice';

import './style.css';

const content = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  transform: 'translate(-50%, -50%)',
  padding: 0,
  borderRadius: '20px',
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
      <div className='modal_content'>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=''
          className='modal_bg_img'
        />
        <div className='overlay'>
          <div className='top_section'>
            <button
              className='fav_btn'
              onClick={location === 'fav' ? handleRemoveFav : handleAddFav}
            >
              {location === 'home' ? 'Add To Favorite' : 'Remove From Favorite'}
            </button>
            <button className='close_btn' onClick={() => setShow(false)}>
              Close
            </button>
          </div>
          <div className='movie_details'>
            <h1>{movie.title}</h1>
            <div className='movie_tag'>
              <span className='lang'>{movie.original_language}</span>
              <span className='movie_rating'>★</span>
              <span className='voting'>
                {Math.round(movie.vote_average)} | {movie.vote_count}
              </span>
              <span className='movie_year'>&#183; 2013</span>
            </div>
            <p className='movie_description'>{movie.overview}</p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

export default Modal;
