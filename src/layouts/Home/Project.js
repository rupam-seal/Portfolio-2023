import { Container } from '@/components/Container';
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
import { ProjectDetails } from './ProjectDetails';

export const Project = ({
  direction,
  value,
  projectData,
  totalProjects = '05',
  projectNo,
}) => {
  const { id, image, year } = projectData;
  const path = `/projects/${id - 1}`;

  return (
    <Section
      className={styles.section}
      align="center"
      direction={direction}
      justify={'sb'}
    >
      <ImageDetails path={path} image={image} year={year} />
      <ProjectDetails
        projectData={projectData}
        projectNo={projectNo}
        totalProjects={totalProjects}
      />
    </Section>
  );
};

export const ImageDetails = ({ path, image, year }) => {
  return (
    <Container variants={imageVariant()}>
      <motion.div
        id="image"
        className={styles.image}
        align="center"
        justify="center"
        initial="hidden"
        whileHover="hover"
      >
        <ImageLayer year={year} link={path} />
        <Image src={image} />
      </motion.div>
    </Container>
  );
};

Project.displayName = 'Project';
