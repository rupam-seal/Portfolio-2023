import styles from './index.module.css';

import { Container } from '@/components/Container';
import { framework, language, tools, ui } from '../../../data/skillData';
import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';

const index = () => {
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
