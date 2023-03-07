import { Link } from 'react-router-dom'

type Props = {}
const Navbar = (props: Props) => {
  return (
    <nav className='flex items-center justify-between'>
      <h2 className='text-[22px] font-bold'>Arlene Rey</h2>
      <div className='flex items-center justify-between gap-10'>
        <Link className='text-base font-medium' to='/'>
          Home
        </Link>
        <Link className='text-base font-medium' to='/about'>
          About
        </Link>
        <Link className='text-base font-medium' to='/projects'>
          Projects
        </Link>
        <Link className='text-base font-medium' to='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
