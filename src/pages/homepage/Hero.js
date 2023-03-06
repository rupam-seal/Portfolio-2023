import React from 'react';

import { classes } from '../../utils/styles';
import styles from './Hero.module.css';

import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { DecoderText } from '../../components/DecoderText';
import { Section } from '../../components/Section';

import { staggerContainer, textVariant } from '../../utils/motion';

import Spline from '@splinetool/react-spline';

export const Hero = () => {
  return (
    <Section
      className={classes(styles.section)}
      fullscreen={true}
      align={'center'}
      justify={'center'}
    >
      <Container
        className={classes(styles.intro)}
        direction="column"
        variants={staggerContainer(0.4, 0.4)}
        zIndex={1}
      >
        <h1 className={styles.name}>
          <DecoderText text="Nilax Seal" delay={1000}></DecoderText>
        </h1>
        <Heading
          level={1}
          className={styles.title}
          align="center"
          weight="bold"
          variants={textVariant(0.2)}
        >
          ANDROID/
        </Heading>
        <Heading
          level={1}
          className={styles.title}
          align="center"
          weight="bold"
          variants={textVariant(0.2)}
        >
          WEB DEVELOPER
        </Heading>

        <Text
          size="m"
          weight="regular"
          align="center"
          variants={textVariant(0)}
          className={styles.description}
        >
          NilaX — Graphic / UI-UX / Web Designer freelance located in India,
          specializing in the creation of visual identity and unique and
          innovative web designs.
        </Text>
      </Container>
      <Container className={styles.blob} zIndex={0}>
        <Spline scene="https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode" />
      </Container>
    </Section>
  );
};
