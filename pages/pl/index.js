import Layout from '../../components/layout';
import Hero from '../../components/hero';
import Features from '../../components/features';
import CTA from '../../components/cta';
import WhyUs from '../../components/why-us';
import Steps from '../../components/steps';
import Testimonials from '../../components/testimonials';
import Logos from '../../components/logos';
import Link from 'next/dist/client/link';
import { useQuery, gql } from '@apollo/client';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_BOTH_CTA_DATA = gql`
  query getFeatures {
    pageHomepage(locale: "${lang}") {
      data {
        attributes {
          CTA {
            has_icon
            cta_content
            cta_btn_txt
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
          CTA_2 {
            has_icon
            cta_content
            cta_btn_txt
            cta_icon {
              data {
                attributes {
                  url
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

  const { data, error, loading } = useQuery(GET_BOTH_CTA_DATA);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  return (
    <Layout>
      <div className='empty-space'></div>
      <Hero> </Hero>
      <Features></Features>
      <CTA>
        {{
          left: (
            <div
              className={`text-center ${
                data.pageHomepage.data.attributes.CTA.has_icon
                  ? 'col-6 d-flex flex-column align-items-center justify-content-center'
                  : 'col-12 d-flex flex-column align-items-center justify-content-center'
              }`}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: data.pageHomepage.data.attributes.CTA.cta_content,
                }}
              ></span>
              <button className='oan-btn'>
                <Link href='/contact'>
                  {data.pageHomepage.data.attributes.CTA.cta_btn_txt}
                </Link>
              </button>
            </div>
          ),
          right: (
            <div
              className={
                data.pageHomepage.data.attributes.CTA.has_icon
                  ? 'col-6 d-flex align-items-center justify-content-center'
                  : 'd-none'
              }
            >
              <Image
                width={158}
                height={165}
                src={
                  data.pageHomepage.data.attributes.CTA.cta_icon.data.attributes
                    .url
                }
              />
            </div>
          ),
        }}
      </CTA>
      <WhyUs></WhyUs>
      <Steps></Steps>
      <Testimonials></Testimonials>
      <Logos></Logos>
      <CTA>
        {{
          left: (
            <div
              className={`text-center ${
                data.pageHomepage.data.attributes.CTA_2.has_icon
                  ? 'col-6  d-flex flex-column align-items-center justify-content-center'
                  : 'col-12  d-flex flex-column align-items-center justify-content-center'
              }`}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: data.pageHomepage.data.attributes.CTA_2.cta_content,
                }}
              ></span>
              <button className='oan-btn'>
                <Link href='/contact'>
                  {data.pageHomepage.data.attributes.CTA_2.cta_btn_txt}
                </Link>
              </button>
            </div>
          ),
          right: (
            <div
              className={
                data.pageHomepage.data.attributes.CTA_2.has_icon
                  ? 'col-6 d-flex align-items-center justify-content-center'
                  : 'd-none'
              }
            >
              {data.pageHomepage.data.attributes.CTA_2.has_icon ? (
                <Image
                  width={158}
                  height={165}
                  src={
                    data.pageHomepage.data.attributes.CTA_2.cta_icon.data
                      .attributes.url
                  }
                />
              ) : (
                ''
              )}
            </div>
          ),
        }}
      </CTA>
    </Layout>
  );
}
