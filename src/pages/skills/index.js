import styles from './Skills.module.css';

import { memo } from 'react';
import { Container } from '@/components/Container';
import { IconCard } from '@/components/IconCard';
import { staggerContainer, textVariant } from '@/utils/motion';
import { framework, language, tools, ui } from '../../../data/skillData';

const index = ({ visible, sectionRef }) => {
  return (
    <Container
      className={styles.skills}
      direction={'column'}
      align="center"
      justify="center"
    >
      <Container className={styles.content} direction="column">
        <IconCard title={'PROGRAMMING LANGUAGES'} items={language} />
        <IconCard title={'FRAMEWORK/LIBRARIES'} items={framework} />
        <IconCard title={'TOOLS'} items={tools} />
        <IconCard title={'UI/UX'} items={ui} />
      </Container>
    </Container>
  );
};

export default index;