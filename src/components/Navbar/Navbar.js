import React from 'react';

import styles from './Navbar.module.css';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { navLinks } from './navData';
import { A } from '../A';
import { NavLink } from 'react-router-dom';

import { navVariants } from '../../utils/motion';

export const Navbar = () => {
  const data = navLinks.map(({ label, pathname }, index) => {
    return (
      <A className={styles.navlink} link={pathname} key={index} nav={true}>
        {label}
      </A>
    );
  });

  return (
    <Container
      className={styles.navbar}
      justify="sb"
      align="center"
      zIndex={5}
      variants={navVariants}
    >
      <Container align="center">
        <NavLink>
          <Heading level={4} weight={'bold'}>
            NX
          </Heading>
        </NavLink>
      </Container>
      <Container align="center">{data}</Container>
    </Container>
  );
};
