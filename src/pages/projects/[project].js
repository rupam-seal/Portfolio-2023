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

const Project = () => {
  const router = useRouter();
  const { project } = router.query;

  const item = projects[project];

  return (
    <>
      {item && (
        <Section className={styles.section} direction={'column'}>
          <Container className={styles.content}>
            <Container direction={'column'} className={styles.details}>
              <Heading level={3} className={styles.title}>
                {item.title}
              </Heading>
              <Text
                size="l"
                weight="medium"
                secondary
                className={styles.description}
              >
                {item.description}
              </Text>
              <Text size="m" weight="Bold">
                <Button className={styles.button} href={item.live}>
                  Visit Website
                </Button>
              </Text>
            </Container>
            <Container direction={'column'} className={styles.list}>
              <Text className={styles.tools}>Tool Used</Text>
              <List items={item.tags} />
            </Container>
          </Container>
          <Image className={styles.image} src={item.image} href={'/'} />
        </Section>
      )}
    </>
  );
};

export default Project;
