import { BsEnvelope } from 'react-icons/bs';

type Props = {
  moreProject?: boolean;
};

const ContactBanner = ({ moreProject }: Props) => {
  return (
    <section className='mx-auto mt-20 w-5/6 max-w-6xl lg:w-3/4'>
      <article className='flex flex-col items-center justify-between rounded-25 bg-yellow p-8 dark:bg-darkOrange md:flex-row md:py-16 md:px-16 lg:px-20'>
        <h2 className='heading-1 text-white'>
          Interested
          <br /> working
          <br /> with me?
        </h2>
        <div className='mt-14 flex flex-col items-center justify-between gap-6 md:mt-0 xl:flex-row xl:gap-12'>
          <button className='flex items-center justify-between gap-4 rounded-10 bg-white py-5 px-8 text-2xl font-semibold text-veryDarkGrey'>
            <BsEnvelope size={24} strokeWidth={0.5} />
            Email Me
          </button>
          <button
            className={`button-outline border-white py-4 px-5 text-2xl font-bold text-white ${
              moreProject ? 'hidden' : ''
            }`}
          >
            See More Projects
          </button>
        </div>
      </article>
    </section>
  );
};

export default ContactBanner;
