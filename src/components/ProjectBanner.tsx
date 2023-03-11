import { BiShow } from 'react-icons/bi'
import { BsLayersFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

type ProjectDataProps = {
  name: string
  pic: string
}

const ProjectBanner = ({ name, pic }: ProjectDataProps) => (
  <div className='xl:max-w-lg'>
    <div>
      <img src={pic} className='rounded-25' />
    </div>
    <div className='mt-8'>
      <p className='text-xl font-semibold text-black dark:text-veryLightGrey md:text-2xl'>
        {name}
      </p>
      <div className='mt-4 flex flex-col md:mt-4 md:flex-row md:items-center md:gap-12'>
        <Link
          to='/'
          className='flex items-center gap-3 text-[#151517] dark:text-veryLightGrey'
        >
          <BsLayersFill size={16} />
          <span className='text-base font-medium'>View Study Case</span>
        </Link>
        <a
          href='#'
          className='mt-2 flex items-center gap-3 dark:text-veryLightGrey md:mt-0'
        >
          <BiShow size={16} />
          <span className='text-base font-medium'>Live Preview</span>
        </a>
      </div>
    </div>
  </div>
)

export default ProjectBanner
