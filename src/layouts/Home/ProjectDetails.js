import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Icon } from '@/components/Icon';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import { slice } from '@/utils/slice';
import { textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';

import styles from './ProjectDetails.module.css';
import { A } from '@/components/A';

export const ProjectDetails = ({
  projectData,
  totalProjects,
  projectNo,
  path,
}) => {
  const { id, title, live, source, category } = projectData;

  console.log(projectData);

  // const path = `/projects/${id - 1}`;
  // const path = `/projects/${title}`;

  return (
    <Section className={styles.section} align="center" justify="center">
      <Container direction="column">
        <Details
          projectData={projectData}
          projectNo={projectNo}
          totalProjects={totalProjects}
          showStatus={false}
          sliceDetails={true}
          href1={path}
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
          animation1={'rotate'}
          animation2={'bounce'}
        ></ProjectButtons>
      </Container>
    </Section>
  );
};

export const Details = ({
  projectData,
  projectNo,
  totalProjects,
  showStatus = true,
  sliceDetails = false,
  href1,
}) => {
  const SLICE_LENGTH = 250;
  const PROJECT_NO = projectNo + 1;
  const { title, description, status, tools, statusVisible } = projectData;

  const sliceStr = slice(description, SLICE_LENGTH);

  return (
    <Container className={styles.details} direction="column">
      {totalProjects && (
        <Text
          weight="Bold"
          className={styles.projectNo}
          variants={textVariant(0.1)}
          secondary
        >
          {projectNo < 9 ? `0${PROJECT_NO}` : PROJECT_NO}/{totalProjects}
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
        {sliceDetails ? (
          <>
            {sliceStr}
            {description.length > SLICE_LENGTH ? (
              <Text size="m" className={styles.readMore}>
                <A link={href1}>read more</A>
              </Text>
            ) : (
              ''
            )}
          </>
        ) : (
          description
        )}
      </Text>

      {showStatus ? (
        <Text className={styles.status} variants={textVariant(0.25)}>
          {status}
        </Text>
      ) : (
        <>
          {statusVisible ? (
            <Text className={styles.status} variants={textVariant(0.25)}>
              {status}
            </Text>
          ) : (
            ''
          )}
          <Tools tools={tools} />
        </>
      )}
    </Container>
  );
};

export const Tools = ({ tools }) => {
  return (
    <Container direction={'column'}>
      <Heading
        level={5}
        className={styles.toolsHeading}
        variants={textVariant(0.25)}
      >
        Tools
      </Heading>
      <Container className={styles.tools}>
        {tools &&
          tools.map((item, index) => (
            <Text key={index} size="l" variants={textVariant(0.3)}>
              <Icon icon={item} className={styles.icon} />
            </Text>
          ))}
      </Container>
    </Container>
  );
};

export const ProjectButtons = ({
  title1,
  title2,
  icon1,
  icon2,
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
    <motion.div
      className={styles.buttons}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Button
        target={target1}
        icon={icon1}
        href={href1}
        size="m"
        variants={textVariant(0.3)}
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
          variants={textVariant(0.3)}
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
    </motion.div>
  );
};
