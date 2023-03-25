import React from 'react';

import styles from './A.module.css';
import { classes } from '@/utils/styles';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Icon } from '../Icon';
import { Container } from '../Container';

/**
 * A Component.
 * Renders a hyperlink or navigation link with optional icon using Next.js Link and the 'react-icons' library.
 *
 * @param {Boolean} nav - Whether the link is for navigation purposes.
 * @param {String} className - The CSS class name for the component.
 * @param {String} children - The content to render inside the component.
 * @param {String} link - The URL to link to.
 * @param {Boolean} secondary - Whether the link should be styled as secondary text.
 * @param {IconType} icon - The name of the icon to display next to the link.
 * @param {String} type - The type of link, used as a data attribute.
 * @returns {Component} The A component.
 */

export const A = ({
  nav = false,
  className,
  children,
  link,
  secondary,
  icon,
  type,
  ...rest
}) => {
  const router = useRouter();
  return (
    <>
      {nav ? (
        <Link
          href={link}
          passHref
          className={classes(
            router.pathname == link ? styles.active : styles.normal,
            className
          )}
          data-type={type}
          {...rest}
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
            {...rest}
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
