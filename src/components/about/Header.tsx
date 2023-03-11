import Signature from './Signature';

const Header = () => (
  <section className='mx-auto flex w-5/6 max-w-6xl flex-col items-center justify-between py-12 text-veryDarkGrey dark:text-veryLightGrey xl:w-3/4 xl:flex-row xl:py-24'>
    <div>
      <img src='/assets/about-pp1.png' alt='Ariene Rey picture' />
    </div>
    <div className='mt-8 text-center xl:mt-0'>
      <h2 className='text-5xl font-bold'>Ariene Rey</h2>
      <p className='mt-5 text-lg xl:mt-3'>an UI/UX Designer.</p>
      <p className='mt-4 text-lg leading-8'>
        UX Designer based in Jakarta, Indonesia.
        <br />I am designing with a minimal and beautiful design in mind.
      </p>
      <p className='mt-5 text-lg'>Email Me</p>
      <a href='mailto:ariene.rey@gmail.com' className='text-lg font-semibold'>
        ariene.rey@gmail.com
      </a>
      <div className='mx-auto mt-6 w-max'>
        <Signature />
      </div>
      <p className='mt-6 text-lg font-medium'>Tools & Skills</p>
      <div className='mt-3 flex justify-center gap-7'>
        <img src='/assets/adobe-Illustrator.png' alt='adobe illustrator icon' />
        <img src='/assets/adobe-photoshop.png' alt='adobe photoshop icon' />
        <img src='/assets/figma.png' alt='figma icon' />
        <img src='/assets/adobe-xd.png' alt='adobe xd icon' />
      </div>
    </div>
  </section>
);
export default Header;
