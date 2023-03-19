import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import { textVariant } from '@/utils/motion';

import styles from './ProjectDetails.module.css';

export const ProjectDetails = ({ projectData, totalProjects, projectNo }) => {
  return (
    <Section className={styles.section} align="center" justify="center">
      <Container direction="column">
        <Details
          projectData={projectData}
          projectNo={projectNo}
          totalProjects={totalProjects}
        />
        <ProjectButtons
          title1="View Project"
          title2="Live Site"
          icon1="arrowRight"
          icon2="web"
          projectData={projectData}
          animation1={'rotate'}
          animation2={'bounce'}
        />
      </Container>
    </Section>
  );
};

export const Details = ({ projectData, projectNo, totalProjects }) => {
  const PROJECT_NO = projectNo + 1;
  const { id, title, description, status } = projectData;

  return (
    <>
      {totalProjects && (
        <Text
          weight="Bold"
          className={styles.projectNo}
          variants={textVariant(0.05)}
          secondary
        >
          0{PROJECT_NO}/{totalProjects}
        </Text>
      )}
      <Heading
        level={3}
        className={styles.title}
        weight="medium"
        variants={textVariant(0)}
      >
        {title}
      </Heading>
      <Text
        variants={textVariant(0.1)}
        className={styles.description}
        secondary
        weight="regular"
        size="m"
      >
        {description}
      </Text>
      <Text className={styles.status} variants={textVariant(0.2)}>
        {status}
      </Text>
    </>
  );
};

export const ProjectButtons = ({
  title1,
  title2,
  icon1,
  icon2,
  projectData,
  animation1,
  animation2,
}) => {
  const { id, live } = projectData;
  return (
    <Container className={styles.buttons}>
      <Button
        icon={icon1}
        href={`/projects/${id - 1}`}
        size="m"
        variants={textVariant(0.1)}
        animation={animation1}
      >
        {title1}
      </Button>
      <div className={styles.disabled}>
        <Button
          target="_blank"
          icon={icon2}
          href={live}
          size="m"
          className={styles.button}
          disabled={live === '' ? true : false}
          variants={textVariant(0.1)}
          animation={animation2}
        >
          {live === '' ? (
            <div className={styles.tooltip}>work in progress</div>
          ) : (
            ''
          )}
          {title2}
        </Button>
      </div>
    </Container>
  );
};
