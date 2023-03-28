import { useEffect } from 'react';
import Link from 'next/link';

import { classes } from '@/utils/styles';
import styles from './Image.module.css';

import { motion } from 'framer-motion';

import { LazyLoadImage } from 'react-lazy-load-image-component';

/**
 * Image Component.
 * Renders an image using the 'react-lazy-load-image-component' and 'framer-motion' libraries.
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
  ...rest
}) => {
  const Component = as || motion.div;

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
            <LazyLoadImage
              effect="blur"
              className={styles.image}
              data-rounded={rounded}
              src={src}
              alt={''}
            />
          </Link>
        ) : (
          <LazyLoadImage
            effect="blur"
            className={styles.image}
            data-rounded={rounded}
            src={src}
            alt={''}
          />
        )}
      </Component>
    </>
  );
};
