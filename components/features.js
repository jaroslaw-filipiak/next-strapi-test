import { useQuery, gql } from '@apollo/client';
import { isTypeSystemDefinitionNode } from 'graphql';
import React, { useState } from 'react';

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
  const [btnContent, setBtnContent] = useState('Więcej');

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  const handleClick = (e) => {
    e.preventDefault();

    const dataItem = e.target.dataset.item;
    const excerpt = document.querySelector(`.${dataItem}--excerpt`);
    const allExcerpts = document.querySelectorAll(`.item__excerpt`);
    const allExcerptsArr = [...allExcerpts];
    const btn = e.target;

    btn.classList.toggle('is-reveal');

    if (btn.classList.contains('is-reveal')) {
      btn.innerHTML = 'Mniej';
    } else {
      btn.innerHTML = 'Więcej';
    }
    // allExcerptsArr.map((item) => {
    //   item.classList.add('h-0');
    // });

    excerpt.classList.toggle('mh-0');
    excerpt.classList.toggle('mh-500');
  };

  return (
    <section className='home-features'>
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
            {data.pageHomepage.data.attributes.Features.items.map(
              (item, index) => (
                <div
                  key={item.feature_item_title}
                  className={`col-6 home-feauters--item home-feauters--item-${
                    index + 1
                  }`}
                >
                  <div className='item__icon'>
                    <img
                      src={item.feature_item_icon.data.attributes.url}
                      alt=''
                    />
                  </div>
                  <div className='item__content'>
                    <h4>{item.feature_item_title}</h4>
                    <p>{item.feature_item_subtitle}</p>
                    <div
                      className={`item__excerpt mh-0 item-${index}--excerpt`}
                    >
                      {item.feature_item_excerpt}
                    </div>
                    <a
                      className={`oan-btn`}
                      data-item={`item-${index}`}
                      onClick={handleClick}
                      href='#'
                    >
                      {btnContent}
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
