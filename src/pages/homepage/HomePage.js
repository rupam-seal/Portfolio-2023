import React from 'react';

import { classes } from '../../utils/styles';
import styles from './HomePage.module.css';

import { Section } from '../../components/Section';
import { Hero } from './Hero';

export const HomePage = () => {
  return (
    <Section className={classes(styles.homepage)}>
      <Hero />
    </Section>
  );
};
