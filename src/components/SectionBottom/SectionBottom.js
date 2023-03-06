import React from 'react';

import styles from './SectionBottom.module.css';

import { Text } from '../Text';
import { Container } from '../Container';
import { classes } from '../../utils/styles';

export const SectionBottom = ({ className, children }) => {
  return (
    <Container className={classes(styles.section, className)} align={'center'}>
      {children}
    </Container>
  );
};
