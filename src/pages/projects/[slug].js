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
import { RichText } from '@/components/RichText';

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
            <Container className={styles.content}>
              <Image
                src={projectData.image}
                href={'/'}
                variants={textVariant(0.4)}
              />
              <Container direction={'column'}>
                <Details projectData={projectData} />
                <ProjectButtons
                  projectData={projectData}
                  title1={'Source'}
                  title2={'Live Site'}
                  icon1={'Github'}
                  icon2={'web'}
                  href1={projectData.source}
                  href2={projectData.live}
                  target1="_blank"
                  target2="_blank"
                  animation1={'bounce'}
                  animation2={'bounce'}
                  disabled={projectData.live === '' ? true : false}
                  tooltip={projectData.live === '' ? true : false}
                  className={styles.projectButtons}
                ></ProjectButtons>
              </Container>
              <Container
                direction={'column'}
                className={styles.list}
                variants={textVariant(0.1)}
              >
                <Text className={styles.tools}>Tool Used</Text>
                <List items={projectData.tags} />
              </Container>
              <Demo projectData={projectData} />
              <RichText projectData={projectData} />
            </Container>
          </Container>
        </Container>
      )}
    </>
  );
};

const Demo = ({ projectData }) => {
  const { demo } = projectData;

  const imageLink = demo.filter((item) => item.image);
  const videoLink = demo.filter((item) => item.video);
  const desktopLink = demo.filter((item) => item.desktop);
  const mobileLink = demo.filter((item) => item.mobile);

  return (
    <Container className={styles.demo} direction="column">
      <Container align="center" direction={'column'}>
        <Heading level={1} weight="bold" variants={textVariant(0.3)}>
          FEATURED
        </Heading>
        <Heading level={1} weight="bold" variants={textVariant(0.1)}>
          IMAGES
        </Heading>
      </Container>
      <Container className={styles.imageContainer}>
        {imageLink[0]?.image.map((item, index) => {
          return (
            <Image
              key={index}
              src={item}
              className={styles.image}
              variants={textVariant(index / 10)}
            />
          );
        })}
      </Container>

      <Container align="center" direction={'column'}>
        <Heading level={1} weight="bold" variants={textVariant(0.3)}>
          WATCH VIDEO
        </Heading>
      </Container>
      <Container className={styles.iframeContainer} variants={textVariant(0.4)}>
        <iframe
          className={styles.iframe}
          src={videoLink[0]?.video}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </Container>
  );
};

export default Project;

{
  /* <Heading level={5} className={styles.heading}>
          In desktop devices
        </Heading>
        <Image src={desktopLink[0]?.desktop} />

        <Heading level={5} className={styles.heading}>
          In mobile devices
        </Heading>
        <Image src={mobileLink[0]?.mobile} /> */
}
