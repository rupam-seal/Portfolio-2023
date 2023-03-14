import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
