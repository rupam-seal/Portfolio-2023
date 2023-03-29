import { Html, Head, Main, NextScript } from 'next/document';
import GothamBook from '../assets/fonts/gotham-book.woff2';
import GothamMedium from '../assets/fonts/gotham-medium.woff2';
import Impact from '../assets/fonts/impact.woff';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="prefetch"
          href="https://prod.spline.design/wW0KvxCQ2buZDdji/scene.splinecode"
        />
        <link
          rel="prefetch"
          href="https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode"
        />

        <link rel="preload" href={GothamMedium} as="font" crossOrigin="true" />
        <link rel="preload" href={GothamBook} as="font" crossOrigin="true" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
