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
import { Icon } from '@/components/Icon';
import { memo } from 'react';

export const About = memo(({ visible, sectionRef }) => {
    return (
        <Section
            direction={'column'}
            className={styles.section}
            align={'center'}
            justify={'center'}
            ref={sectionRef}
        >
            {visible && (
                <>
                    <Container>
                        <Heading
                            level={1}
                            weight="Bold"
                            variants={textVariant(0.1)}
                        >
                            ABOUT ME
                        </Heading>
                    </Container>
                    <Section className={styles.content}>
                        <Container
                            className={styles.image}
                            align="center"
                            justify="center"
                        >
                            <Image
                                src={'/assets/images/profile.jpg'}
                                href="/"
                                variants={imageVariant('0.4')}
                                rounded={true}
                            />
                        </Container>
                        <Container
                            className={styles.details}
                            align="left"
                            direction="column"
                        >
                            <Container
                                align="center"
                                variants={textVariant(0.1)}
                            >
                                <Heading level={3} size="m" weight="medium">
                                    Hi there
                                </Heading>
                                <Container className={styles.waveContainer}>
                                    <span className={styles.wave}>👋</span>
                                </Container>
                            </Container>
                            <Text
                                size="m"
                                weight="regular"
                                secondary
                                variants={textVariant(0.3)}
                            >
                                I'm a self-taught android and web developer with
                                a passion for coding and creating engaging web
                                experiences. I started learning to code when I
                                was a teenager. I've taught myself various
                                programming languages, frameworks, and
                                technologies, and I have hands-on experience in
                                both <A link={'/projects'}>front-end</A> and{' '}
                                <A link={'/projects'}>back-end</A> development
                                and deployment.
                            </Text>
                            <Text
                                size="m"
                                weight="regular"
                                secondary
                                variants={textVariant(0.3)}
                            >
                                I'm a fast learner and a problem-solver, always
                                looking for innovative solutions to complex
                                problems. I love what I do and am excited about
                                the endless possibilities for innovation and
                                creativity in software development.
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
