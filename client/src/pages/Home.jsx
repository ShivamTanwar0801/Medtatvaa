import CTA from '../components/CTA';
import Hero from '../components/Hero';
import Legacy from '../components/Legacy';
import Numbers from '../components/Numbers';
import Radiology from '../components/Radiology';
import Workflows from '../components/Workflows';

const Home = () => {
  return (
    <>
      <Hero />
      <Legacy />
      <Workflows />
      <Radiology />
      <Numbers />
      <CTA/>
    </>
  );
};

export default Home;
