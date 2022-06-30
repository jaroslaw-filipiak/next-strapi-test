import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useRouter } from 'next/router';

const companyData = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_COMPANY_DATA_CONTENT = gql`
      query getCompanyDataContent {
        pageContact(locale: "${lang}") {
          data {
            attributes {
              column_left_heading
              column_left_txt
              company_info_column_right
            }
          }
        }
      }
    `;
  const { data, error, loading } = useQuery(GET_COMPANY_DATA_CONTENT);

  if (loading) return <p></p>;
  if (error) {
  }

  return (
    <section class='company-data'>
      <div class='container-fluid'>
        <div
          class='container'
          style={{ backgroundImage: `url('/img/company-data-box-bg.png')` }}
        >
          <div class='row d-flex flex-column flex-lg-row align-items-center'>
            <div class='col company-data-col company-data-col-1'>
              <h3
                dangerouslySetInnerHTML={{
                  __html: data.pageContact.data.attributes.column_left_heading,
                }}
              ></h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.pageContact.data.attributes.column_left_txt,
                }}
              ></p>
            </div>
            <div class='col company-data-col company-data-col-2'>
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    data.pageContact.data.attributes.company_info_column_right,
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default companyData;
