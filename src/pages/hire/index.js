import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import { textVariant } from '@/utils/motion';
import styles from './index.module.css';

const index = () => {
  return (
    <Container
      align="center"
      justify="center"
      className={styles.section}
      direction="column"
    >
      <Container className={styles.container} direction="column">
        <Heading
          align="center"
          level={3}
          className={styles.title}
          variants={textVariant(0.1)}
        >
          I am looking for web developement job
        </Heading>
        <Text align="center" secondary size="l" variants={textVariant(0.15)}>
          I&apos;m excited to be applying for the Software Developer position at
          Cloud Clearwater. With software development, there is always something
          new to discover. Designing a program that is truly helpful to the user
          is my ultimate goal on every project, and I am delighted by the
          opportunity to apply my knowledge at Cloud Clearwater, a top provider
          of cloud services.
        </Text>
        <Text align="center" secondary size="l" variants={textVariant(0.25)}>
          When I was appointed to design an online version of the hardcopy
          workbook used by the maintenance and repair technicians for job
          tracking, I successfully led the team in certain tasks and followed
          direction from the team leader for other requirements. The
          implementation of the online workbook resulted in a 25% faster
          completion time for measurable tasks the following year.
        </Text>
      </Container>
      <Button
        variants={textVariant(0.35)}
        href={'/contact'}
        size="m"
        icon={'send'}
        className={styles.button}
      >
        Send message
      </Button>
    </Container>
  );
};

export default index;
