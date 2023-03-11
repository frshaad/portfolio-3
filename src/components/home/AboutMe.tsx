import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const AboutMe = () => {
  return (
    <section className='mx-auto mt-20 flex w-5/6 max-w-6xl items-center justify-between gap-6 py-12 lg:w-3/4'>
      <article className='flex w-full flex-col items-start justify-between gap-14 rounded-20 bg-[#e9e9e9] p-8 dark:bg-veryDarkGrey md:rounded-45 md:p-12 lg:flex-row lg:p-16'>
        <div className='hidden xl:block'>
          <img
            src='/assets/image2.png'
            alt='Ariene Rey picture'
            className='w-full'
          />
        </div>
        <div className='xl:w-2/3'>
          <div className='flex flex-col gap-8 md:flex-row lg:gap-12'>
            <div>
              <p className='text-5xl font-semibold leading-[62px] text-veryDarkGrey dark:text-veryLightGrey md:text-7xl'>
                120<span className='text-[#8ED2A9]'>+</span>
              </p>
              <p className='text-lg font-normal text-darkGrey dark:text-lightGrey md:text-2xl md:leading-9'>
                Completed Projects
              </p>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <p className='heading-1 text-veryDarkGrey dark:text-veryLightGrey'>
                  A+
                </p>
                <div className='flex gap-1'>
                  <BsStarFill fill='#F5BF75' size={28} />
                  <BsStarFill fill='#F5BF75' size={28} />
                  <BsStarFill fill='#F5BF75' size={28} />
                  <BsStarFill fill='#F5BF75' size={28} />
                  <BsStarHalf fill='#F5BF75' size={28} />
                </div>
              </div>
              <p className='text-lg font-normal leading-9 text-darkGrey dark:text-lightGrey md:text-2xl'>
                Positive Review’s
              </p>
            </div>
          </div>
          <div className='mt-10 md:mt-16'>
            <h3 className='heading-1 text-[#151517] dark:text-veryLightGrey'>
              Glad to Help You!
            </h3>
            <p className='mt-5 text-lg font-normal dark:text-veryLightGrey md:text-2xl md:leading-[45px]'>
              As a full-service digital designer, I work closely with my clients
              to define, design and develop transformative user experiences
              across all platforms and brand’s touchpoints.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default AboutMe;
