import Image from 'next/image';
import NewsletterForm from './newsletterForm';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

import { useEffect } from 'react';

export default function () {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  useEffect(() => {
    const element = document.querySelector('#lottie');

    lottie.loadAnimation({
      container: element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/data.json',
    });
  });

  const GET_HERO_DATA = gql`
    query getFeatures {
      pageHomepage(locale: "${lang}") {
        data {
          attributes {
            Hero {
              home_hero_heading
              home_hero_subheading
              hero_img {
                data {
                  attributes {
                    url
                  }
                }
              }
              lottie_file {
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
    }
  `;

  const { data, error, loading } = useQuery(GET_HERO_DATA);

  console.log(data);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  return (
    <section className='home-hero'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row d-flex flex-column flex-lg-row align-items-center justify-content-between'>
            <div className='col text-center text-lg-start'>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.pageHomepage.data.attributes.Hero.home_hero_heading,
                }}
              ></div>
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    data.pageHomepage.data.attributes.Hero.home_hero_subheading,
                }}
              ></span>

              <div className='d-flex flex-column flex-lg-row'>
                <NewsletterForm></NewsletterForm>
              </div>
            </div>

            <div className='col'>
              <div id='lottie'> </div>
            </div>

            <div className='flex-column align-items-center d-none d-lg-flex overflow-hidden'>
              <Image
                width={1368}
                height={33}
                className='home-hero--indicator'
                src='/img/section-indicator.png'
                alt=''
              />
              <Image
                width={16}
                height={16}
                className='home-hero--indicator-icon'
                src='/img/icons/arrow-down.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
