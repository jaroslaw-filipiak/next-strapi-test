import { useQuery, gql } from '@apollo/client';
import { isTypeSystemDefinitionNode } from 'graphql';

const GET_FEATURES = gql`
  query getFeatures {
    pageHomepage(locale: "pl") {
      data {
        attributes {
          Features {
            section_title
            section_subtitle
            items {
              feature_item_icon {
                data {
                  attributes {
                    url
                  }
                }
              }
              feature_item_title
              feature_item_subtitle
              feature_item_excerpt
            }
          }
        }
      }
    }
  }
`;

export default function Features() {
  const { data, error, loading } = useQuery(GET_FEATURES);

  if (loading) return <p>loading..</p>;
  if (error) return <p>error...</p>;

  return (
    <section className='home-features'>
      {console.log(data)}
      {console.log(data.pageHomepage.data.attributes.Features.items)}
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div
                className='features--heading'
                dangerouslySetInnerHTML={{
                  __html:
                    data.pageHomepage.data.attributes.Features.section_title,
                }}
              ></div>
            </div>
          </div>

          <div className='row'>
            <div
              className='col text-center features--subtitle'
              dangerouslySetInnerHTML={{
                __html:
                  data.pageHomepage.data.attributes.Features.section_subtitle,
              }}
            ></div>
          </div>

          <div className='row items-row items-row-1'>
            {data.pageHomepage.data.attributes.Features.items.map((item) => (
              <div className='col-6 home-feauters--item'>
                <div className='item__icon'>
                  <img
                    src={item.feature_item_icon.data.attributes.url}
                    alt=''
                  />
                </div>
                <div className='item__content'>
                  <h4>{item.feature_item_title}</h4>
                  <p>{item.feature_item_subtitle}</p>
                  <a className='oan-btn' href='#'>
                    Więcej
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
