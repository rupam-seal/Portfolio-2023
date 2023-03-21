import { Container } from '@/components/Container';
import { Image } from '@/components/Image';
import ImageLayer from '@/components/ImageLayer/ImageLayer';
import { imageVariant } from '@/utils/motion';
import { motion } from 'framer-motion';

import styles from './ImageDetails.module.css';

export const ImageDetails = ({ path, image, year, imageLayer = true }) => {
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
        <Image src={image} rounded={true} />
      </motion.div>
    </Container>
  );
};
