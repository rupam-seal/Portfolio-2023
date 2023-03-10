import { classes } from '@/utils/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '../Icon';
import styles from './Button.module.css';

export const Button = ({
  className,
  variants,
  as,
  secondary,
  icon,
  weight = 'm',
  size = 'medium',
  href,
  disabled,
  children,
}) => {
  const MotionComponent = motion(Link);

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={classes(styles.button, className)}
      data-secondary={secondary}
      data-weight={weight}
      data-size={size}
      href={href}
      disabled={disabled}
    >
      {children}
      {icon ? <Icon icon={icon} type="button" /> : ''}
    </MotionComponent>
  );
};
