import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import NavLinks from './NavLinks';
import SearchBar from './SearchBar';

import { storeMovieSearchDetails } from '../store/movieSlice';

import styles from './styles/navbar.module.css';
import MobileNavLinks from './MobileNavLinks';

function Navbar() {
  const [searchText, setSearchText] = useState('');
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleKeyUp = e => {
    let code = e.keyCode || e.which;
    if (code === 13) {
      handleSearch();
    }
  };

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
        onKeyUp={handleKeyUp}
      />
      <FontAwesomeIcon
        icon={faBars}
        className={styles.hamburger}
        onClick={() => setOpenSideBar(true)}
      />
      <NavLinks />
      {openSideBar && <MobileNavLinks setOpenSideBar={setOpenSideBar} />}
    </div>
  );
}

export default Navbar;
