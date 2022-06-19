import Layout from '../components/layout';
import AboutUsHero from '../components/aboutUsHero';
import CompanyTimeline from '../components/companyTimeline';

const about = () => {
  return (
    <Layout>
      <div className='empty-space'></div>
      <AboutUsHero></AboutUsHero>
      <CompanyTimeline></CompanyTimeline>
    </Layout>
  );
};

export default about;
