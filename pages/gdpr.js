import Layout from '../components/layout';
import GdprHero from '../components/gdprHero';
import Icons from '../components/icons';
import { useQuery, gql } from '@apollo/client';
import CTA from '../components/cta';
import Link from 'next/link';

const GET_PAGE_RODO_DATA = gql`
  query getFeatures {
    pageRodo(locale: "pl") {
      data {
        attributes {
          page_title
          rodo_header
          RODO_main_icon {
            data {
              attributes {
                url
              }
            }
          }
          sectons_with_icon {
            section_title
            icons {
              single_icon_txt
              single_icon_img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          section_with_icon_2 {
            section_title
            icons {
              single_icon_txt
              single_icon_img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          CTA {
            cta_content
            cta_btn_txt
            has_icon
            cta_icon {
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

export default () => {
  const { data, error, loading } = useQuery(GET_PAGE_RODO_DATA);

  if (loading) return <p>loading..</p>;
  if (error) return <p>error...</p>;

  return (
    <div>
      <Layout>
        <div className='empty-space'></div>
        <GdprHero></GdprHero>
        <Icons>
          {{
            layout: 'icons__layout-1',
            title: (
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    data.pageRodo.data.attributes.sectons_with_icon
                      .section_title,
                }}
              ></span>
            ),

            icons: data.pageRodo.data.attributes.sectons_with_icon.icons.map(
              (item) => (
                <div className='col icon-item'>
                  <div className='d-flex align-items-center'>
                    <img
                      src={item.single_icon_img.data.attributes.url}
                      alt=''
                    />
                  </div>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.single_icon_txt }}
                  ></span>
                </div>
              )
            ),
          }}
        </Icons>
        <Icons>
          {{
            layout: 'icons__layout-2',
            title: (
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    data.pageRodo.data.attributes.section_with_icon_2
                      .section_title,
                }}
              ></span>
            ),

            icons: data.pageRodo.data.attributes.section_with_icon_2.icons.map(
              (item) => (
                <div className='col icon-item'>
                  <div className='d-flex align-items-center'>
                    <img
                      src={item.single_icon_img.data.attributes.url}
                      alt=''
                    />
                  </div>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.single_icon_txt }}
                  ></span>
                </div>
              )
            ),
          }}
        </Icons>
        <CTA>
          {{
            left: (
              <div
                className={`text-center ${
                  data.pageRodo.data.attributes.CTA.has_icon
                    ? 'col-6  d-flex flex-column align-items-center justify-content-center'
                    : 'col-12  d-flex flex-column align-items-center justify-content-center'
                }`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: data.pageRodo.data.attributes.CTA.cta_content,
                  }}
                ></span>
                <button className='oan-btn'>
                  <Link href='/contact'>
                    {data.pageRodo.data.attributes.CTA.cta_btn_txt}
                  </Link>
                </button>
              </div>
            ),
            right: (
              <div
                className={
                  data.pageRodo.data.attributes.CTA.has_icon
                    ? 'col-6 d-flex align-items-center justify-content-center'
                    : 'd-none'
                }
              >
                {data.pageRodo.data.attributes.CTA.has_icon ? (
                  <Image
                    width={158}
                    height={165}
                    src={
                      data.pageRodo.data.attributes.CTA.cta_icon.data.attributes
                        .url
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
    </div>
  );
};
