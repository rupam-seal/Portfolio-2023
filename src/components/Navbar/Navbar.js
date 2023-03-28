import React, { useEffect } from 'react';
import Link from 'next/link';

import {
  closeVariants,
  navVariants,
  opacityVariants,
  themeVariants,
} from '@/utils/motion';

import styles from './Navbar.module.css';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { navLinks } from '../../../data/navData';
import { A } from '../A';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { motion } from 'framer-motion';
import { useToggle } from '@/hooks/useToggle';
import { Menu } from './Menu';
import { ToggleButton } from '../ToggleButton';
import { Logo } from '../Logo';

export const Navbar = () => {
  const lightTheme = 'light';
  const darkTheme = 'dark';

  const { status: expand, toggleStatus: toggleExpand } = useToggle();
  const { status: theme, toggleStatus: toggleTheme } = useToggle();

  useEffect(() => {
    document.body.classList.add(darkTheme);
    theme
      ? document.body.classList.replace(darkTheme, lightTheme)
      : document.body.classList.replace(lightTheme, darkTheme);
  }, [theme]);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="show"
        variants={navVariants}
        className={styles.header}
      >
        <Logo />

        <Container
          className={styles.rightContainer}
          align="center"
          justify="center"
        >
          <ToggleButtons
            theme={theme}
            expand={expand}
            toggleExpand={toggleExpand}
            toggleTheme={toggleTheme}
          />

          <div className={styles.menu}>
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
          </div>
        </Container>
      </motion.header>
      <Menu expand={expand} toggleExpand={toggleExpand} />
    </>
  );
};

export const data = navLinks.map(({ label, pathname, target }, index) => {
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

export const ToggleButtons = ({ theme, expand, toggleTheme, toggleExpand }) => {
  return (
    <Container align="center" className={styles.buttonContainer}>
      <ToggleButton
        icon={theme ? 'night' : 'day'}
        toggleStatus={toggleTheme}
        visibility="all"
        variants={themeVariants}
      />

      <ToggleButton
        icon={expand ? 'close' : 'menu'}
        toggleStatus={toggleExpand}
        visibility="mobile"
        variants={closeVariants(expand ? 180 : -180)}
      />
    </Container>
  );
};
