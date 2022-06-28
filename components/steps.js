import { useQuery, gql } from '@apollo/client';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';

const steps = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_STEPS_CONTENT = gql`
    query getStepsContent {
      pageHomepage(locale: "${lang}") {
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default steps;
