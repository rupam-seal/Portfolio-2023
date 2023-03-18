import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Project } from '@/layouts/Home/Project';

import styles from './Projects.module.css';

const Projects = ({ projectData }) => {
  const projectsLength = projectData?.length;
  return (
    <Container
      direction="column"
      align="center"
      justify="center"
      className={styles.section}
    >
      <FilteredProjects
        projectData={projectData}
        projectsLength={projectsLength}
      />
    </Container>
  );
};
export default Projects;

export const FilteredProjects = ({ projectData, projectsLength }) => {
  const filteredProjectsLength = () =>
    projectsLength <= 9 ? `0${projectData?.length}` : projectData?.length;

  return (
    <>
      {projectData?.map((project, index) => {
        return (
          <Project
            key={index}
            projectNo={index}
            projectData={project}
            totalProjects={filteredProjectsLength()}
          />
        );
      })}
    </>
  );
};
