import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useRouter } from 'next/router';

const whyUs = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_WHY_US_CONTENT = gql`
    query getWhyUsContent {
      pageHomepage(locale: "${lang}") {
        data {
          attributes {
            Tables {
              first_column_title
              second_column_title
              section_title
              table_row_repeater_item {
                row_title
                programmatic_model_stars
                classic_model_stars
                key
              }
            }
          }
        }
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_WHY_US_CONTENT);

  if (loading) return <p></p>;
  if (error) {
  }

  return (
    <section className='why-us'>
      <div className='container-fluid'>
        <div className='container container-1170'>
          <div className='row'>
            <div className='col text-center' data-aos='fade-up'>
              <h3
                dangerouslySetInnerHTML={{
                  __html:
                    data.pageHomepage.data.attributes.Tables.section_title,
                }}
              ></h3>
            </div>
          </div>

          <div className='row why-us-table--container'>
            <div className='d-flex justify-content-center'>
              <div className='why-us-table--header col-12'>
                <div
                  className='why-us-table--row why-us-table--header row d-flex justify-content-center'
                  style={{ width: '100%' }}
                >
                  <div className='col col-4 d-flex align-items-center justify-content-center'></div>
                  <div
                    className='col col-4 d-flex align-items-center justify-content-center first-col-title'
                    dangerouslySetInnerHTML={{
                      __html:
                        data.pageHomepage.data.attributes.Tables
                          .first_column_title,
                    }}
                  ></div>
                  <div
                    className='col col-4 d-flex align-items-center justify-content-center sec-col-title'
                    dangerouslySetInnerHTML={{
                      __html:
                        data.pageHomepage.data.attributes.Tables
                          .second_column_title,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className='d-flex justify-content-center'>
              <div className='why-us-table--body col-11-5'>
                <div className='why-us-table--row row m-0 p-0 d-flex justify-content-center'>
                  {data.pageHomepage.data.attributes.Tables.table_row_repeater_item.map(
                    (item) => (
                      <React.Fragment key={item.key}>
                        <div className='col col-4 border-bottom ps-md-5  d-flex align-items-center justify-content-start item-row-title'>
                          <span> {item.row_title}</span>
                        </div>

                        <div
                          className='col col-4 border-bottom border-left border-right  d-flex align-items-center justify-content-center why-us-table--stars'
                          style={{ position: 'relative' }}
                        >
                          <div className='stars--top'>
                            {Array.from(
                              { length: item.programmatic_model_stars },
                              (_, i) => (
                                <img src='/img/icons/star-filled.svg' />
                              )
                            )}
                          </div>

                          <div className='stars--bottom'>
                            {Array.from({ length: 3 }, (_, i) => (
                              <img src='/img/icons/star-outline.svg' />
                            ))}
                          </div>
                        </div>

                        <div
                          className='col col-4 border-bottom  d-flex align-items-center justify-content-center why-us-table--stars'
                          style={{ position: 'relative' }}
                        >
                          <div className='stars--top'>
                            {Array.from(
                              { length: item.classic_model_stars },
                              (_, i) => (
                                <img src='/img/icons/star-filled.svg' />
                              )
                            )}
                          </div>
                          <div className='stars--bottom'>
                            {Array.from({ length: 3 }, (_, i) => (
                              <img src='/img/icons/star-outline.svg' />
                            ))}
                          </div>
                        </div>
                      </React.Fragment>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default whyUs;
