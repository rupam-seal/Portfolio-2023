import { Section } from '@/components/Section';
import { Project } from '@/layouts/Home/Project';
import { projects } from '../../../data/projects';

import styles from './index.module.css';

const index = () => {
  return (
    <Section
      direction="column"
      align="center"
      justify="center"
      className={styles.section}
    >
      {projects.map((project, index) => {
        return <Project key={index} item={project} />;
      })}
    </Section>
  );
};

export default index;
