import React from 'react';

import styles from './A.module.css';
import { classes } from '../../utils/styles';
import Link from 'next/link';
// import { NavLink } from 'react-router-dom';

export const A = ({ nav = false, className, children, link, secondary }) => {
  return (
    <>
      {nav ? (
        // <NavLink
        //   to={link}
        //   className={({ isActive }) =>
        //     isActive ? styles.active : styles.inactive
        //   }
        // >
        //   <span className={styles.navlink}>{children}</span>
        // </NavLink>
        ''
      ) : (
        <Link
          className={classes(styles.link, className)}
          href={link}
          data-secondary={secondary}
        >
          {children}
        </Link>
      )}
    </>
  );
};
