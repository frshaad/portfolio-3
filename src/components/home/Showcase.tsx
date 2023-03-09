import { BsDribbble, BsEnvelope, BsInstagram, BsYoutube } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

type Props = {}
const Showcase = (props: Props) => {
  return (
    <section className='mx-auto mt-10 flex w-3/4 max-w-6xl items-center justify-between gap-6 py-12'>
      <article>
        <p className='heading-4 text-darkGrey'>Hey!</p>
        <h1 className='heading-1 relative mt-4 text-veryDarkGrey after:absolute after:left-24 after:-bottom-12 after:content-showcase-line-vector'>
          I'm <span className='text-yellow'>Ariene Rey</span>.<br />
          an UI/UX Designer.
        </h1>
        <p className='font-regular mt-20 text-lg leading-[30px] text-veryDarkGrey'>
          UX Designer based in Jakarta, Indonesia.
          <br /> I am designing with a minimal and beautiful design in mind.
        </p>

        <div className='mt-8 flex items-center gap-7'>
          <p className='body-text text-darkGrey'>Follow Me</p>
          <div className='text-grey flex items-center justify-between gap-7 text-veryDarkGrey'>
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

        <div className='mt-10 flex items-center gap-7'>
          <a
            href='mailto:abc@xyz.com'
            className='button-filled flex items-center gap-3 px-6 py-3'
          >
            <BsEnvelope size={16} />
            Mail Me
          </a>
          <a
            href='#'
            className='button-outline flex items-center gap-3 px-6 py-3 text-black'
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
