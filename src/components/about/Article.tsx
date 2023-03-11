import { useMediaQuery } from '@/hooks';

const Article = () => {
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  return (
    <section className='mx-auto flex w-5/6 max-w-6xl flex-col items-center justify-between py-12 text-veryDarkGrey lg:w-3/4'>
      <p className='text-justify text-lg leading-[45px] text-[#000] dark:text-veryLightGrey lg:text-left'>
        My most recent work stint was with{' '}
        <span className='font-semibold'>Sprinklr</span> where I designed for
        some of its core offerings like Social Media Engagement, Social
        Advertising, Care support and Analytics for big brands with a global
        reach that helped integrate all their social marketing needs under one
        roof. Having led the design team for four years in this young, rapidly
        growing enterprise startup environment - taught me how to balance
        business goals and engineering constraints as I unrelentingly advocated
        for the user.
      </p>
      {isAboveSmallScreens ? (
        <img src='/assets/about-wide-image.png' className='my-11' />
      ) : (
        <img
          src='/assets/about-narrow-image.png'
          className='my-11 rounded-25'
        />
      )}
      <p className='text-lg leading-[45px] text-[#000] dark:text-veryLightGrey'>
        I graduated from Symbiosis Institute of Design, India with a degree in
        User Experience Design. I loved the human-centered design methods and
        processes I learned in school and applied them to my thesis project with
        Microsoft R&D, Hyderabad.
        <br />
        <br />I grew up in 7 different states in India and my ability to quickly
        adjust to new challenges in life comes from that. Owing to my diverse
        upbringing, I embrace all cultures and try to bring it to the designs I
        create. I am a movie buff and there’s nothing like relaxing to a good
        masala Bollywood movie. Food is my second love and I let my nose guide
        me to the pleasures of the stomach once every weekend.
      </p>
      <div className='relative mt-12 w-full pb-[56.25%]'>
        <iframe
          className='absolute left-0 top-0 h-full w-full rounded-25'
          src='https://www.youtube-nocookie.com/embed/FLB6mWP6gJQ'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Article;
