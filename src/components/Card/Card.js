import { staggerContainer, textVariant } from '@/utils/motion';

import styles from './Card.module.css';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { Text } from '../Text';

export const Card = ({ title, items, className }) => {
  return (
    <Container className={styles.card} direction="column" align="center">
      <Heading level={5} weight="Bold" variants={textVariant(0.1)}>
        {title}
      </Heading>

      <Container className={styles.items} direction={'column'} align="center">
        {!!items?.length &&
          items?.map((item, index) => (
            <Container
              className={styles.item}
              variants={textVariant(0.2)}
              justify="center"
              key={index}
            >
              <Icon className={styles.icon} icon={item} />
              <Text className={styles.text}>{item}</Text>
            </Container>
          ))}
      </Container>
    </Container>
  );
};
