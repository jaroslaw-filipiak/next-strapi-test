import { useQuery, gql } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Pagination, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';

const companyTimeline = () => {
  const [activeYear, setActiveYear] = useState();

  // useEffect(() => {
  //   if (data) {
  //     setActiveYear(data.pageAbout.data.attributes.Years.years[0].year);
  //   }
  // });

  const setYear = (year) => {
    setActiveYear(year);
    console.log('setYearFunc..');
  };

  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_COMPANY_TIMELINE = gql`
  query getWhyUsContent {
    pageAbout(locale: "${lang}") {
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

  const { data, error, loading } = useQuery(GET_COMPANY_TIMELINE);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

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
          <div className='pagination--active-year d-none d-lg-block'>
            {activeYear}
          </div>
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
                  0: {
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
                onSlideChange={(e) => {
                  const realIndex = e.$el[0].swiper.realIndex;
                  const activeIndex = document.querySelector(
                    `div[data-item-index="${realIndex}"]`
                  );

                  const yearOfActiveIndex =
                    activeIndex.getAttribute('data-year');

                  console.log(yearOfActiveIndex);

                  setYear(yearOfActiveIndex);
                }}
                onSwiper={(e) => {
                  const realIndex = e.$el[0].swiper.realIndex;
                  const activeIndex = document.querySelector(
                    `div[data-item-index="${realIndex}"]`
                  );

                  const yearOfActiveIndex =
                    activeIndex.getAttribute('data-year');

                  console.log(yearOfActiveIndex);

                  setYear(yearOfActiveIndex);
                }}
              >
                {data.pageAbout.data.attributes.Years.years.map(
                  (item, index) => (
                    <SwiperSlide>
                      <div
                        data-year={item.year}
                        data-item-index={index}
                        className='company-timeline--item'
                      >
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
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default companyTimeline;
