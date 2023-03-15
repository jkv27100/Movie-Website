import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import Modal from '../components/Modal';
import MovieCard from '../components/MovieCard';

import styles from '../styles/homepage.module.css';

function Home() {
  const [trendingMovieDetail, setTrendingMovieDetail] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const data = useSelector(state => state.movie.movieDetails);

  const PER_PAGE = 4;

  const offset = currentPage * PER_PAGE;
  const currentPageData = trendingMovieDetail.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(trendingMovieDetail.length / PER_PAGE);

  const getMoviesList = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=a6b787c772ce87f3c52f19f416912198'
    );
    const data = await response.json();
    setTrendingMovieDetail(data.results);
  };

  useEffect(() => {
    getMoviesList();
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const handleModalOpen = (e, movie) => {
    setShow(true);
    setModalData(movie);
  };

  return (
    <div className={styles.homepage_container}>
      <Modal show={show} setShow={setShow} movie={modalData} location='home' />
      <div className={styles.heading}>
        <h1>Trending Now</h1>
      </div>
      <div className={styles.home_card_container}>
        {currentPageData.map((movie, index) => (
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
    </div>
  );
}

export default Home;
