import {
  AboutMe,
  Clients,
  ContactBanner,
  Reasons,
  RecentProjects,
  Showcase,
  Testimonials,
} from '@/components/home';

const Home = () => (
  <>
    <Showcase />
    <AboutMe />
    <RecentProjects />
    <Reasons />
    <ContactBanner />
    <Clients />
    <Testimonials />
  </>
);

export default Home;
