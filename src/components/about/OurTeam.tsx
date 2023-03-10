type TeamMemberProps = {
  pic: string
  name: string
  role: string
  id?: number
}

const teamMembers: TeamMemberProps[] = [
  {
    id: 1,
    pic: '/assets/member1.png',
    name: 'Eleanor Pena',
    role: 'UX Designer',
  },
  {
    id: 2,
    pic: '/assets/member2.png',
    name: 'Jane Cooper',
    role: 'Front End Developer',
  },
  {
    id: 3,
    pic: '/assets/member3.png',
    name: 'Cody Fisher',
    role: 'Back End Developer',
  },
]

const TeamMember = ({ pic, name, role }: TeamMemberProps): JSX.Element => (
  <div className='flex flex-col items-center'>
    <img
      src={pic}
      alt={`${name}'s picture`}
      className='scale-75 xl:scale-100'
    />
    <h3 className='mt-6 text-3xl font-medium leading-[46px] text-veryDarkGrey dark:text-veryLightGrey xl:text-4xl'>
      {name}
    </h3>
    <p className='heading-4 mt-2 text-lg text-darkGrey dark:text-lightGrey'>
      {role}
    </p>
  </div>
)

const OurTeam = () => (
  <section className='mx-auto flex w-5/6 max-w-6xl flex-col items-center justify-between border-t-[3px] border-lightGrey py-12 lg:w-3/4'>
    <h2 className='text-5xl font-semibold leading-[62px] text-veryDarkGrey dark:text-veryLightGrey'>
      Our Team
    </h2>
    <article className='mt-12 flex w-full flex-col items-center justify-between md:flex-row'>
      {teamMembers.map(({ name, pic, role, id }) => (
        <TeamMember key={id} name={name} pic={pic} role={role} />
      ))}
    </article>
  </section>
)

export default OurTeam
