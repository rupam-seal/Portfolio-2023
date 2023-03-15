import React from 'react';
import Link from 'next/link';

import { navVariants } from '@/utils/motion';

import styles from './Navbar.module.css';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { navLinks } from './navData';
import { A } from '../A';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const data = navLinks.map(({ label, pathname, target }, index) => {
    return (
      <A
        className={styles.navlink}
        link={pathname}
        key={index}
        nav={true}
        target={target}
      >
        {label}
      </A>
    );
  });

  return (
    <motion.div
      className={styles.navbar}
      initial="hidden"
      animate="show"
      variants={navVariants}
    >
      <Container align="center">
        <Link className={styles.logo} href="/">
          <Heading level={4} weight={'bold'}>
            NX
          </Heading>
        </Link>
      </Container>

      <Container align="center" justify="center" className={styles.items}>
        {data}
        <Button
          href={'/hire'}
          size="s"
          weight="Bold"
          align="center"
          className={styles.button}
        >
          <span className={styles.buttonText}>
            <Icon icon="leftCircle" /> hire me
          </span>
        </Button>
      </Container>
      <Heading level={3} weight={'bold'} className={styles.menu}>
        <Icon icon="menu" />
      </Heading>
    </motion.div>
  );
};
