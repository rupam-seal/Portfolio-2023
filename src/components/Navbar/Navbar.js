import React, { useEffect } from 'react';
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
import { useToggle } from '@/hooks/useToggle';
import { Menu } from './Menu';

export const Navbar = () => {
  const lightTheme = 'light';
  const darkTheme = 'dark';

  const { status: expand, toggleStatus: toggleExpand } = useToggle();
  const { status: theme, toggleStatus: toggleTheme } = useToggle();

  useEffect(() => {
    document.body.classList.add(lightTheme);
    theme
      ? document.body.classList.replace(lightTheme, darkTheme)
      : document.body.classList.replace(darkTheme, lightTheme);
  }, [theme]);

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
    <>
      <motion.header
        initial="hidden"
        animate="show"
        variants={navVariants}
        className={styles.header}
      >
        <Container align="center" className={styles.logo}>
          <Link className={styles.logoText} href="/">
            <Heading level={4} weight={'bold'}>
              NX
            </Heading>
          </Link>
        </Container>

        <Container
          className={styles.rightContainer}
          align="center"
          justify="center"
        >
          <Container className={styles.buttonContainer}>
            <Text
              size="s"
              weight="bold"
              className={styles.themeContainer}
              onClick={toggleTheme}
            >
              {theme ? (
                <Icon icon="night" className={styles.menuIcon} />
              ) : (
                <Icon icon="day" className={styles.menuIcon} />
              )}
            </Text>

            <Text
              size="s"
              weight="bold"
              className={styles.toggleContainer}
              onClick={toggleExpand}
            >
              <Icon icon="menu" className={styles.menuIcon} />
            </Text>
          </Container>

          <Container align="center" justify="center" className={styles.menu}>
            {data}
            <Button
              href={'/hire'}
              size="s"
              weight="regular"
              align="center"
              className={styles.button}
            >
              <span className={styles.buttonText}>
                <Icon icon="leftCircle" /> hire me
              </span>
            </Button>
          </Container>
        </Container>
      </motion.header>
      <Menu expand={expand} toggleExpand={toggleExpand} />
    </>
  );
};
