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
import { Buttons } from '@/layouts/Home/Project';
import { Details, ProjectButtons } from '@/layouts/Home/ProjectDetails';

const Project = () => {
  const router = useRouter();

  const { project } = router.query;

  const item = projects[project];

  const totalProjects = projects.length;

  return (
    <>
      {item && (
        <Container className={styles.section} direction="column" align="center">
          <Container className={styles.wrapper} direction="column">
            <Container className={styles.content} justify="sb">
              <Container direction={'column'} className={styles.details}>
                <Details item={item} totalItem={item.length} />
                <ProjectButtons
                  item={item}
                  title1={'Source'}
                  title2={'Live Site'}
                  icon1={'Github'}
                  icon2={'web'}
                  className={styles.projectButtons}
                />
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
          </Container>
        </Container>
      )}
    </>
  );
};

export default Project;
