import {
  AboutMe,
  Clients,
  ContactBanner,
  Reasons,
  RecentProjects,
  Showcase,
  Testimonials,
} from '@/components/home'

type Props = {}
const Home = (props: Props) => {
  return (
    <>
      <Showcase />
      <AboutMe />
      <RecentProjects />
      <Reasons />
      <ContactBanner />
      <Clients />
      <Testimonials />
    </>
  )
}
export default Home
