import Layout from '../components/layout';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const advertisingPrivacyPolicy = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_DO_NOT_SELL_MY_PERSONAL_INFO_PAGE_DATA = gql`
    query getPageData {
      pageDoNotSellMyPersonalInfo(locale: "${lang}") {
        data {
          attributes {
            Title
            Content
          }
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(
    GET_DO_NOT_SELL_MY_PERSONAL_INFO_PAGE_DATA
  );

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  console.log(data);

  return (
    <Layout>
      <div className='empty-space'></div>
      <section className='content-page  content-page__txt-page'>
        <div className='container-fluid'>
          <div className='container'>
            <div className='row pb-3'>
              <div className='col'>
                <h3>
                  {data.pageDoNotSellMyPersonalInfo.data.attributes.Title}
                </h3>
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      data.pageDoNotSellMyPersonalInfo.data.attributes.Content,
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

export default advertisingPrivacyPolicy;
