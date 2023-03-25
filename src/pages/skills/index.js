import styles from './index.module.css';

import { memo } from 'react';
import { Container } from '@/components/Container';
import { staggerContainer, textVariant } from '@/utils/motion';
import { framework, language, tools, ui } from '../../../data/skillData';
import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';

const index = ({ visible, sectionRef }) => {
  return (
    <Container
      className={styles.section}
      direction={'column'}
      align="center"
      justify="center"
    >
      <Container className={styles.content} direction="column">
        <Card title={'PROGRAMMING LANGUAGES'} items={language} />
        <Card title={'FRAMEWORK/LIBRARIES'} items={framework} />
        <Card title={'TOOLS'} items={tools} />
        <Card title={'UI/UX'} items={ui} />
      </Container>
      <Footer />
    </Container>
  );
};

export default index;
