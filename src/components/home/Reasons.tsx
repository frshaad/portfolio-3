import reasons from '@/data/reasonsData'

type ReasonCardProps = {
  pic: string
  title: string
  desc: string
}

const ReasonCard = ({ pic, title, desc }: ReasonCardProps) => (
  <div className='mt-12'>
    <div className='flex items-center justify-center'>
      <img src={pic} alt={title} />
    </div>
    <h4 className='heading-4 mt-7 text-center text-veryDarkGrey'>{title}</h4>
    <p className='body-text mt-2 text-center text-darkGrey'>{desc}</p>
  </div>
)

const Reasons = () => {
  return (
    <section className='mt-14 py-8'>
      <h2 className='heading-1 text-center'>Why Hire Me?</h2>
      <article className='mx-auto flex w-full items-center justify-between gap-12'>
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
