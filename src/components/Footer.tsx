import {
  BsArrowUpShort,
  BsDribbble,
  BsInstagram,
  BsYoutube,
} from 'react-icons/bs'

const backToTop = () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

const Footer = () => (
  <footer className='mx-auto flex w-3/4 max-w-6xl items-center justify-between py-16 text-veryDarkGrey dark:text-veryLightGrey'>
    <h3 className='text-[22px] font-bold'>Let's Connect</h3>
    <div className='text-grey flex items-center justify-between gap-6'>
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
    <button className='flex items-center gap-1' onClick={backToTop}>
      Back to Top
      <BsArrowUpShort size={24} className='dark:text-cyan' />
    </button>
  </footer>
)

export default Footer
