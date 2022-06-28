import { useQuery, gql } from '@apollo/client';
import Image from 'next/dist/client/image';

const GET_LOGOS = gql`
  query getFeatures {
    pageHomepage(locale: "pl") {
      data {
        attributes {
          Logos {
            logos {
              image {
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

const logos = () => {
  const { data, error, loading } = useQuery(GET_LOGOS);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  return (
    <section className='logos-slider'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row d-flex flex-xl-nowrap align-items-center justify-content-center'>
            {data.pageHomepage.data.attributes.Logos.logos.map(
              (item, index) => (
                <div
                  key={index}
                  className='logos-slider--logo col col-sm-6 col-xl-2'
                >
                  <Image
                    data-aos='fade-up'
                    src={item.image.data.attributes.url}
                    width={item.image.data.attributes.width}
                    height={item.image.data.attributes.height}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default logos;
