import { Project } from '@/layouts/Home/Project';
import { projects } from '../../../data/projects';

const index = () => {
  return (
    <>
      {projects.map((project, index) => {
        return <Project key={index} item={project} />;
      })}
    </>
  );
};

export default index;
