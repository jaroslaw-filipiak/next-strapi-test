import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ourGroup = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_OUR_GROUP_DATA = gql`
      query getOurGroupContent {
        pageContact(locale: "${lang}") {
            data {
              attributes {
                our_group_title
                our_group {
                  first_item_logo {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  first_item_content
                  our_group_items {
                    our_group_item_content
                    our_group_logo {
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
  const { data, error, loading } = useQuery(GET_OUR_GROUP_DATA);

  console.log(data);

  if (loading) return <p></p>;
  if (error) {
  }

  return (
    <section class='our-group'>
      <div class='container-fluid'>
        <div class='container'>
          <div class='row'>
            <div class='col' data-aos='fade-up'>
              <h3
                class='text-center'
                dangerouslySetInnerHTML={{
                  __html: data.pageContact.data.attributes.our_group_title,
                }}
              ></h3>
            </div>
          </div>

          <div class='row pt-5 pb-5'>
            <div class='col d-flex justify-content-center'>
              <Image
                src={
                  data.pageContact.data.attributes.our_group.first_item_logo
                    .data.attributes.url
                }
                width={344}
                height={58}
              />
            </div>
          </div>

          <div class='row d-flex justify-content-center' data-aos='fade-up'>
            <div class='col-12 '>
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    data.pageContact.data.attributes.our_group
                      .first_item_content,
                }}
              ></span>
            </div>
          </div>

          <div class='our-brands row d-flex justify-content-center pb-5'>
            {data.pageContact.data.attributes.our_group.our_group_items.map(
              (item, index) => (
                <div
                  key={index}
                  data-aos='fade-up'
                  className='our-brands--item col-12 col-lg-9 d-flex flex-column align-items-center flex-lg-row'
                >
                  <div class='our-brands--logo'>
                    <img src={item.our_group_logo.data.attributes.url} alt='' />
                  </div>
                  <div class='our-brands--excerpt'>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.our_group_item_content,
                      }}
                    ></span>
                  </div>
                </div>
              )
            )}

            {/* <div
            v-for="item in pageContact.data.attributes.our_group.our_group_items"
            :key="item.id"
            class="our-brands--item col-12 col-lg-9 d-flex flex-column align-items-center flex-lg-row"
            data-aos="fade-up"
          >
            <div class="our-brands--logo">
              <img :src="item.our_group_logo.data.attributes.url" alt="" />
            </div>
            <div class="our-brands--excerpt">
              <span v-html="item.our_group_item_content"></span>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourGroup;
