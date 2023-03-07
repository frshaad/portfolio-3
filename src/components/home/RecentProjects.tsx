import { BiShow } from 'react-icons/bi'
import { BsLayersFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

type Props = {}
const RecentProjects = (props: Props) => {
  return (
    <section className='mt-16'>
      <div className='flex items-center justify-between'>
        <h3 className='heading-1 text-[#151517]'>Recent Projects</h3>
        <button className='button-filled px-8 py-4'>View More</button>
      </div>

      <article className='mt-14 flex items-center justify-between gap-8'>
        <div>
          <div>
            <img src='/assets/project1-1.png' className='rounded-25' />
          </div>
          <div className='mt-5'>
            <p className='text-2xl font-semibold text-black'>UI Portofolio</p>
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
        <div>
          <div>
            <img src='/assets/project2-1.png' className='rounded-25' />
          </div>
          <div className='mt-5'>
            <p className='text-2xl font-semibold text-black'>UI Portofolio</p>
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
      </article>
    </section>
  )
}

export default RecentProjects
