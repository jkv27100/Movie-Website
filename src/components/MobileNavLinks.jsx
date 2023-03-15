import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './styles/mobile_navbar.module.css';

function MobileNavLinks({ setOpenSideBar }) {
  const { pathname } = useLocation();
  return (
    <div className={styles.mobile_nav_container}>
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.close_btn}
        onClick={() => setOpenSideBar(false)}
      />
      <div className={styles.nav_link_container}>
        <NavLink
          onClick={() => setOpenSideBar(false)}
          to='/'
          className={pathname === '/' ? styles.navbar_link_active : styles.navbar_link}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setOpenSideBar(false)}
          to='/favorite'
          className={pathname === '/favorite' ? styles.navbar_link_active : styles.navbar_link}
        >
          Favorite
        </NavLink>
      </div>
    </div>
  );
}

export default MobileNavLinks;
