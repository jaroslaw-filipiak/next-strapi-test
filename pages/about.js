import Head from 'next/head';
import Layout from '../components/layout';

const about = () => {
  return (
    <Layout>
      <Head>
        <title>OAN</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p>about.</p>
    </Layout>
  );
};

export default about;
