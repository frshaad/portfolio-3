import { ContactBanner } from '@/components/home';
import { ProjectsShowcase } from '@/components/projects';

const Projects = () => (
  <>
    <ProjectsShowcase />
    <ContactBanner moreProject={true} />
  </>
);

export default Projects;
