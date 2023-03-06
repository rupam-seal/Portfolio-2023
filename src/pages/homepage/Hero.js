import React, { Fragment } from 'react';

import { classes } from '../../utils/styles';
import styles from './Hero.module.css';

import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { DecoderText } from '../../components/DecoderText';
import { Section } from '../../components/Section';
import { VisuallyHidden } from '../../components/VisuallyHidden';

import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';

import Spline from '@splinetool/react-spline';

export const Hero = () => {
  return (
    <Section
      className={classes(styles.section)}
      fullscreen={true}
      align={'center'}
      justify={'center'}
    >
      <Container className={classes(styles.intro)} direction="column">
        <motion.h1 className={styles.name} variants={textVariant}>
          <DecoderText text="Nilax Seal" delay={300}></DecoderText>
        </motion.h1>
        <Heading
          level={1}
          className={styles.title}
          align="center"
          weight="bold"
        >
          ANDROID/
        </Heading>
        <Heading
          level={1}
          className={styles.title}
          align="center"
          weight="bold"
        >
          WEB DEVELOPER
        </Heading>

        <Text
          size="m"
          weight="regular"
          align="center"
          className={styles.description}
        >
          NilaX — Graphic / UI-UX / Web Designer freelance located in India,
          specializing in the creation of visual identity and unique and
          innovative web designs.
        </Text>
      </Container>
      <Container className={styles.blob}>
        <Spline scene="https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode" />
      </Container>
    </Section>
  );
};
