import { BiShow } from 'react-icons/bi'
import { BsLayersFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

type ProjectDataProps = {
  name: string
  pic: string
}

const ProjectBanner = ({ name, pic }: ProjectDataProps) => (
  <div>
    <div>
      <img src={pic} className='rounded-25' />
    </div>
    <div className='mt-5'>
      <p className='text-2xl font-semibold text-black'>{name}</p>
      <div className='mt-2 flex items-center gap-12'>
        <Link to='/' className='flex items-center gap-3 text-[#151517]'>
          <BsLayersFill size={16} />
          <span className='text-base font-medium'>View Study Case</span>
        </Link>
        <a href='#' className='flex items-center gap-3'>
          <BiShow size={16} />
          <span className='text-base font-medium'>Live Preview</span>
        </a>
      </div>
    </div>
  </div>
)

export default ProjectBanner
