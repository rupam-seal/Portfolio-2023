import { useEffect, useState } from 'react';
import Link from 'next/link';

import { classes } from '@/utils/styles';
import styles from './Image.module.css';

import { motion } from 'framer-motion';

/**
 * Image Component.
 *
 * @param {Component} as - The HTML element type for the component.
 * @param {String} src - The image source URL.
 * @param {String} className - The CSS class name for the component.
 * @param {String} href - The URL for the link, if the image should be clickable.
 * @param {Object} variants - The animation variants for the motion component.
 * @param {Boolean} rounded - Whether the image should have rounded corners.
 * @returns {Component} The Image component.
 */

export const Image = ({
  as,
  src,
  className,
  href,
  variants = {},
  rounded = false,
  target = '_blank',
  lowResSrc = '/placeholder.jpg',
  ...rest
}) => {
  const Component = as || motion.div;

  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <Component
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={(classes(styles.container), className)}
        {...rest}
      >
        {href ? (
          <Link target={target} href={href} {...rest}>
            <img
              className={styles.image}
              data-rounded={rounded}
              src={src}
              onLoad={handleLoad}
              alt={''}
            />
          </Link>
        ) : (
          <img
            className={styles.image}
            data-rounded={rounded}
            src={src}
            onLoad={handleLoad}
            src={src}
            alt={''}
          />
        )}
        {!loaded && (
          <img
            className={styles.image}
            data-rounded={rounded}
            src={lowResSrc}
            alt={''}
          />
        )}
      </Component>
    </>
  );
};
