import styles from './Skills.module.css';

import { memo } from 'react';
import { Container } from '@/components/Container';
import { IconCard } from '@/components/IconCard';
import { staggerContainer, textVariant } from '@/utils/motion';
import { framework, language, tools, ui } from '../../../data/skillData';

export const Skills = memo(({ visible, sectionRef }) => {
  return (
    <Container
      className={styles.skills}
      direction={'column'}
      align="center"
      justify="center"
      exit={{ opacity: 0 }}
    >
      <Container className={styles.content} direction="column">
        <IconCard title={'PROGRAMMING LANGUAGES'} items={language} />
        <IconCard title={'FRAMEWORK/LIBRARIES'} items={framework} />
        <IconCard title={'TOOLS'} items={tools} />
        <IconCard title={'UI/UX'} items={ui} />
      </Container>
    </Container>
  );
});

Skills.displayName = 'Skills';
