import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';

import Empty from '../components/Empty';
import Modal from '../components/Modal';

import MovieCard from '../components/MovieCard';

import styles from '../styles/homepage.module.css';

function Favorite() {
  const PER_PAGE = 4;

  // const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const favMovies = useSelector(state => state.favorite.movieDetails);

  // let offset = 0;
  // let currentPageData = [];
  // let pageCount = 0;

  // if (favMovies.length > 4) {
  //   offset = currentPage * PER_PAGE;
  //   currentPageData = favMovies.slice(offset, offset + PER_PAGE);
  //   pageCount = Math.ceil(favMovies.length / PER_PAGE);
  // }

  // console.log(currentPageData);

  // function handlePageClick({ selected: selectedPage }) {
  //   setCurrentPage(selectedPage);
  // }

  const handleModalOpen = (e, movie) => {
    setShow(true);
    setModalData(movie);
  };

  return (
    <div className={styles.homepage_container}>
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

          {/* {favMovies.length > 4 ? (
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              pageCount={pageCount}
              breakLabel={'...'}
              onPageChange={handlePageClick}
              containerClassName={styles.pagination_container}
              previousLinkClassName={styles.prev_link}
              nextLinkClassName={styles.next_link}
              activeClassName={styles.active_page}
            />
          ) : null} */}
        </>
      )}
    </div>
  );
}

export default Favorite;
