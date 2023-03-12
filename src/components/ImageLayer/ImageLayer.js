import { motion } from 'framer-motion';

import styles from './ImageLayer.module.css';

import {
  circleVariation,
  opacityVariants,
  rotateIconVariation,
  yearVariants,
} from '@/utils/motion';
import { Heading } from '../Heading';

import { Container } from '../Container';
import { Icon } from '../Icon';

const ImageLayer = ({ year }) => {
  return (
    <>
      <motion.div className={styles.year} variants={yearVariants}>
        <Heading level={4} weight="Bold" className={styles.text}>
          {year}
        </Heading>
      </motion.div>
      <motion.div className={styles.layer} variants={opacityVariants} />
      <motion.div className={styles.circle} variants={circleVariation}>
        <Heading
          className={styles.icon}
          level={3}
          variants={rotateIconVariation}
        >
          <Icon type="white" icon="arrowRight" />
        </Heading>
      </motion.div>
    </>
  );
};

export default ImageLayer;
