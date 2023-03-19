import React, { memo } from 'react';

import { classes } from '../../utils/styles';
import styles from './Hero.module.css';

import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { Section } from '../../components/Section';
import { A } from '../../components/A';

import {
  scaleVariant,
  staggerContainer,
  textVariant,
} from '../../utils/motion';

import { SectionBottom } from '../../components/SectionBottom';
import { Icon } from '@/components/Icon';
import { Blob } from '@/components/Blob';
import { Social } from '@/components/Social';

export const Hero = memo(({ sectionRef }) => {
  return (
    <Section
      className={classes(styles.section)}
      fullscreen={true}
      align={'center'}
      justify={'center'}
      ref={sectionRef}
    >
      <Intro />
      <Blob />
      <Bottom />
    </Section>
  );
});

export const Intro = () => {
  return (
    <Container
      className={classes(styles.intro)}
      direction="column"
      z={2}
      animate="show"
    >
      <Text
        size="m"
        align="center"
        weight="medium"
        className={styles.name}
        variants={textVariant(0.4)}
      >
        NILAX SEAL
      </Text>
      <Heading
        level={0}
        className={styles.title1}
        align="center"
        weight="medium"
        variants={textVariant(0.2)}
      >
        ANDROID<span className={styles.line}>/</span>
      </Heading>
      <Heading
        level={0}
        className={styles.title2}
        align="center"
        weight="medium"
        variants={textVariant(0.2)}
      >
        WEB DEVELOPER
      </Heading>

      <Text
        size="m"
        weight="medium"
        align="center"
        variants={textVariant(0)}
        className={styles.description}
        secondary
      >
        NilaX — Android / UI-UX / Web Developer freelance located in India,
        specializing in the creation of modern and user freindly and unique
        android and web designs.
      </Text>
    </Container>
  );
};

export const Bottom = () => {
  return (
    <SectionBottom className={styles.bottom}>
      <Container
        direction={'column'}
        variants={scaleVariant}
        className={styles.social}
      >
        <Social level={4} />
      </Container>

      <Container align="center" variants={textVariant(0.6)}>
        <Container className={styles.arrow}></Container>
        <Container direction={'column'} className={styles.keepScrolling}>
          <Text weight="regular" size="s">
            Keep —
          </Text>
          <Text weight="regular" size="s">
            Scrolling
          </Text>
        </Container>
      </Container>

      <Container direction={'column'} variants={scaleVariant}>
        <Text weight="regular" size="s" align="start">
          Available for work
        </Text>
        <Text
          className={styles.letsTalk}
          weight="medium"
          size="s"
          align="start"
        >
          <A icon="leftCircle" link="/contact">
            Lets talk
          </A>
        </Text>
      </Container>
    </SectionBottom>
  );
};

Hero.displayName = 'Hero';
