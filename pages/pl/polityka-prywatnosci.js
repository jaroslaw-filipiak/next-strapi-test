import Layout from '../../components/layout';
import { useQuery, gql } from '@apollo/client';

const GET_PRIVACY_POLICY_PAGE_DATA = gql`
  query getFeatures {
    pagePrivacyPolicy(locale: "pl") {
      data {
        attributes {
          page_title
          page_content
        }
      }
    }
  }
`;

const privacyPolicy = () => {
  const { data, error, loading } = useQuery(GET_PRIVACY_POLICY_PAGE_DATA);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  console.log(data);

  return (
    <Layout>
      <div className='empty-space'></div>
      <section className='content-page'>
        <div className='container-fluid'>
          <div className='container'>
            <div className='row pb-3'>
              <div className='col'>
                <h3>{data.pagePrivacyPolicy.data.attributes.page_title}</h3>
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <span
                  dangerouslySetInnerHTML={{
                    __html: data.pagePrivacyPolicy.data.attributes.page_content,
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default privacyPolicy;
