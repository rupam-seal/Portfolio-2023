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
  return (
    <Section
      direction={'column'}
      className={styles.section}
      align={'center'}
      justify={'center'}
      ref={sectionRef}
    >
      {visible && (
        <>
          <Title />
          <ProjectsData />
        </>
      )}
    </Section>
  );
});

export const Title = () => {
  return (
    <Container align="center" direction={'column'}>
      <Heading level={1} weight="Bold" variants={textVariant(0.3)}>
        FEATURED
      </Heading>
      <Heading level={1} weight="Bold" variants={textVariant(0.1)}>
        WORKS
      </Heading>
    </Container>
  );
};

export const ProjectsData = () => {
  // Only show 5 projects that have a featured image
  const projectsData = projects.slice(0, 5).map((project, index) => {
    return (
      <Container key={index}>
        {index % 2 === 0 ? (
          <Project projectData={project} projectNo={index} value="-" />
        ) : (
          <Project
            projectData={project}
            projectNo={index}
            value=""
            direction="reverse"
          />
        )}
      </Container>
    );
  });

  return projectsData;
};

ProjectsSummery.displayName = 'ProjectsSummery';
