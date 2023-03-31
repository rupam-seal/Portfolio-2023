import { createRef, useEffect, useState } from 'react';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Img } from '../Img';
import { Text } from '../Text';
import styles from './RichText.module.css';
import { textVariant } from '@/utils/motion';
import { List } from '../List';

export const RichText = ({ projectData }) => {
  const { info } = projectData;

  const [children, setChildren] = useState([]);

  useEffect(() => {
    const items = info?.map((item, index) => {
      const element = [];

      const {
        id = '',
        content = '',
        level = '',
        weight = '',
        size = '',
      } = item;

      id === 'heading'
        ? element.push(
            <HeadingItem level={level} weight={weight}>
              {content}
            </HeadingItem>
          )
        : id === 'image'
        ? element.push(<ImageItem>{content}</ImageItem>)
        : id === 'list'
        ? element.push(<List items={content} />)
        : id === 'paragraph'
        ? element.push(
            <PargraphItem size={size} weight={weight}>
              {content}
            </PargraphItem>
          )
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

const HeadingItem = ({ level, children, weight }) => {
  return (
    <Heading
      variants={textVariant(0.3)}
      className={styles.heading}
      level={level}
      weight={weight}
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
  const IMAGE_WIDTH = 850;
  const IMAGE_HEIGHT = 487.41;

  return (
    <Img
      variants={textVariant(0.4)}
      src={children}
      className={styles.image}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
    ></Img>
  );
};

const PargraphItem = ({ children, size, weight }) => {
  return (
    <Text
      size={size}
      weight={weight}
      variants={textVariant(0.5)}
      className={styles.paragraph}
    >
      {children}
    </Text>
  );
};

const VideoItem = ({ children }) => {
  return (
    <iframe
      variants={textVariant(0.5)}
      className={styles.iframe}
      src={children}
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};
