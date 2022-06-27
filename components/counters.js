import { useQuery, gql } from '@apollo/client';
import Image from 'next/dist/client/image';
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const GET_COUNTERS_DATA = gql`
  query getCounters {
    pageAbout(locale: "pl") {
      data {
        attributes {
          Counters {
            section_title
            Counters {
              count
              counter_txt
              counter_icon {
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

const counters = () => {
  const { data, error, loading } = useQuery(GET_COUNTERS_DATA);

  if (loading) return <p>loading..</p>;
  if (error) return { error };

  return (
    <span>
      <section className='counters'>
        <div className='container-fluid'>
          <div className='container'>
            <div className='row'>
              <div className='col text-center' data-aos='fade-up'>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      data.pageAbout.data.attributes.Counters.section_title,
                  }}
                ></span>
              </div>
            </div>

            <div className='row d-flex align-items-center justify-content-center counters--items-wrapper'>
              {data.pageAbout.data.attributes.Counters.Counters.map(
                (item, index) => (
                  <div
                    key={index}
                    className='col counter-item'
                    ata-aos='fade-up'
                  >
                    <div className='d-flex align-items-center'>
                      <Image
                        src={item.counter_icon.data.attributes.url}
                        width={item.counter_icon.data.attributes.width}
                        height={item.counter_icon.data.attributes.height}
                        alt=''
                      />
                      <div className='counter--value'>
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 200 }}
                        >
                          {({ isVisible }) => (
                            <span style={{ height: 100 }}>
                              {isVisible ? <CountUp end={item.count} /> : null}
                            </span>
                          )}
                        </VisibilitySensor>
                      </div>
                    </div>
                    <p>{item.counter_txt}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </span>
  );
};

export default counters;
