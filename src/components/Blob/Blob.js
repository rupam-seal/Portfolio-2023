import React, { useState } from 'react';

import Spline from '@splinetool/react-spline';

import styles from './Blob.module.css';

import { useMobileSize } from '@/hooks/useMobileSize';

export const Blob = ({
  device = 'desktop',
  className,
  as: Component = 'div',
  ...rest
}) => {
  const isMobileSize = useMobileSize();

  // console.log(isMobileSize);

  return (
    <Component className={styles.blob} zIndex={1}>
      {/* https://prod.spline.design/wW0KvxCQ2buZDdji/scene.splinecode */}
      {/* https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode */}
      {isMobileSize ? (
        // Larger Blob
        <Spline scene="https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode" />
      ) : (
        // Small Blob
        <Spline scene="https://prod.spline.design/wW0KvxCQ2buZDdji/scene.splinecode" />
      )}
    </Component>
  );
};
