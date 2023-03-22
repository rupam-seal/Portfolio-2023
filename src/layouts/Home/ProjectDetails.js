import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import { textVariant } from '@/utils/motion';

import styles from './ProjectDetails.module.css';

export const ProjectDetails = ({ projectData, totalProjects, projectNo }) => {
  const { id, live, source } = projectData;

  const path = `/projects/${id - 1}`;
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
          title2={live === '' ? 'Github' : 'Live Site'}
          icon1="arrowRight"
          icon2={live === '' ? 'Github' : 'web'}
          href1={path}
          href2={live === '' ? source : live}
          disabled={false}
          tooltip={false}
          target2='"_blank"'
          projectData={projectData}
          animation1={'rotate'}
          animation2={'bounce'}
        ></ProjectButtons>
      </Container>
    </Section>
  );
};

export const Details = ({ projectData, projectNo, totalProjects }) => {
  const PROJECT_NO = projectNo + 1;
  const { id, title, description, status } = projectData;

  return (
    <Container className={styles.details} direction="column">
      {totalProjects && (
        <Text
          weight="Bold"
          className={styles.projectNo}
          variants={textVariant(0.1)}
          secondary
        >
          0{PROJECT_NO}/{totalProjects}
        </Text>
      )}
      <Heading
        level={3}
        className={styles.title}
        weight="medium"
        variants={textVariant(0.15)}
      >
        {title}
      </Heading>
      <Text
        variants={textVariant(0.2)}
        className={styles.description}
        secondary
        weight="regular"
        size="m"
      >
        {description}
      </Text>
      <Text className={styles.status} variants={textVariant(0.25)}>
        {status}
      </Text>
    </Container>
  );
};

export const ProjectButtons = ({
  title1,
  title2,
  icon1,
  icon2,
  projectData,
  live,
  href1,
  href2,
  target1,
  target2,
  tooltip,
  disabled,
  animation1,
  animation2,
}) => {
  return (
    <div className={styles.buttons}>
      <Button
        target={target1}
        icon={icon1}
        href={href1}
        size="m"
        variants={textVariant(0.25)}
        animation={animation1}
      >
        {title1}
      </Button>
      <div className={styles.disabled}>
        <Button
          target={target2}
          icon={icon2}
          href={href2}
          size="m"
          className={styles.button}
          disabled={disabled}
          variants={textVariant(0.35)}
          animation={animation2}
        >
          {tooltip ? (
            <div className={styles.tooltip}>work in progress</div>
          ) : (
            ''
          )}
          {title2}
        </Button>
      </div>
    </div>
  );
};
