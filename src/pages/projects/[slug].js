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
import { ProjectsData } from '@/layouts/Home/ProjectsSummery';
import { ImageDetails } from '@/layouts/Home/ImageDetails';
import { Footer } from '@/components/Footer';

const Project = () => {
  const router = useRouter();

  const { slug } = router.query;

  const projectData = projects[slug];

  return (
    <>
      {projectData && (
        <Container className={styles.section} direction="column" align="center">
          <Info projectData={projectData} />
          <FeaturedImages projectData={projectData} />
          <FeatureVideo projectData={projectData} />
          <Footer />
        </Container>
      )}
    </>
  );
};

const Info = ({ projectData }) => {
  const totalProjects = projects.length;

  const { image, source, live, tags } = projectData;
  return (
    <Container className={styles.wrapper} direction="column">
      <Container className={styles.info}>
        <Container direction={'column'}>
          <Details projectData={projectData} />
          <ProjectButtons
            projectData={projectData}
            title1={'Source'}
            title2={'Live Site'}
            icon1={'Github'}
            icon2={'web'}
            href1={source}
            href2={live}
            target1="_blank"
            target2="_blank"
            animation1={'bounce'}
            animation2={'bounce'}
            disabled={live === '' ? true : false}
            tooltip={live === '' ? true : false}
          ></ProjectButtons>
        </Container>

        <Image
          className={styles.image}
          src={image}
          href={'/'}
          variants={textVariant(0.4)}
        />

        <Container
          direction={'column'}
          className={styles.list}
          variants={textVariant(0.1)}
        >
          <Text className={styles.tools}>Tool Used</Text>
          <List items={tags} />
        </Container>
        <RichText projectData={projectData} />
      </Container>
    </Container>
  );
};

const FeaturedImages = ({ projectData }) => {
  const { feature, video } = projectData;

  const totalDemoItem = feature.length;

  const filteredDemoItemsLength = () =>
    totalDemoItem <= 9 ? `0${totalDemoItem}` : totalDemoItem;

  return (
    <Container className={styles.feature} direction="column">
      <Container align="center" direction={'column'}>
        <Heading level={1} weight="bold" variants={textVariant(0.3)}>
          FEATURED
        </Heading>
        <Heading level={1} weight="bold" variants={textVariant(0.1)}>
          IMAGES
        </Heading>
      </Container>
      <Container
        className={styles.featureItems}
        align="center"
        justify="center"
      >
        {feature.map((item, index) => {
          return (
            <Section
              key={index}
              className={styles.featureItem}
              align="center"
              justify="center"
              direction={index % 2 === 0 ? 'reverse' : 'flex'}
            >
              <Container className={styles.featureDetails}>
                <Details
                  projectData={item}
                  projectNo={index}
                  totalProjects={filteredDemoItemsLength()}
                />
              </Container>
              {item.image ? (
                <Image
                  src={item.image}
                  className={styles.featureImage}
                  variants={textVariant(0.3)}
                />
              ) : (
                ''
              )}

              {item.gif ? (
                <div className={styles.featureGifContainer}>
                  <Image
                    src={projectData.image}
                    className={styles.featureGifImage}
                  />
                  <Image
                    src={item.gif}
                    className={styles.featureGif}
                    variants={textVariant(0.3)}
                  />
                </div>
              ) : (
                ''
              )}
            </Section>
          );
        })}
      </Container>
    </Container>
  );
};

const FeatureVideo = ({ projectData }) => {
  const { video } = projectData;
  return (
    <div className={styles.featureVideo}>
      <Container
        align="center"
        direction={'column'}
        className={styles.videoHeader}
      >
        <Heading level={1} weight="bold" variants={textVariant(0.3)}>
          WATCH VIDEO
        </Heading>
      </Container>
      <Container className={styles.iframeContainer} variants={textVariant(0.4)}>
        <iframe
          className={styles.iframe}
          src={video}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </div>
  );
};

export default Project;
