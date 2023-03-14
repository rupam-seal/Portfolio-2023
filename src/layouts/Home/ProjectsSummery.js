import styles from './ProjectsSummery.module.css';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Image } from '@/components/Image';
import { Section } from '@/components/Section';
import { staggerContainer, textVariant } from '@/utils/motion';
import { classes } from '@/utils/styles';
import { projects } from '../../../data/projects';
import { Project } from './Project';
import { memo } from 'react';

export const ProjectsSummery = memo(({ visible, sectionRef }) => {
  const project = projects
    .slice(0, 5)
    .map((project, index) => (
      <Container key={index}>
        {index % 2 === 0 ? (
          <Project item={project} value="-" />
        ) : (
          <Project item={project} value="" direction="reverse" />
        )}
      </Container>
    ));

  return (
    <Section
      direction={'column'}
      className={styles.summary}
      align={'center'}
      justify={'center'}
      ref={sectionRef}
    >
      {visible && (
        <>
          <Container align="center" direction={'column'}>
            <Heading level={1} weight="bold" variants={textVariant(0.3)}>
              FEATURED
            </Heading>
            <Heading level={1} weight="bold" variants={textVariant(0.1)}>
              WORKS
            </Heading>
          </Container>
          {project}
        </>
      )}
    </Section>
  );
});

ProjectsSummery.displayName = 'ProjectsSummery';
