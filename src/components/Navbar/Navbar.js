import React from 'react';

import Link from 'next/link';

import styles from './Navbar.module.css';
import { navVariants } from '@/utils/motion';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { navLinks } from './navData';
import { A } from '../A';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';

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
      <Container align="center" justify="center" className={styles.items}>
        {data}
        <Button
          href={'https://github.com/rupam-seal'}
          size="s"
          weight="regular"
          className={styles.button}
        >
          <Icon icon="Github" type="button" />
          Github
        </Button>
      </Container>
      <Heading level={3} weight={'bold'} className={styles.menu}>
        <Icon icon="menu" />
      </Heading>
    </Container>
  );
};
