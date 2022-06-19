import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Pagination, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/dist/client/image';

const GET_COMPANY_TIMELINE = gql`
  query getWhyUsContent {
    pageAbout(locale: "pl") {
      data {
        attributes {
          Years {
            secttion_title_rich
            years {
              year
              timetable_content
              timetable_icon {
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
  }
`;

const companyTimeline = () => {
  const { data, error, loading } = useQuery(GET_COMPANY_TIMELINE);

  if (loading) return <p>loading..</p>;
  if (error) return <p>error...</p>;

  console.log(data);

  return (
    <section className='company-timeline' id='company-timeline'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center' data-aos='fade-up'>
              <div
                style={{ marginBottom: `90px` }}
                dangerouslySetInnerHTML={{
                  __html:
                    data.pageAbout.data.attributes.Years.secttion_title_rich,
                }}
              ></div>
            </div>
          </div>

          <div
            className='flex-column align-items-center d-none d-lg-flex overflow-hidden mb-4 position-relative'
            data-aos='fade-up'
          >
            <img
              className='indicator'
              src='/img/section-indicator.png'
              alt=''
            />
            <img
              className='indicator-icon'
              src='/img/icons/arrow-down.svg'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row d-flex align-items-center justify-content-center text-center'>
          <div className='company-timeline--slider__pagination d-none d-lg-flex col mx-auto'></div>
        </div>
      </div>

      <div className='container-fluid bg-gray'>
        <div className='container'>
          <div className='row'>
            <div
              className='col d-flex justify-content-center'
              style={{ position: 'relative' }}
              data-aos='fade-up'
            >
              <Swiper
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                }}
                modules={[Pagination, Navigation, A11y]}
                spaceBetween={50}
                navigation
                slidesPerView={3}
                pagination={{
                  clickable: true,
                  el: '.company-timeline--slider__pagination',
                }}
              >
                {data.pageAbout.data.attributes.Years.years.map((item) => (
                  <SwiperSlide>
                    <div className='company-timeline--item'>
                      <div>
                        <Image
                          src={item.timetable_icon.data.attributes.url}
                          width={item.timetable_icon.data.attributes.width}
                          height={item.timetable_icon.data.attributes.height}
                          alt=''
                          style={{ margingRight: '30px' }}
                        />
                      </div>
                      <div className='text-center text-lg-start'>
                        <h5 className='h3'>{item.year}</h5>
                        <p>{item.timetable_content}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* <carousel
              v-if="!$apolloData.queries.pageAbout.loading"
              :wrap-around="true"
              :items-to-show="1.0"
            >
              <slide v-for="slide in pageAbout.data.attributes.Years.years" :key="slide">
                <div className="company-timeline--item">
                  <div>
                    <img :src="slide.timetable_icon.data.attributes.url" alt="" />
                  </div>
                  <div className="text-center text-lg-start">
                    <h5 className="h3">{{ slide.year }}</h5>
                    <p>
                      {{ slide.timetable_content }}
                    </p>
                  </div>
                </div>
              </slide>

              <template #addons>
                <div className="company-timeline--slider__pagination d-none d-lg-block">
                  <pagination />
                </div>

                <div className="company-timeline--slider__nav" data-aos="fade-up">
                  <navigation />
                </div>
              </template>
            </carousel> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default companyTimeline;
