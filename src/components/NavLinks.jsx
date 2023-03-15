import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './styles/navbar.module.css';

function NavLinks() {
  const { pathname } = useLocation();

  return (
    <div className={styles.navlink_container}>
      <NavLink to='/' className={pathname === '/' ? styles.navbar_link_active : styles.navbar_link}>
        Home
      </NavLink>
      <NavLink
        to='/favorite'
        className={pathname === '/favorite' ? styles.navbar_link_active : styles.navbar_link}
      >
        Favorite
      </NavLink>
    </div>
  );
}

export default NavLinks;
