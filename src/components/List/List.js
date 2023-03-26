import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '@/utils/motion';

import { classes } from '@/utils/styles';

import { Icon } from '../Icon';
import { Text } from '../Text';

import styles from './List.module.css';

/**
 * List Component.
 * Renders a list of items with icons using the 'framer-motion' library.
 *
 * @param {Array} tools - The list of items to render.
 * @param {String} className - The CSS class name for the component.
 * @returns {Component} The List component.
 */

export const List = ({ tools, className }) => {
  return (
    <motion.ul className={classes(styles.meta, className)}>
      {!!tools?.length &&
        tools?.map((item, index) => (
          <motion.li
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.1 + index / 10)}
            viewport={{ once: true, amount: 0.25 }}
            className={styles.metaItem}
            key={item}
          >
            <Icon icon={item} />
            <Text secondary>{item}</Text>
          </motion.li>
        ))}
    </motion.ul>
  );
};
