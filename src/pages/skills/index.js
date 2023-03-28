import styles from './index.module.css';

import { Container } from '@/components/Container';
import {
  aitools,
  framework,
  language,
  tools,
  ui,
} from '../../../data/skillData';
import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';
import { Meta } from '@/components/Meta';

const title = 'Skills';
const description = 'List of all the skills and technologies that I know.';

const index = () => {
  return (
    <Container
      className={styles.section}
      direction={'column'}
      align="center"
      justify="center"
    >
      <Meta title={title} description={description} />
      <Container className={styles.content} direction="column">
        <Card title={'AI-Powered Tools'} items={aitools} />
        <Card title={'Programming Languages'} items={language} />
        <Card title={'Framework/Libraries'} items={framework} />
        <Card title={'Tools'} items={tools} />
        <Card title={'UI/UX'} items={ui} />
      </Container>
      <Footer />
    </Container>
  );
};

export default index;
