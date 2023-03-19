import { motion } from 'framer-motion';

import { classes } from '../../utils/styles';
import styles from './Container.module.css';

export const Container = ({
  as: Component = motion.div,
  show,
  className,
  children,
  direction,
  align = 'auto',
  justify = 'auto',
  variants,
  z,
  ...rest
}) => {
  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={classes(styles.container, className)}
      data-direction={direction}
      data-justify={justify}
      data-align={align}
      data-z={z}
      {...rest}
    >
      {children}
    </Component>
  );
};
