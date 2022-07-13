import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const gdprHero = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_GDPR_HERO_DATA = gql`
    query getCounters {
      pageRodo(locale: "${lang}") {
        data {
          attributes {
            page_title
            rodo_header
            RODO_main_icon {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_GDPR_HERO_DATA);

  if (loading) return <p></p>;
  if (error) return { error };

  return (
    <section className='gdpr-hero'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row d-flex flex-column flex-lg-row align-items-center'>
            <div
              className='col-12 col-lg-4 d-flex justify-content-center pb-5 pb-lg-0'
              data-aos='fade-up'
            >
              <img
                src={
                  data.pageRodo.data.attributes.RODO_main_icon.data.attributes
                    .url
                }
                alt=''
              />
            </div>
            <div className='col-12 col-lg-8 pl-5 pr-5' data-aos='fade-up'>
              <span
                dangerouslySetInnerHTML={{
                  __html: data.pageRodo.data.attributes.page_title,
                }}
              ></span>
              <span
                dangerouslySetInnerHTML={{
                  __html: data.pageRodo.data.attributes.rodo_header,
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default gdprHero;
