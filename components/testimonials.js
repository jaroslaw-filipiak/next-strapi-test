import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const testimonials = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_TESTIMONIALS = gql`
  query getFeatures {
    testimonials(locale: "${lang}") {
      data {
        attributes {
          testimonial_content
          testimonial_person_name
          testimonial_person_title
        }
      }
    }
  }
`;
  const { data, error, loading } = useQuery(GET_TESTIMONIALS);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  return (
    <section className='testimonials'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center' data-aos='fade-up'>
              <h3 v-html='this.testimonialsTitle' className='font-600'></h3>
            </div>
          </div>

          <div className='row'>
            {data.testimonials.data.map((item, index) => (
              <div
                key={index}
                className='testimonial mx-auto'
                data-aos='fade-up'
              >
                <div className='testimonial--quote-1 d-none d-xl-block'>
                  <img src='/img/quote-1.png' alt='' />
                </div>
                <div className='testimonial--quote-2 d-none d-xl-block'>
                  <img src='/img/quote-2.png' alt='' />
                </div>
                <div className='testimonial--content'>
                  <p>{item.attributes.testimonial_content}</p>
                </div>
                <div className='testimonial--footer'>
                  <div className='testimonial--person'>
                    {item.attributes.testimonial_person_name}
                  </div>
                  <div className='testimonial--subinfo'>
                    {item.attributes.testimonial_person_title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex-column align-items-center d-none d-lg-flex overflow-hidden section-indicator--wrapper'>
            <img
              className='section-indicator'
              src='/img/section-indicator-2.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonials;
