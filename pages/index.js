import Layout from '../components/layout';
import Hero from '../components/hero';
import Features from '../components/features';
import Test from '../components/test';

export default function Home() {
  return (
    <Layout>
      <div className='empty-space'></div>
      <Hero> </Hero>
      <Test></Test>
      <Features></Features>
    </Layout>
  );
}
