import React from 'react';

import Link from 'next/link';

import styles from './Navbar.module.css';
import { navVariants } from '@/utils/motion';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { navLinks } from './navData';
import { A } from '../A';
import { Button } from '../Button';

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
      variants={navVariants}
      zIndex={5}
    >
      <Container align="center">
        <A nav link="/">
          <Heading level={4} weight={'bold'}>
            NX
          </Heading>
        </A>
      </Container>
      <Container align="center" justify="center">
        {data}
        <Button href={'/'} size="s" weight="regular" className={styles.button}>
          hello@nilax.in
        </Button>
      </Container>
    </Container>
  );
};
