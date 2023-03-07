import { AboutMe, RecentProjects, Showcase } from '@/components/home'

type Props = {}
const Home = (props: Props) => {
  return (
    <>
      <Showcase />
      <AboutMe />
      <RecentProjects />
    </>
  )
}
export default Home
