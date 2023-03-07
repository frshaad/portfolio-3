import { useState } from 'react'
import { Link } from 'react-router-dom'

type PagesNameTypes = 'home' | 'about' | 'projects' | 'contact'
const PAGES: PagesNameTypes[] = ['home', 'about', 'projects', 'contact']

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState<PagesNameTypes>('home')

  return (
    <nav className='flex items-center justify-between py-8 dark:text-veryLightGrey'>
      <Link to='/' className='text-[22px] font-bold'>
        Ariene Rey
      </Link>
      <div className='flex items-center justify-between gap-10'>
        {PAGES.map((page, index) => (
          <Link
            key={index}
            className={`text-base font-medium transition duration-200 ${
              selectedPage === page ? 'font-bold text-yellow' : ''
            }`}
            onClick={() => setSelectedPage(page)}
            to={`/${page === 'home' ? '' : page}`}
          >
            <span className='capitalize'>{page}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
export default Navbar
