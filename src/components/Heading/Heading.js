import { motion } from 'framer-motion';

import { classes } from '@/utils/styles';
import styles from './Heading.module.css';

export const Heading = ({
  children,
  level = 1,
  as,
  align = 'auto',
  weight = 'medium',
  className,
  variants,
  secondary,
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
      data-secondary={secondary}
      {...rest}
    >
      <span>{children}</span>
    </MotionComponent>
  );
};
