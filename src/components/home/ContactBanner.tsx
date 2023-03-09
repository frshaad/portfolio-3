import { BsEnvelope } from 'react-icons/bs'

const ContactBanner = () => {
  return (
    <section className='mx-auto mt-20 w-3/4 max-w-6xl'>
      <article className='flex items-center justify-between rounded-25 bg-yellow px-20 py-16 dark:bg-darkOrange'>
        <h2 className='heading-1 text-white'>
          Interested
          <br /> working
          <br /> with me?
        </h2>
        <div className='flex items-center justify-between gap-12'>
          <button className='flex items-center justify-between gap-4 rounded-10 bg-white py-5 px-6 text-2xl font-semibold text-veryDarkGrey'>
            <BsEnvelope size={24} strokeWidth={0.5} />
            Email Me
          </button>
          <button className='button-outline border-white py-4 px-5 text-2xl font-bold text-white'>
            See More Projects
          </button>
        </div>
      </article>
    </section>
  )
}

export default ContactBanner
