import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import NavLinks from '../components/NavLinks';
import SearchBar from '../components/SearchBar';

import { storeMovieSearchDetails } from '../store/movieSlice';

import styles from '../styles/navbar.module.css';

function Navbar() {
  const [searchText, setSearchText] = useState('');

  const dispath = useDispatch();

  const handleTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleSearch = async () => {
    if (searchText.length > 3) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=a6b787c772ce87f3c52f19f416912198&query=${searchText}`
      );
      const data = await response.json();
      dispath(storeMovieSearchDetails(data.results));
    }
  };

  return (
    <div className={styles.navbar_container}>
      <SearchBar
        header={'Movie.to'}
        placeholder={'Search Movie...'}
        value={searchText}
        onChange={handleTextChange}
        handleSearch={handleSearch}
      />
      <NavLinks />
    </div>
  );
}

export default Navbar;
