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
import { Icon } from '@/components/Icon';

import ImageLayer from '@/components/ImageLayer/ImageLayer';
import { ProjectDetails } from './ProjectDetails';
import { ImageDetails } from './ImageDetails';

export const Project = ({
  direction,
  value,
  projectData,
  totalProjects = '05',
  projectNo,
}) => {
  const { id, thumbnail, year, alt } = projectData;
  const path = `/projects/${id - 1}`;

  return (
    <Section
      className={styles.section}
      align="center"
      direction={direction}
      justify={'sb'}
    >
      <ImageDetails path={path} image={thumbnail} year={year} alt={alt} />
      <ProjectDetails
        projectData={projectData}
        projectNo={projectNo}
        totalProjects={totalProjects}
      />
    </Section>
  );
};

Project.displayName = 'Project';
