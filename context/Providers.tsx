'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import ReduxProvider from './ReduxProvider';

function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ReduxProvider>
        <ThemeProvider enableSystem={true} attribute='class'>
          {children}
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}

export default Providers;
