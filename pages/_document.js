import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='next-custom-document'>
        <Main />
        <NextScript />
        <script src='/lottie.js' />
      </body>
    </Html>
  );
}
