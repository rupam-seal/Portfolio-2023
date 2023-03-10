import styles from './About.module.css';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { imageVariant, staggerContainer, textVariant } from '@/utils/motion';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { A } from '@/components/A';
import { Image } from '@/components/Image';
import { List } from '@/components/List';

export const About = () => {
  return (
    <Section
      direction={'column'}
      className={styles.about}
      align={'center'}
      justify={'center'}
    >
      <Container variants={staggerContainer(0.2, 0.2)}>
        <Heading level={1} weight="bold" variants={textVariant(0.1)}>
          ABOUT ME
        </Heading>
      </Container>
      <Section className={styles.content}>
        <Container className={styles.image} align="center" justify="center">
          <Image src={'./profile.jpg'} href="/" variants={imageVariant} />
        </Container>
        <Container
          className={styles.details}
          align="left"
          direction="column"
          variants={staggerContainer(0.2, 0.2)}
        >
          <Container align="center" variants={textVariant(0.1)}>
            <Heading level={3} size="m" weight="medium">
              Hi there
            </Heading>
            <span className={styles.wave}>👋</span>
          </Container>
          <Text size="l" weight="regular" secondary variants={textVariant(0.2)}>
            Experienced software engineer with a passion for developing
            innovative programs that expedite the efficiency and{' '}
            <A link={'/'}>effectiveness</A> of organizational success.
            Well-versed in technology and writing code to create systems that
            are reliable and user-friendly. Skilled
          </Text>

          <Text size="l" weight="regular" secondary variants={textVariant(0.2)}>
            leader who has the proven ability to motivate, educate and manage a
            team of professionals to build software programs and effectively
            track changes. Confident <A link="/">communicator</A>, strategic
            thinker, and innovative creator <A link={'/'}>success</A>.
          </Text>
          <Button variants={textVariant(0.3)} href={'/'} size="m" icon={'send'}>
            Send message
          </Button>
        </Container>
      </Section>
    </Section>
  );
};
