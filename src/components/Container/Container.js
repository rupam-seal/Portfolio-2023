import React from 'react';

import { classes } from '../../utils/styles';
import styles from './Container.module.css';

import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';

export const Container = ({
  as: Component = 'div',
  className,
  children,
  direction,
  align = 'auto',
  justify = 'auto',
}) => {
  return (
    <motion.Component
      variants={staggerContainer(0.1, 0.1 * 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={classes(styles.container, className)}
      data-direction={direction}
    >
      {children}
    </motion.Component>
  );
};
