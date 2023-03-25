import { classes } from '@/utils/styles';
import Link from 'next/link';
import { social } from '../../../data/socialData';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import styles from './Social.module.css';

/**
 * Social Component.
 * Renders social media icons with links to profiles.
 *
 * @param {Number} level - The heading level for the icons.
 * @param {String} className - The CSS class name for the component.
 * @returns {Component} The Social component.
 */

export const Social = ({ level, className }) => {
  return (
    <Container className={classes(styles.container, className)}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.link} target={item.target}>
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
