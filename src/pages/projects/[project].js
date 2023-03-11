import { useRouter } from 'next/router';
import styles from './project.module.css';

import { Section } from '../../components/Section';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { Image } from '../../components/Image';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { List } from '../../components/List';
import { projects } from '../../../data/projects';
import { scaleVariant, textVariant } from '@/utils/motion';

const Project = () => {
  const router = useRouter();
  const { project } = router.query;

  const item = projects[project];

  console.log(project);

  return (
    <>
      {item && (
        <Section className={styles.section} direction={'column'}>
          <Container className={styles.content}>
            <Container direction={'column'} className={styles.details}>
              <Heading
                level={3}
                className={styles.title}
                variants={textVariant(0.1)}
              >
                {item.title}
              </Heading>
              <Text
                size="l"
                weight="medium"
                secondary
                className={styles.description}
                variants={textVariant(0.2)}
              >
                {item.description}
              </Text>
              <Container className={styles.buttonContainer}>
                <Text size="m" weight="Bold" variants={textVariant(0.3)}>
                  <Button className={styles.button} href={item.live} icon="web">
                    Live Site
                  </Button>
                </Text>
                <Text size="m" weight="Bold" variants={textVariant(0.3)}>
                  <Button
                    className={styles.button}
                    href={item.live}
                    icon="Github"
                  >
                    Source
                  </Button>
                </Text>
              </Container>
            </Container>
            <Container
              direction={'column'}
              className={styles.list}
              variants={textVariant(0.1)}
            >
              <Text className={styles.tools}>Tool Used</Text>
              <List items={item.tags} />
            </Container>
          </Container>
          <Image
            className={styles.image}
            src={item.image}
            href={'/'}
            variants={textVariant(0.4)}
          />
        </Section>
      )}
    </>
  );
};

export default Project;
