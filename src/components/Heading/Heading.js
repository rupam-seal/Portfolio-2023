import React, { Fragment } from 'react';
import { classes } from '../../utils/styles';
import styles from './Heading.module.css';

import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';

export const Heading = ({
  children,
  level = 1,
  as,
  align = 'auto',
  weight = 'medium',
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;

  return (
    <Fragment>
      <motion.Component
        variants={textVariant}
        className={classes(styles.heading, className)}
        data-align={align}
        data-weight={weight}
        data-level={clampedLevel}
        {...rest}
      >
        {children}
      </motion.Component>
    </Fragment>
  );
};
