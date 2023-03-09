import { BsDribbble, BsEnvelope, BsInstagram, BsYoutube } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

const Showcase = () => {
  return (
    <section className='mx-auto flex w-5/6 max-w-6xl items-center justify-between gap-6 py-12 md:mt-10 lg:w-3/4'>
      <article>
        <p className='heading-4 text-darkGrey dark:text-lightGrey'>Hey!</p>
        <h1 className='heading-1 relative mt-4 text-veryDarkGrey after:absolute after:-bottom-12 after:hidden after:scale-75 after:content-showcase-line-vector dark:text-white md:after:left-24 md:after:block md:after:scale-100'>
          I'm <span className='text-yellow'>Ariene Rey</span>.<br />
          an UI/UX Designer.
        </h1>
        <p className='font-regular mt-10 text-lg leading-[30px] text-veryDarkGrey dark:text-veryLightGrey md:mt-20'>
          UX Designer based in Jakarta, Indonesia.
          <br /> I am designing with a minimal and beautiful design in mind.
        </p>

        <div className='mt-8 flex items-center gap-7 text-veryDarkGrey dark:text-lightGrey'>
          <p className='body-text'>Follow Me</p>
          <div className='flex items-center justify-between gap-7 '>
            <a href='https://instagram.com'>
              <BsInstagram size={22} />
            </a>
            <a href='https://youtube.com'>
              <BsYoutube size={22} />
            </a>
            <a href='https://dribbble.com'>
              <BsDribbble size={22} />
            </a>
          </div>
        </div>

        <div className='mt-14 flex flex-col items-start gap-4 md:mt-10 md:flex-row md:items-center md:gap-7'>
          <a
            href='mailto:abc@xyz.com'
            className='button-filled flex items-center gap-3 px-6 py-3'
          >
            <BsEnvelope size={16} />
            Mail Me
          </a>
          <a
            href='#'
            className='button-outline flex items-center gap-3 px-6 py-3 text-black dark:text-veryLightGrey'
          >
            <HiDownload size={20} />
            Download CV
          </a>
        </div>
      </article>

      <article className='hidden items-center xl:flex'>
        <div className='relative before:absolute before:-left-7 before:-top-10 before:z-0 before:w-full before:scale-95 before:content-circle after:absolute after:-left-8 after:-bottom-12 after:content-bullet-points'>
          <img
            src='/assets/image.png'
            alt='Ariene Rey picture'
            className='relative z-10 w-full'
          />
        </div>
      </article>
    </section>
  )
}
export default Showcase
