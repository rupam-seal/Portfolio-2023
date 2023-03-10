import { classes } from '@/utils/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './Image.module.css';

export const Image = ({ as, src, className, href, variants }) => {
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
      <img className={styles.image} src={src} />
    </MotionComponent>
  );
};
