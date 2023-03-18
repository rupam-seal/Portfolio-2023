import Link from 'next/link';
import { Container } from '../Container';
import { Heading } from '../Heading';

import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <Container align="center" className={styles.logo}>
      <Link className={styles.text} href="/">
        <Heading level={4} weight={'bold'}>
          NX
        </Heading>
      </Link>
    </Container>
  );
};
