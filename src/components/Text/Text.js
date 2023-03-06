import React from 'react';
import { classes } from '../../utils/styles';

import { motion } from 'framer-motion';

import styles from './Text.module.css';

export const Text = ({
  as: Component = 'span',
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
    <MotionComponent
      variants={variants}
      className={classes(styles.text, className)}
      data-size={size}
      data-weight={weight}
      data-align={align}
      data-secondary={secondary}
      data-width={width}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};
