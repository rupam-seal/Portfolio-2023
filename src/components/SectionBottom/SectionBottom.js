import React from 'react';

import styles from './SectionBottom.module.css';

import { Text } from '../Text';
import { Container } from '../Container';
import { classes } from '../../utils/styles';

/**
 * SectionBottom Component.
 * Renders the bottom section of a page section using the 'Text', 'Container' and 'styles' libraries.
 *
 * @param {String} className - The CSS class name for the component.
 * @param {ReactNode} children - The child elements to render.
 * @returns {Component} The SectionBottom component.
 */

export const SectionBottom = ({ className, children }) => {
  return (
    <Container className={classes(styles.section, className)} align={'center'}>
      {children}
    </Container>
  );
};
