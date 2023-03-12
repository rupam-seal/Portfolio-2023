import { motion } from 'framer-motion';

import { classes } from '../../utils/styles';
import styles from './Container.module.css';

export const Container = ({
  as: Component = 'div',
  show,
  className,
  children,
  direction,
  align = 'auto',
  justify = 'auto',
  variants,
  zIndex,
  ...rest
}) => {
  const MotionComponent = motion(Component);
  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={classes(styles.container, className)}
      data-direction={direction}
      data-justify={justify}
      data-align={align}
      data-z={zIndex}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};
