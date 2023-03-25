import { A } from '@/components/A';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Heading } from '@/components/Heading';
import { Icon } from '@/components/Icon';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import Link from 'next/link';
import { social } from '../../../data/socialData';
import styles from './index.module.css';

const index = () => {
  const senderEmail = 'rupam.x.seal@gmail.com';

  const handleClick = () => {
    window.open(`mailto:${senderEmail}`, '_blank');
  };

  return (
    <Section
      fullscreen={true}
      justify="sb"
      align="center"
      direction="column"
      className={styles.contact}
    >
      <Section
        className={styles.section}
        align="center"
        justify="center"
        direction="column"
      >
        <Heading level={3}>Contact me</Heading>
        <Container direction="column">
          <TextItem icon="phone">+91 9395212761</TextItem>
          <TextItem icon="email" handleClick={handleClick}>
            rupam.x.seal@gmail.com
          </TextItem>
        </Container>
        <Container className={styles.socialContainer}>
          <SocialItem />
        </Container>
      </Section>
      <Footer />
    </Section>
  );
};

export const TextItem = ({ icon, children, handleClick }) => {
  return (
    <Container className={styles.container} onClick={handleClick}>
      <Text className={styles.icon} size="m">
        <Icon icon={icon} type="body" />
      </Text>
      <Text className={styles.text} size="m">
        {children}
      </Text>
    </Container>
  );
};

export const SocialItem = ({ icon, link }) => {
  return (
    <>
      {social.map((item, index) => {
        return (
          <Link href={item.link} target="_blank" key={index}>
            <Container
              className={styles.social}
              align="center"
              justify="center"
            >
              <Icon icon={item.label} className={styles.icon} />
            </Container>
          </Link>
        );
      })}
    </>
  );
};

export default index;
