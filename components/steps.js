import { useQuery, gql } from '@apollo/client';
import Image from 'next/dist/client/image';

const GET_STEPS_CONTENT = gql`
  query getStepsContent {
    pageHomepage(locale: "pl") {
      data {
        attributes {
          Icons {
            section_title
            icons {
              icon_img {
                data {
                  attributes {
                    url
                  }
                }
              }
              icon_txt
            }
          }
        }
      }
    }
  }
`;

const steps = () => {
  const { data, error, loading } = useQuery(GET_STEPS_CONTENT);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  return (
    <>
      <section className='steps'>
        <div className='container-fluid'>
          <div className='container'>
            <div className='row'>
              <div className='col text-center'>
                <h3
                  dangerouslySetInnerHTML={{
                    __html:
                      data.pageHomepage.data.attributes.Icons.section_title,
                  }}
                ></h3>
              </div>
            </div>

            <div className='row steps--wrapper'>
              {data.pageHomepage.data.attributes.Icons.icons.map(
                (item, index) => (
                  <div
                    className={`col step step-${index + 1}`}
                    key={item.icon_txt}
                  >
                    <Image
                      src={item.icon_img.data.attributes.url}
                      width={106}
                      height={109}
                      alt=''
                    />
                    <p>{item.icon_txt}</p>
                  </div>
                )
              )}

              {/* <div
            v-for="(item, index) in pageHomepage.data.attributes.Icons.icons"
            :key="index"
            className="col step"
            :className="`step-${index + 1}`"
          >
            <img :src="item.icon_img.data.attributes.url" alt="" />
            <p>{{ item.icon_txt }}</p> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default steps;
