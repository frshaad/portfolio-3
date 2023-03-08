import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section className='mt-24 bg-cyan py-12'>
      <h2 className='fot-semibold text-center text-5xl leading-[60px] text-white'>
        We Are Loved By Users
        <br /> And Clients Worldwide
      </h2>
      <div className='mt-12 flex items-center justify-between gap-12'>
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  )
}
export default Testimonials
