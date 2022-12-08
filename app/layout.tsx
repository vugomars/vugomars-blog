import { Footer, Header } from '@components/common';
import Providers from '@context/Providers';
import { PropsWithChildren } from 'react';
import '@styles/globals.css';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className='transition-all duration-700 bg-gray-100 dark:bg-gray-800 px-2 md:px-0'>
        <Providers>
          <Header />
          <div className='fit max-w-[1440px] mx-auto'>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
