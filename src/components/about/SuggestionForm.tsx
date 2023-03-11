const SuggestionForm = () => (
  <section className='w-full bg-blue py-12 dark:bg-navyBlue xl:py-16'>
    <h2 className='mx-auto w-5/6 text-center text-3xl font-semibold text-white md:w-full lg:text-5xl'>
      We’d Love To Hear From You
    </h2>
    <article className='mx-auto flex w-5/6 max-w-6xl flex-col items-center justify-between py-12 md:flex-row md:gap-8 lg:w-3/4 xl:gap-32'>
      <div className='relative w-full pb-[60%] md:w-1/2 xl:max-w-md xl:pb-[50%]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.802806653848!2d106.84311995435509!3d-6.21067165798785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2snl!4v1678433039866!5m2!1sen!2snl'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='absolute top-0 left-0 h-full w-full rounded-30'
        ></iframe>
      </div>
      <div className='flex flex-col md:w-1/2'>
        <form action='' className='mt-10 flex flex-col gap-7 xl:mt-16'>
          <input
            type='text'
            placeholder='Enter your name'
            className='rounded-10 bg-white px-7 py-4 placeholder:text-lg placeholder:font-normal placeholder:text-darkGrey dark:bg-veryDarkGrey dark:text-veryLightGrey'
          />
          <input
            type='email'
            placeholder='Enter your email'
            className='rounded-10 bg-white px-7 py-4 placeholder:text-lg placeholder:font-normal placeholder:text-darkGrey dark:bg-veryDarkGrey dark:text-veryLightGrey'
          />
          <textarea
            name='suggestionMessage'
            id='suggestionMessage'
            cols={30}
            rows={6}
            placeholder='Write your message'
            className='rounded-10 bg-white px-7 py-4 placeholder:text-lg placeholder:font-normal placeholder:text-darkGrey dark:bg-veryDarkGrey dark:text-veryLightGrey'
          ></textarea>
          <div className='flex justify-end'>
            <button type='submit' className='button-filled w-fit'>
              Email Me
            </button>
          </div>
        </form>
      </div>
    </article>
  </section>
);

export default SuggestionForm;
