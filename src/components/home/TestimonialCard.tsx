import { TestimonialDataType } from '@/types'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const TestimonialCard = ({
  job,
  name,
  opinion,
  pic,
  rating,
  id,
}: TestimonialDataType) => {
  return (
    <div
      key={id}
      className='flex h-[350px] flex-col justify-between rounded-30 rounded-tr-none bg-white p-14'
    >
      <p className='text-xl font-normal text-[#151517]'>{opinion}</p>
      <div className='mt-16 flex items-center justify-between'>
        <div className='flex gap-5'>
          <img src={pic} alt={`${name} picture`} />
          <div>
            <p className='text-base font-semibold'>{name}</p>
            <p className='text-sm leading-6'>{job}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <p className='font-medium'>{rating}</p>
          <div className='flex items-center gap-1'>
            <BsStarFill fill='#F5BF75' size={18} />
            <BsStarFill fill='#F5BF75' size={18} />
            <BsStarFill fill='#F5BF75' size={18} />
            <BsStarFill fill='#F5BF75' size={18} />
            <BsStarHalf fill='#F5BF75' size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TestimonialCard