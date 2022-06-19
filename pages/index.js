import Layout from '../components/layout';
import Hero from '../components/hero';
import Features from '../components/features';
import WhyUs from '../components/why-us';
import Steps from '../components/steps';
import Testimonials from '../components/testimonials';
import Logos from '../components/logos';

export default function Home() {
  return (
    <Layout>
      <div className='empty-space'></div>
      <Hero> </Hero>
      <Features></Features>
      <WhyUs></WhyUs>
      <Steps></Steps>
      <Testimonials></Testimonials>
      <Logos></Logos>
    </Layout>
  );
}
