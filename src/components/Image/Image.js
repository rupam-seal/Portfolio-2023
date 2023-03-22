import { useEffect } from 'react';
import Link from 'next/link';

import { classes } from '@/utils/styles';
import styles from './Image.module.css';

import { motion } from 'framer-motion';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Image = ({ as, src, className, href, variants, rounded }) => {
  const defaultComponent = href ? Link : 'div';
  const Component = as || defaultComponent;

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={(classes(styles.container), className)}
      href={href}
    >
      <LazyLoadImage
        effect="blur"
        className={styles.image}
        data-round={rounded}
        src={src}
        alt={''}
      />
    </MotionComponent>
  );
};
