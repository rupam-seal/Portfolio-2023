import React, { useState } from 'react';

import styles from './Blob.module.css';

import Spline from '@splinetool/react-spline';
import { useMobileSize } from '@/hooks/useMobileSize';

export const Blob = ({
  device = 'desktop',
  className,
  as: Component = 'div',
  ...rest
}) => {
  const isDesktopSize = useMobileSize();

  // console.log(isDesktopSize);

  return (
    <Component className={styles.blob} zIndex={1}>
      {/* https://prod.spline.design/wW0KvxCQ2buZDdji/scene.splinecode */}
      {/* https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode */}
      {isDesktopSize ? (
        <Spline scene="https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode" />
      ) : (
        <Spline scene="https://prod.spline.design/wW0KvxCQ2buZDdji/scene.splinecode" />
      )}
    </Component>
  );
};
