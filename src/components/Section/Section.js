import React from 'react';

import { classes } from '../../utils/styles';
import styles from './Section.module.css';

export const Section = ({
  as: Component = 'div',
  children,
  className,
  fullscreen,
  align = 'auto',
  justify = 'auto',
  direction,
  ...rest
}) => {
  return (
    <Component
      className={classes(styles.section, className)}
      data-fullscreen={fullscreen}
      data-direction={direction}
      data-align={align}
      data-justify={justify}
    >
      {children}
    </Component>
  );
};
