import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { Text } from '../Text';

import styles from './ToggleButton.module.css';

export const ToggleButton = ({ icon, toggleStatus, visibility, variants }) => {
  return (
    <Container
      className={styles.container}
      onClick={toggleStatus}
      data-visibility={visibility}
    >
      <motion.div
        variants={variants}
        key={icon}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Icon icon={icon} className={styles.icon} />
      </motion.div>
    </Container>
  );
};
