import React, { Fragment } from 'react';
import { classes } from '../../utils/styles';
import styles from './Heading.module.css';

import { motion } from 'framer-motion';

export const Heading = ({
  children,
  level = 1,
  as,
  align = 'auto',
  weight = 'medium',
  className,
  variants,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  const MotionComponent = motion(Component);
  return (
    <MotionComponent
      variants={variants}
      className={classes(styles.heading, className)}
      data-align={align}
      data-weight={weight}
      data-level={level}
      {...rest}
    >
      <span>{children}</span>
    </MotionComponent>
  );
};
