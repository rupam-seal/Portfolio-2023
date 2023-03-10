import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Image } from '@/components/Image';
import { Section } from '@/components/Section';
import { staggerContainer, textVariant } from '@/utils/motion';
import { classes } from '@/utils/styles';
import { projects } from '../../../data/projects';
import { Project } from './Project';

import styles from './ProjectsSummery.module.css';

export const ProjectsSummery = () => {
  const project = projects.map((project, index) => {
    return (
      <>
        {index % 2 === 0 ? (
          <Project item={project} />
        ) : (
          <Project item={project} direction="reverse" />
        )}
      </>
    );
  });

  return (
    <Section
      direction={'column'}
      className={styles.summary}
      align={'center'}
      justify={'center'}
    >
      <Container
        align="center"
        direction={'column'}
        variants={staggerContainer(0.4, 0.4)}
      >
        <Heading level={1} weight="bold" variants={textVariant(0.1)}>
          FEATURED
        </Heading>
        <Heading level={1} weight="bold" variants={textVariant(0)}>
          WORKS
        </Heading>
      </Container>
      {project}
    </Section>
  );
};
