import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const AboutMe = () => {
  return (
    <section className='mx-auto mt-20 flex w-3/4 max-w-6xl items-center justify-between gap-6 py-12'>
      <article className='flex w-full items-start justify-between gap-14 rounded-45 bg-[#e9e9e9] p-16'>
        <div className=''>
          <img
            src='/assets/image2.png'
            alt='Ariene Rey picture'
            className='w-full'
          />
        </div>
        <div className='w-2/3'>
          <div className='flex gap-12'>
            <div>
              <p className='text-7xl font-semibold leading-[62px] text-veryDarkGrey'>
                120<span className='text-[#8ED2A9]'>+</span>
              </p>
              <p className='text-2xl font-normal leading-9 text-darkGrey'>
                Completed Projects
              </p>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <p className='heading-1 text-veryDarkGrey'>A+</p>
                <div className='flex gap-1'>
                  <BsStarFill fill='#F5BF75' size={28} />
                  <BsStarFill fill='#F5BF75' size={28} />
                  <BsStarFill fill='#F5BF75' size={28} />
                  <BsStarFill fill='#F5BF75' size={28} />
                  <BsStarHalf fill='#F5BF75' size={28} />
                </div>
              </div>
              <p className='text-2xl font-normal leading-9 text-darkGrey'>
                Positive Review’s
              </p>
            </div>
          </div>
          <div className='mt-16'>
            <h3 className='heading-1 text-[#151517]'>Glad to Help You!</h3>
            <p className='mt-5 text-2xl font-normal leading-[45px]'>
              As a full-service digital designer, I work closely with my clients
              to define, design and develop transformative user experiences
              across all platforms and brand’s touchpoints.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
export default AboutMe
