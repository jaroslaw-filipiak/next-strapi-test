import Layout from '../components/layout';
import Hero from '../components/hero';
import Features from '../components/features';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({ home }) {
  console.log(home);
  return (
    <Layout>
      <div className='empty-space'></div>

      <h1>{home.home_hero_heading}</h1>
      <Hero> </Hero>
      <Features> </Features>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query pageHomepage {
        pageHomepage(locale: "pl") {
          data {
            attributes {
              Hero {
                home_hero_heading
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      home: data.pageHomepage.data.attributes.Hero,
    },
  };
}
