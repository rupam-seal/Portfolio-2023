import { Container } from '@/components/Container';
import { DecoderText } from '@/components/DecoderText';
import { Heading } from '@/components/Heading';
import { Image } from '@/components/Image';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';

import {
  hoverVariants,
  imageVariant,
  staggerContainer,
  textVariant,
} from '@/utils/motion';
import { classes } from '@/utils/styles';

import styles from './Project.module.css';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { List } from '@/components/List';

export const Project = ({ direction, value, item }) => {
  return (
    <Section
      className={styles.project}
      align="center"
      direction={direction}
      justify={'sb'}
    >
      <motion.div
        id="image"
        className={styles.image}
        align="center"
        justify="center"
        initial="hidden"
        whileHover="hover"
      >
        <Image src={item.image} href="/" variants={imageVariant(value)} />
      </motion.div>
      <Container className={styles.details} align="center" justify="center">
        <Container direction="column">
          <Heading
            level={3}
            className={styles.title}
            weight="medium"
            variants={textVariant(0)}
          >
            {item.title}
          </Heading>
          <Text
            variants={textVariant(0.1)}
            className={styles.description}
            secondary
            weight="regular"
            size="m"
          >
            {item.description}
          </Text>
          <Text className={styles.status} variants={textVariant(0.2)}>
            {item.status}
          </Text>
          {/* {!!item.tags?.length && (
            <List items={item.tags} className={styles.items} />
          )} */}
          <Container className={styles.buttonContainer}>
            <Button
              icon="arrowRight"
              href={`/projects/${item.id - 1}`}
              size="m"
              variants={textVariant(0.1)}
            >
              View Project
            </Button>
            <Button
              icon="web"
              href={`/projects/${item.id - 1}`}
              size="m"
              variants={textVariant(0.1)}
            >
              Live Site
            </Button>
          </Container>
        </Container>
      </Container>
    </Section>
  );
};
