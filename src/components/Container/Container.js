import React from 'react';

import { classes } from '../../utils/styles';
import styles from './Container.module.css';

import { motion } from 'framer-motion';

export const Container = ({
  as: Component = 'div',
  className,
  children,
  direction,
  align = 'auto',
  justify = 'auto',
  variants,
  zIndex,
}) => {
  const MotionComponent = motion(Component);
  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={classes(styles.container, className)}
      data-direction={direction}
      data-justify={justify}
      data-align={align}
      data-z={zIndex}
    >
      {children}
    </MotionComponent>
  );
};
