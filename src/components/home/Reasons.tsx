import reasons from '@/data/reasonsData'

type ReasonCardProps = {
  pic: string
  title: string
  desc: string
}

const ReasonCard = ({ pic, title, desc }: ReasonCardProps) => (
  <div className='mt-12 md:w-1/2 xl:w-full'>
    <div className='flex items-center justify-center'>
      <img src={pic} alt={title} />
    </div>
    <h4 className='heading-4 mt-7 text-center text-veryDarkGrey dark:text-veryLightGrey'>
      {title}
    </h4>
    <p className='body-text mt-2 text-center text-darkGrey dark:text-lightGrey'>
      {desc}
    </p>
  </div>
)

const Reasons = () => {
  return (
    <section className='mx-auto mt-14 w-5/6 max-w-6xl py-8 lg:w-3/4'>
      <h2 className='heading-1 text-center'>Why Hire Me?</h2>
      <article className='mx-auto flex w-full flex-wrap items-center justify-between xl:flex-nowrap xl:gap-12'>
        {reasons.map((reason) => (
          <ReasonCard
            pic={reason.pic}
            desc={reason.desc}
            title={reason.title}
            key={reason.id}
          />
        ))}
      </article>
    </section>
  )
}
export default Reasons
