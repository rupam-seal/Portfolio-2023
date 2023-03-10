import React from 'react';

import { classes } from '../../utils/styles';
import styles from './Home.module.css';

import { Section } from '../../components/Section';
import { Hero } from './Hero';
import { ProjectsSummery } from './ProjectsSummery';
import { Skills } from './Skills';
import { About } from './About';

export const Home = () => {
  return (
    <Section className={classes(styles.section)} direction={'column'}>
      <Hero />
      <ProjectsSummery />
      <About />
      <Skills />
    </Section>
  );
};
