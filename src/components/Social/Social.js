import { classes } from '@/utils/styles';
import Link from 'next/link';
import { social } from '../../../data/socialData';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import styles from './Social.module.css';

export const Social = ({ level, className }) => {
  return (
    <Container className={classes(styles.container, className)}>
      {social.map((item, index) => {
        return (
          <Link href={item.link} target={item.target}>
            <Heading
              key={index}
              className={styles.heading}
              level={level}
              secondary
            >
              <Icon icon={item.label} className={styles.icon} />
            </Heading>
          </Link>
        );
      })}
    </Container>
  );
};
