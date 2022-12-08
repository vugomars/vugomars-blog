'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

function SwitchLogo() {
  const { theme } = useTheme();

  return (
    <div>
      {theme === 'light' ? (
        <Image
          src='/images/logo-text.png'
          alt=' logo'
          width={200}
          height={150}
        />
      ) : (
        <Image
          src='/images/dark-logo.png'
          alt=' logo'
          width={200}
          height={150}
        />
      )}
    </div>
  );
}

export default SwitchLogo;
