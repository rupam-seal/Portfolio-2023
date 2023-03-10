import React from 'react';

import styles from './A.module.css';
import { classes } from '../../utils/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '../Container';
import { Icon } from '../Icon';

export const A = ({
  nav = false,
  className,
  children,
  link,
  secondary,
  icon,
}) => {
  const router = useRouter();
  return (
    <>
      {nav ? (
        <Link
          href={link}
          passHref
          className={router.pathname == link ? styles.active : styles.navlink}
        >
          {children}
        </Link>
      ) : icon ? (
        <Container className={styles.container}>
          {icon ? <Icon icon={icon} type="link" /> : ''}
          <Link
            className={classes(styles.link, className)}
            href={link}
            data-secondary={secondary}
          >
            {children}
          </Link>
        </Container>
      ) : (
        <Link
          className={classes(styles.link, className)}
          href={link}
          data-secondary={secondary}
        >
          {children}
        </Link>
      )}
    </>
  );
};
