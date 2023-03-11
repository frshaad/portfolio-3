import { ProjectBanner } from '@/components';
import { projectsData } from '@/data';

const RecentProjects = () => (
  <section className='mx-auto mt-16 w-5/6 max-w-6xl lg:w-3/4'>
    <div className='flex flex-col items-center justify-between md:flex-row'>
      <h3 className='md:heading-1 text-2xl font-semibold text-[#151517] dark:text-veryLightGrey'>
        Recent Projects
      </h3>
      <button className='button-filled mt-4 px-4 py-2 dark:text-white md:mt-0 md:px-8 md:py-4'>
        View More
      </button>
    </div>

    <article className='mt-10 flex flex-col items-center justify-between gap-8 md:mt-14 lg:flex-row'>
      {projectsData.slice(0, 2).map((project) => (
        <ProjectBanner key={project.id} name={project.name} pic={project.pic} />
      ))}
    </article>
  </section>
);

export default RecentProjects;
