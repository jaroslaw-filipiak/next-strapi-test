import Layout from '../components/layout';
import ContactForm from '../components/contactForm';
import Map from '../components/map';
import CompanyData from '../components/companyData';
import OurGroup from '../components/ourGroup';

export default () => {
  return (
    <Layout>
      <div className='empty-space'></div>
      <ContactForm></ContactForm>
      <Map></Map>
      <CompanyData></CompanyData>
      <OurGroup></OurGroup>
    </Layout>
  );
};
