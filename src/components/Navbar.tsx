import { useMediaQuery } from '@/hooks';
import { useState } from 'react';
import { BsList, BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

type PagesNameTypes = 'home' | 'about' | 'projects' | 'contact';
const PAGES: PagesNameTypes[] = ['home', 'about', 'projects', 'contact'];

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState<PagesNameTypes>('home');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  const handleCloseMobileMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  const handleSelectPage = (page: PagesNameTypes) => {
    setSelectedPage(page);
    setIsMenuToggled(false);
  };

  return (
    <nav className='mx-auto flex w-5/6 max-w-6xl items-center justify-between py-8 dark:text-veryLightGrey lg:w-3/4'>
      <Link to='/' className='text-[22px] font-bold'>
        Ariene Rey
      </Link>
      {isAboveSmallScreens ? (
        <div className='flex items-center justify-between gap-10'>
          {PAGES.map((page, index) => (
            <Link
              key={index}
              className={`text-base font-medium transition duration-200 ${
                selectedPage === page ? 'font-bold text-yellow' : ''
              }`}
              onClick={() => handleSelectPage(page)}
              to={`/${page === 'home' ? '' : page}`}
            >
              <span className='capitalize'>{page}</span>
            </Link>
          ))}
        </div>
      ) : (
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <BsList size={30} />
        </button>
      )}

      {isMenuToggled && (
        <div className='fixed right-0 top-0 z-40 flex h-full w-3/4 flex-col bg-lightGrey p-14 dark:bg-darkGrey'>
          <div className='flex w-full justify-end transition duration-150'>
            <button onClick={handleCloseMobileMenu}>
              <BsXLg size={30} />
            </button>
          </div>
          <div className='mt-20 flex flex-col items-center justify-between gap-10'>
            {PAGES.map((page, index) => (
              <Link
                key={index}
                className={`text-base font-medium transition duration-200 ${
                  selectedPage === page ? 'font-bold text-yellow' : ''
                }`}
                onClick={() => handleSelectPage(page)}
                to={`/${page === 'home' ? '' : page}`}
              >
                <span className='capitalize'>{page}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
