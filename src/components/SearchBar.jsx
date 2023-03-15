import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/navbar.module.css';

function SearchBar({ onChange, placeholder, header, value, handleSearch }) {
  return (
    <div className={styles.nav_header_container}>
      <h1 className={styles.site_name}>{header}</h1>
      <div className={styles.searchbar_container}>
        <input
          className={styles.searchbar_input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <FontAwesomeIcon icon={faSearch} className={styles.search_icon} onClick={handleSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
