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
                    level={4}
                    className={styles.title}
                    variants={textVariant(0.1)}
                >
                    I am looking for a Web Development job.
                </Heading>
                <Text
                    align="center"
                    secondary
                    size="m"
                    variants={textVariant(0.15)}
                >
                    As a self-taught developer with a strong passion for
                    software development, I have developed a solid foundation in
                    various programming languages, frameworks, and technologies
                    over the years.
                </Text>
                <Text
                    align="center"
                    secondary
                    size="m"
                    variants={textVariant(0.25)}
                >
                    My experience in web and android development began as a
                    hobby, but I quickly found that I had a natural talent for
                    it. Through a combination of online resources, books, and
                    hands-on experience, I have become proficient in front-end
                    development, back-end development, and database management.
                    I have worked on a variety of personal projects that have
                    allowed me to hone my skills and develop a deep
                    understanding of web and android development principles.
                </Text>
                <Text
                    align="center"
                    secondary
                    size="m"
                    variants={textVariant(0.25)}
                >
                    As a self-taught developer, I am a fast learner who is
                    comfortable with picking up new skills and technologies
                    quickly. I am passionate about creating engaging and
                    functional web experiences and am committed to staying
                    up-to-date with the latest industry trends and technologies.
                </Text>
                <Text
                    align="center"
                    secondary
                    size="m"
                    variants={textVariant(0.25)}
                >
                    I am excited about the opportunity to bring my skills and
                    passion for web development to the talented team. I look
                    forward to the opportunity to discuss my qualifications
                    further.
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
