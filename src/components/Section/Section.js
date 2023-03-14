import React, { forwardRef } from 'react';

import { classes } from '../../utils/styles';
import styles from './Section.module.css';

export const Section = forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className,
      fullscreen,
      align = 'auto',
      justify = 'auto',
      direction,
      ...rest
    },
    ref
  ) => (
    <Component
      className={classes(styles.section, className)}
      data-fullscreen={fullscreen}
      data-direction={direction}
      data-align={align}
      data-justify={justify}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  )
);

Section.displayName = 'Section';
