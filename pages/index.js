import Layout from '../components/layout';
import Hero from '../components/hero';
import Features from '../components/features';

export default function Home() {
  return (
    <Layout>
      <div className='empty-space'></div>
      <Hero> </Hero>
      <Features></Features>
    </Layout>
  );
}
