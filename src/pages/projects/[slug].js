import { useRouter } from 'next/router';
import styles from './Project.module.css';

import { Section } from '../../components/Section';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { Image } from '../../components/Image';
import { Container } from '../../components/Container';
import { projects } from '../../../data/projects';
import { textVariant } from '@/utils/motion';
import { Details, ProjectButtons } from '@/layouts/Home/ProjectDetails';
import { RichText } from '@/components/RichText';
import { ProjectsData } from '@/layouts/Home/ProjectsSummery';
import { Footer } from '@/components/Footer';
import { A } from '@/components/A';
import { Meta } from '@/components/Meta';
import { CardList } from '@/components/Card';

const Project = () => {
  const router = useRouter();

  const { slug } = router.query;

  const projectData = projects[slug];

  return (
    <>
      {projectData && (
        <Container className={styles.section} direction="column" align="center">
          <Meta
            prefix="Projects"
            title={projectData.title}
            description={projectData.description}
          />
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
  const { image, source, live, tools, alt } = projectData;
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
          href={''}
          alt={alt}
          variants={textVariant(0.4)}
        />

        <Container
          direction={'column'}
          className={styles.list}
          variants={textVariant(0.1)}
        >
          <Text className={styles.tools} size="l">
            Tool Used
          </Text>
          <CardList items={tools} className={styles.toolsList} />
        </Container>
        <RichText projectData={projectData} />
      </Container>
    </Container>
  );
};

const FeaturedImages = ({ projectData }) => {
  const { feature } = projectData;

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
          const { image, gif, title } = item;
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
              {image ? (
                <Image
                  src={image}
                  className={styles.featureImage}
                  variants={textVariant(0.3)}
                  alt={title}
                />
              ) : (
                ''
              )}

              {gif ? (
                <Image
                  src={gif}
                  className={styles.featureGif}
                  variants={textVariant(0.3)}
                  alt={title}
                />
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
  const { video, live, source } = projectData;
  return (
    <>
      {video ? (
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
          <Container
            className={styles.iframeContainer}
            variants={textVariant(0.4)}
          >
            <iframe
              className={styles.iframe}
              src={video}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Container>
        </div>
      ) : (
        <>
          {live ? (
            <Container variants={textVariant(0.4)}>
              <Text size="l" className={styles.visitWebsite}>
                <A link={live} target="_blank">
                  Visit Website
                </A>
              </Text>
            </Container>
          ) : (
            <Container variants={textVariant(0.4)}>
              <Text size="l" className={styles.visitWebsite}>
                <A link={source} target="_blank">
                  Source Code
                </A>
              </Text>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default Project;
