import { Container } from '@/components/Container';
import { DecoderText } from '@/components/DecoderText';
import { Heading } from '@/components/Heading';
import { Image } from '@/components/Image';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';

import {
  divVariants,
  hoverVariants,
  hoverVariants2,
  imageVariant,
  layerVariants,
  staggerContainer,
  textVariant,
} from '@/utils/motion';
import { classes } from '@/utils/styles';

import styles from './Project.module.css';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { List } from '@/components/List';
import { Icon } from '@/components/Icon';

import ImageLayer from '@/components/ImageLayer/ImageLayer';

export const Project = ({ direction, value, item }) => {
  return (
    <Section
      className={styles.project}
      align="center"
      direction={direction}
      justify={'sb'}
    >
      <Container variants={imageVariant()}>
        <motion.div
          id="image"
          className={styles.image}
          align="center"
          justify="center"
          initial="hidden"
          whileHover="hover"
        >
          <ImageLayer year={item.year} />
          <Image src={item.image} href="/" />
        </motion.div>
      </Container>
      <Container className={styles.details} align="center" justify="center">
        <Container direction="column">
          <Text
            weight="Bold"
            className={styles.no}
            variants={textVariant(0.05)}
            secondary
          >
            0{item.id}/05
          </Text>
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

Project.displayName = 'Project';
