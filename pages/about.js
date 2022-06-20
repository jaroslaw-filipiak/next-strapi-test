import Layout from '../components/layout';
import AboutUsHero from '../components/aboutUsHero';
import CompanyTimeline from '../components/companyTimeline';
import Counters from '../components/counters';

const about = () => {
  return (
    <Layout>
      <div className='empty-space'></div>
      <AboutUsHero></AboutUsHero>
      <CompanyTimeline></CompanyTimeline>
      <Counters></Counters>
    </Layout>
  );
};

export default about;
