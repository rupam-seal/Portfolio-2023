import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { textVariant } from '@/utils/motion';

import styles from './ProjectDetails.module.css';

export const ProjectDetails = ({ item, totalProjects }) => {
  return (
    <Container className={styles.details} align="center" justify="center">
      <Container direction="column">
        <Details item={item} totalProjects={totalProjects} />
        <ProjectButtons
          title1="View Project"
          title2="Live Site"
          icon1="arrowRight"
          icon2="web"
          item={item}
        />
      </Container>
    </Container>
  );
};

export const Details = ({ item, totalProjects }) => {
  const { id, title, description, status } = item;

  return (
    <>
      {totalProjects && (
        <Text
          weight="Bold"
          className={styles.no}
          variants={textVariant(0.05)}
          secondary
        >
          0{id}/{totalProjects}
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

export const ProjectButtons = ({ title1, title2, icon1, icon2, item }) => {
  return (
    <Container className={styles.buttonContainer}>
      <Button
        icon={icon1}
        href={`/projects/${item.id - 1}`}
        size="m"
        variants={textVariant(0.1)}
      >
        {title1}
      </Button>
      <div className={styles.disabledContainer}>
        <Button
          target="_blank"
          icon={icon2}
          href={item.live}
          size="m"
          className={styles.button}
          disabled={item.live === '' ? true : false}
          variants={textVariant(0.1)}
        >
          {item.live === '' ? (
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
