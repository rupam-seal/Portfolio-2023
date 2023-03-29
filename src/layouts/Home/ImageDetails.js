import { Container } from '@/components/Container';
import { Img } from '@/components/Img';
import ImageLayer from '@/components/ImageLayer/ImageLayer';
import { imageVariant } from '@/utils/motion';
import { motion } from 'framer-motion';

import styles from './ImageDetails.module.css';

export const ImageDetails = ({ path, image, year, alt, imageLayer = true }) => {
  return (
    <Container variants={imageVariant()}>
      <motion.div
        id="image"
        className={styles.image}
        align="center"
        justify="center"
        initial="hidden"
        whileHover="hover"
      >
        {imageLayer === true ? (
          <ImageLayer rounded={true} year={year} link={path} />
        ) : (
          ''
        )}
        <Img src={image} rounded={true} alt={alt} />
      </motion.div>
    </Container>
  );
};
