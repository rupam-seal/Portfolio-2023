import { staggerContainer, textVariant } from '@/utils/motion';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { Text } from '../Text';
import styles from './IconCard.module.css';

export const IconCard = ({ title, items, className }) => {
  return (
    <Container className={styles.container} direction="column" align="center">
      <Heading level={5} weight="Bold" variants={textVariant(0.1)}>
        {title}
      </Heading>

      <Container
        className={styles.content}
        direction={'column'}
        align="center"
        variants={staggerContainer(0.2, 0.2)}
      >
        {!!items?.length &&
          items?.map((item, index) => (
            <Container
              className={styles.item}
              variants={textVariant(0.1)}
              justify="center"
              key={index}
            >
              <Icon icon={item} />
              <Text className={styles.text}>{item}</Text>
            </Container>
          ))}
      </Container>
    </Container>
  );
};
