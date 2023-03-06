import React from 'react';

import styles from './Blob.module.css';

const Blob = ({
  device = 'desktop',
  className,
  as: Component = 'div',
  ...rest
}) => {
  return <Component>Blob</Component>;
};

export default Blob;
