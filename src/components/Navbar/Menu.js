import { menuVariants } from '@/utils/motion';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Menu.module.css';

export const Menu = ({ as: Component = 'motion.div', expand }) => {
  return (
    <AnimatePresence>
      {expand && (
        <motion.div
          initial="closed"
          animate="opened"
          exit="closed"
          variants={menuVariants}
          className={styles.container}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
