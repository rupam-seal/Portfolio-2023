import { createRef, useEffect, useState } from 'react';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Image } from '../Image';
import { Text } from '../Text';
import styles from './RichText.module.css';

export const RichText = ({ projectData }) => {
  const { info } = projectData;

  const [children, setChildren] = useState([]);

  useEffect(() => {
    const items = info?.map((item, index) => {
      const element = [];

      const { id, content, level } = item;

      id === 'heading'
        ? element.push(<HeadingItem level={level}>{content}</HeadingItem>)
        : id === 'image'
        ? element.push(<ImageItem>{content}</ImageItem>)
        : id === 'paragraph'
        ? element.push(<PargraphItem>{content}</PargraphItem>)
        : id === 'video'
        ? element.push(<VideoItem>{content}</VideoItem>)
        : '';

      return element;
    });

    setChildren(items);
  }, [projectData]);

  return (
    <Container direction="column" className={styles.container}>
      {children}
    </Container>
  );
};

const HeadingItem = ({ level, children }) => {
  return (
    <Heading
      className={styles.heading}
      level={level}
      weight="Bold"
      style={
        level === '4'
          ? { marginBottom: 'var(--spaceL)' }
          : { marginBottom: 'var(--spaceL)' }
      }
    >
      {children}
    </Heading>
  );
};

const ImageItem = ({ children }) => {
  return <Image src={children} className={styles.image}></Image>;
};

const PargraphItem = ({ children }) => {
  return <Text className={styles.paragraph}>{children}</Text>;
};

const VideoItem = ({ children }) => {
  return (
    <iframe
      className={styles.iframe}
      src={children}
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};
