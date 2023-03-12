import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

import '@/styles/globals.css';
import '@/styles/media.css';
import '@/styles/theme.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
