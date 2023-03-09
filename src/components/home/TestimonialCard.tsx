import { TestimonialDataType } from '@/types'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const TestimonialCard = ({ job, name, opinion, pic }: TestimonialDataType) => {
  return (
    <div className='flex h-[350px] flex-col justify-between rounded-30 rounded-tr-none bg-white p-8 dark:bg-veryDarkGrey xl:p-14'>
      <p className='text-lg font-normal text-[#151517] dark:text-veryLightGrey lg:text-xl'>
        {opinion}
      </p>
      <div className='mt-8 flex flex-col justify-between gap-4 xl:mt-16 xl:flex-row xl:items-center xl:gap-0'>
        <div className='flex gap-5'>
          <img src={pic} alt={`${name} picture`} />
          <div>
            <p className='text-base font-semibold dark:text-veryLightGrey'>
              {name}
            </p>
            <p className='text-sm leading-6 dark:text-lightGrey'>{job}</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2'>
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
