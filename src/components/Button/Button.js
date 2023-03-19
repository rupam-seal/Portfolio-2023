import Link from 'next/link';

import { motion } from 'framer-motion';

import styles from './Button.module.css';
import { classes } from '@/utils/styles';

import { Icon } from '../Icon';

export const Button = ({
  className,
  variants,
  as: Component = Link,
  secondary,
  icon,
  weight = 'medium',
  size = 'medium',
  align,
  href,
  disabled,
  children,
  animation,
  ...rest
}) => {
  return (
    <motion.div variants={variants}>
      <Component
        className={classes(styles.button, className)}
        data-secondary={secondary}
        data-weight={weight}
        data-size={size}
        data-align={align}
        href={href}
        data-disabled={disabled}
        data-animation={animation}
        {...rest}
      >
        {children}
        {icon ? <Icon className={styles.icon} icon={icon} /> : ''}
      </Component>
    </motion.div>
  );
};
