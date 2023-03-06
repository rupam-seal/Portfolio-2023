import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import styles from './A.module.css';
import { classes } from '../../utils/styles';

export const A = ({ nav = false, className, children, link }) => {
  return (
    <>
      {nav ? (
        <NavLink
          to={link}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <span className={styles.navlink}>{children}</span>
        </NavLink>
      ) : (
        <Link className={classes(styles.link, className)} to={link}>
          {children}
        </Link>
      )}
    </>
  );
};
