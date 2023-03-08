import { ProjectBanner } from '@/components'
import { projectsData } from '@/data'

const RecentProjects = () => (
  <section className='mt-16'>
    <div className='flex items-center justify-between'>
      <h3 className='heading-1 text-[#151517]'>Recent Projects</h3>
      <button className='button-filled px-8 py-4'>View More</button>
    </div>

    <article className='mt-14 flex items-center justify-between gap-8'>
      {projectsData.slice(0, 2).map((project) => (
        <ProjectBanner key={project.id} name={project.name} pic={project.pic} />
      ))}
    </article>
  </section>
)

export default RecentProjects
