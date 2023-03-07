import React from 'react';

import { classes } from '../../utils/styles';
import styles from './Home.module.css';

import { Section } from '../../components/Section';
import { Hero } from './Hero';

export const Home = () => {
  return (
    <Section className={classes(styles.homepage)}>
      <Hero />
    </Section>
  );
};
