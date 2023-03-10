import { Project } from '@/layouts/Home/Project';
import { projects } from '../../../data/projects';

const index = () => {
  return (
    <>
      {projects.map((project, index) => {
        return <Project item={project} />;
      })}
    </>
  );
};

export default index;
