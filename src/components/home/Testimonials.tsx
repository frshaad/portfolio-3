import { testimonialsData } from '@/data'
import { TestimonialDataType } from '@/types'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section className='mt-24 bg-cyan py-12 dark:bg-darkGreen'>
      <h2 className='fot-semibold text-center text-5xl leading-[60px] text-white dark:text-veryLightGrey'>
        We Are Loved By Users
        <br /> And Clients Worldwide
      </h2>
      <div className='mx-auto mt-12 flex max-w-6xl items-center justify-between overflow-scroll'>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={2}
          spaceBetween={48}
          pagination={{
            clickable: true,
          }}
          className='mySwiper pb-16'
        >
          {testimonialsData.map((testimonial: TestimonialDataType) => (
            <SwiperSlide>
              <TestimonialCard
                id={testimonial.id}
                job={testimonial.job}
                name={testimonial.name}
                opinion={testimonial.opinion}
                rating={testimonial.rating}
                pic={testimonial.pic}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
