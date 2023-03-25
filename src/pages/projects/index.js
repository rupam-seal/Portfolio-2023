import { Section } from '@/components/Section';

import styles from './index.module.css';
import { useEffect, useState } from 'react';

import { projects } from '../../../data/projects';
import Selector from './Selector';
import Projects from './Projects';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [category, setCatagory] = useState('all');
  const [projectData, setProjectData] = useState(projects);

  useEffect(() => {
    category === 'all'
      ? setProjectData(projects)
      : setProjectData(
          projects.filter((project) => project.category === category)
        );
  }, [category]);

  return (
    <Section
      className={styles.section}
      align="center"
      justify="center"
      direction="column"
    >
      <Selector category={category} setCatagory={setCatagory} />
      {projects && <Projects projectData={projectData} />}
      <Footer />
    </Section>
  );
};

export default Index;
