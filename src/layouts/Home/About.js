import Link from 'next/link';

import styles from './About.module.css';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { imageVariant, staggerContainer, textVariant } from '@/utils/motion';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { A } from '@/components/A';
import { Image } from '@/components/Image';
import { List } from '@/components/List';
import { IconCard } from '@/components/IconCard';
import { Icon } from '@/components/Icon';
import { memo } from 'react';

export const About = memo(({ visible, sectionRef }) => {
  return (
    <Section
      direction={'column'}
      className={styles.about}
      align={'center'}
      justify={'center'}
      ref={sectionRef}
    >
      {visible && (
        <>
          <Container>
            <Heading level={1} weight="bold" variants={textVariant(0.1)}>
              ABOUT ME
            </Heading>
          </Container>
          <Section className={styles.content}>
            <Container className={styles.image} align="center" justify="center">
              <Image
                src={'./profile.jpg'}
                href="/"
                variants={imageVariant('-')}
              />
            </Container>
            <Container
              className={styles.details}
              align="left"
              direction="column"
            >
              <Container align="center" variants={textVariant(0.1)}>
                <Heading level={3} size="m" weight="medium">
                  Hi there
                </Heading>
                <Container className={styles.waveContainer}>
                  <span className={styles.wave}>👋</span>
                </Container>
              </Container>
              <Text
                size="l"
                weight="regular"
                secondary
                variants={textVariant(0.3)}
              >
                I am a Full-Stack <A link={'/'}>Android</A> and{' '}
                <A link={'/'}>Web</A> developer. I started learning to code when
                I was a teenager. Well-versed in technology and writing code to
                create systems that are reliable and user-friendly.
              </Text>
              <Text
                size="l"
                weight="regular"
                secondary
                variants={textVariant(0.4)}
              >
                I’ve worked on many freelance <A link={'/'}>projects</A>. I’m
                familiar with various programming languages, including Java,
                C++, Python, and JavaScript but I’m always adding new skills to
                my repertoire.
              </Text>
              <Button
                variants={textVariant(0.35)}
                href={'/contact'}
                size="m"
                icon={'send'}
              >
                Send message
              </Button>
            </Container>
          </Section>
        </>
      )}
    </Section>
  );
});

About.displayName = 'About';
