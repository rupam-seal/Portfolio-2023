import { menuItemVariants, menuVariants } from '@/utils/motion';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { A } from '../A';
import { Heading } from '../Heading';
import { SectionBottom } from '../SectionBottom';
import { Social } from '../Social';
import { Text } from '../Text';
import styles from './Menu.module.css';
import { navLinks } from '../../../data/navData';

export const Menu = ({
  as: Component = 'motion.div',
  expand,
  toggleExpand,
}) => {
  return (
    <AnimatePresence>
      {expand && (
        <motion.div
          initial="closed"
          animate="opened"
          exit="exit"
          variants={menuVariants}
          className={styles.container}
        >
          {navLinks.map(({ label, pathname, target }, index) => {
            return (
              <>
                <motion.div
                  key={index}
                  variants={menuItemVariants(index * 0.1)}
                  onClick={() => toggleExpand(false)}
                >
                  <A
                    className={styles.navlink}
                    link={pathname}
                    key={index}
                    nav={true}
                    target={target}
                    type="hamburger"
                  >
                    {label.toUpperCase()}
                  </A>
                </motion.div>
              </>
            );
          })}
          <SectionBottom className={styles.sectionBottom}>
            <Text className={styles.talk} weight="medium" size="l">
              <A link={'/hire'} icon="arrowRight">
                Hire me
              </A>
            </Text>

            <Social level={3} />
          </SectionBottom>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
