import { projectsData } from '@/data';
import { useState } from 'react';
import ProjectBanner from '../ProjectBanner';

type ProjectsCategory = 'web design' | 'mobile app design' | 'freebies';
const CATEGORIES: ProjectsCategory[] = [
  'web design',
  'mobile app design',
  'freebies',
];

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectsCategory>('web design');

  const handleCategoryFilter = (selectedCategory: ProjectsCategory) => {
    setActiveCategory(selectedCategory);
  };

  return (
    <section className='mx-auto flex w-5/6 max-w-6xl flex-col justify-between py-12 lg:w-3/4'>
      <h1 className='heading-1 text-[#000] dark:text-veryLightGrey'>
        Our
        <br />
        Projects
      </h1>
      <div className='mt-10 flex items-center gap-4 md:gap-10 lg:gap-20'>
        {CATEGORIES.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryFilter(category)}
            className={`w-1/3 py-2 text-sm font-semibold capitalize text-darkGrey transition duration-200 md:w-fit md:text-2xl lg:text-3xl ${
              category === activeCategory
                ? 'border-b-[5px] border-yellow text-yellow'
                : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <article className='flex flex-col flex-wrap items-center justify-between gap-x-7 gap-y-20 py-12 xl:flex-row'>
        {projectsData
          .filter((project) => project.category === activeCategory)
          .map((data) => (
            <ProjectBanner key={data.id} name={data.name} pic={data.pic} />
          ))}
      </article>
    </section>
  );
};
export default ProjectsShowcase;
