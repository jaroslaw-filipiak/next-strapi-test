import Layout from '../../components/layout';
import AboutUsHero from '../../components/aboutUsHero';
import CompanyTimeline from '../../components/companyTimeline';
import Counters from '../../components/counters';
import CTA from '../../components/cta';
import { useQuery, gql } from '@apollo/client';
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';

const about = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_ABOUT_PAGE_CTA_DATA = gql`
  query getCTA {
    pageAbout(locale: "${lang}") {
      data {
        attributes {
          CTA {
            cta_content
            cta_btn_txt
            has_icon
            cta_icon {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;

  const { data, error, loading } = useQuery(GET_ABOUT_PAGE_CTA_DATA);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  return (
    <Layout>
      <div className='empty-space'></div>
      <AboutUsHero></AboutUsHero>
      <CompanyTimeline></CompanyTimeline>
      <Counters></Counters>
      <CTA>
        {{
          left: (
            <div
              className={`text-center ${
                data.pageAbout.data.attributes.CTA.has_icon
                  ? 'col-6 d-flex flex-column align-items-center justify-content-center'
                  : 'col-12 d-flex flex-column align-items-center justify-content-center'
              }`}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: data.pageAbout.data.attributes.CTA.cta_content,
                }}
              ></span>
              <button className='oan-btn'>
                <Link href='/contact'>
                  {data.pageAbout.data.attributes.CTA.cta_btn_txt}
                </Link>
              </button>
            </div>
          ),
          right: (
            <div
              className={
                data.pageAbout.data.attributes.CTA.has_icon
                  ? 'col-6 d-flex align-items-center justify-content-center'
                  : 'd-none'
              }
            >
              <img
                src={
                  data.pageAbout.data.attributes.CTA.cta_icon.data
                    ? data.pageAbout.data.attributes.CTA.cta_icon.data
                        .attributes.url
                    : ''
                }
              />
            </div>
          ),
        }}
      </CTA>
    </Layout>
  );
};

export default about;
