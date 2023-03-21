import React from 'react';

import { motion } from 'framer-motion';

import { classes } from '../../utils/styles';
import styles from './Text.module.css';

export const Text = ({
  as: Component = motion.span,
  children,
  size = 'm',
  weight = 'auto',
  align = 'auto',
  secondary,
  className,
  width = 'auto',
  variants,
  ...rest
}) => {
  const MotionComponent = motion(Component);
  return (
    <Component
      variants={variants}
      viewport={{ once: true, amount: 0.25 }}
      className={classes(styles.text, className)}
      data-size={size}
      data-weight={weight}
      data-align={align}
      data-secondary={secondary}
      data-width={width}
      {...rest}
    >
      {children}
    </Component>
  );
};
