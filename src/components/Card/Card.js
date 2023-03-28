import { staggerContainer, textVariant } from '@/utils/motion';

import styles from './Card.module.css';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { Text } from '../Text';

/**
 * Card Component.
 * Renders a card with a title and a list of items.
 *
 * @param {String} title - The title for the card.
 * @param {Array} items - The list of items to be displayed in the card.
 * @param {String} className - The CSS class name for the component.
 * @returns {Component} The Card component.
 */

export const Card = ({ title = '', items = [], className }) => {
  return (
    <Container className={styles.card} direction="column" align="center">
      <Heading level={5} weight="Bold" variants={textVariant(0.1)}>
        {title}
      </Heading>
      <CardList items={items} />
    </Container>
  );
};

export const CardList = ({ items }) => {
  return (
    <Container className={styles.items} direction={'column'} align="center">
      {!!items?.length &&
        items?.map((item, index) => <CardItem icon={item}>{item}</CardItem>)}
    </Container>
  );
};

export const CardItem = ({
  icon,
  children,
  justify = 'center',
  space = 'l',
  gap = 's',
  scale = 'true',
  type = 'text',
  ...rest
}) => {
  return (
    <Container
      className={styles.item}
      variants={textVariant(0.2)}
      justify={justify}
      data-space={space}
      data-gap={gap}
      data-scale={scale}
      {...rest}
    >
      <Icon className={styles.icon} icon={icon} type={type} />
      <Text className={styles.text} size="m">
        {children}
      </Text>
    </Container>
  );
};
