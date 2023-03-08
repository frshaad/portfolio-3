import { BsStarFill, BsStarHalf } from 'react-icons/bs'

type Props = {}
const TestimonialCard = (props: Props) => {
  return (
    <div className='max-w-lg rounded-30 rounded-tr-none bg-white p-14'>
      <p className='text-2xl font-normal text-[#151517]'>
        One of the best additions to our feedback loop has been the company-wide
        adoption of Fellow.
      </p>
      <div className='mt-16 flex items-center justify-between'>
        <div className='flex gap-5'>
          <img src='/assets/pp1.png' alt='' />
          <div>
            <p className='text-base font-semibold'>Ronald Richards</p>
            <p className='text-sm leading-6'>UI/UX Designer</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <p>4.5</p>
          <div className='flex gap-1'>
            <BsStarFill fill='#F5BF75' size={28} />
            <BsStarFill fill='#F5BF75' size={28} />
            <BsStarFill fill='#F5BF75' size={28} />
            <BsStarFill fill='#F5BF75' size={28} />
            <BsStarHalf fill='#F5BF75' size={28} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TestimonialCard
