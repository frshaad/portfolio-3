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
      <h2 className='fot-semibold text-center text-2xl leading-normal text-white dark:text-veryLightGrey lg:text-5xl lg:leading-[60px]'>
        We Are Loved By Users
        <br /> And Clients Worldwide
      </h2>
      <div className='mx-auto mt-12 flex w-5/6 items-center justify-between overflow-scroll lg:w-3/4'>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 36,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          pagination={{
            clickable: true,
          }}
          className='mySwiper pb-16'
        >
          {testimonialsData.map((testimonial: TestimonialDataType) => (
            <SwiperSlide key={testimonial.id}>
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
