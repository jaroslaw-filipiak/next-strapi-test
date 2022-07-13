import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useQuery, gql } from '@apollo/client';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const aboutUsHero = () => {
  const [itemIndex, setItemIndex] = useState(1);

  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const HERO_SLIDERS = gql`
  query getWhyUsContent {
    pageAbout(locale: "${lang}") {
      data {
        attributes {
          Title
          title_before_slider
          Slider {
            slider_repeater {
              slider_subtitle
            }
          }
        }
      }
    }
  }
`;

  const { data, error, loading } = useQuery(HERO_SLIDERS);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  return (
    <section
      data-aos='fade-up'
      style={{
        backgroundImage: `url('/img/about-us-hero-bg.png')`,
        backgroundRepeat: `no-repeat`,
      }}
      className='about-us-hero'
    >
      <div className='container-fluid'>
        <div className='container'>
          <div className='row d-flex flex-column flex-lg-row flex-lg-nowrap align-items-lg-start justify-content-center'>
            <div className='col text-center text-lg-start' data-aos='fade-up'>
              <div>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: data.pageAbout.data.attributes.Title,
                  }}
                ></h1>
              </div>
            </div>
            <div className='col'>
              <div className='about-us-hero--slider-wrapper'>
                <div className='mb-3'>
                  <h4>{data.pageAbout.data.attributes.title_before_slider}</h4>
                </div>

                <Swiper
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                  }}
                  modules={[Pagination, A11y, Navigation]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  onSwiper={(e) => {
                    const index = e.$el[0].swiper.realIndex;
                    const sliderItem = index + 1;
                    setItemIndex(sliderItem);
                  }}
                  onSlideChange={(e) => {
                    const index = e.$el[0].swiper.realIndex;
                    const sliderItem = index + 1;
                    setItemIndex(sliderItem);
                  }}
                >
                  {data.pageAbout.data.attributes.Slider.slider_repeater.map(
                    (item, index) => (
                      <SwiperSlide>
                        <div
                          data-slider-index={index}
                          className='about-us-hero--slide noselect'
                          data-aos='fade-up'
                        >
                          <p>{item.slider_subtitle}</p>
                          <div className='about-us-hero--number'></div>
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>

                <div className='about-us-hero--item-index'>{itemIndex}</div>
              </div>
            </div>
          </div>

          <div className='row justify-content-center pt-3 d-none d-lg-flex'>
            <img
              style={{ maxWidth: `650px` }}
              src='/img/about-hero-indicator.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutUsHero;
