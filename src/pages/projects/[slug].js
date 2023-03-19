import { useRouter } from 'next/router';
import styles from './Project.module.css';

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

  const { slug } = router.query;

  const projectData = projects[slug];
  const totalProjects = projects.length;

  return (
    <>
      {projectData && (
        <Container className={styles.section} direction="column" align="center">
          <Container className={styles.wrapper} direction="column">
            <Container className={styles.content} justify="sb">
              <Container direction={'column'}>
                <Details projectData={projectData} />
                <ProjectButtons
                  projectData={projectData}
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
                <List items={projectData.tags} />
              </Container>
            </Container>
            <Container animate="show">
              <Image
                className={styles.image}
                src={projectData.image}
                href={'/'}
                variants={textVariant(0.4)}
              />
            </Container>
          </Container>
        </Container>
      )}
    </>
  );
};

export default Project;
