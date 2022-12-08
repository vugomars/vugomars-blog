'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

function SwitchThemeButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon
          className='w-6 h-6 md:w-8 md:h-8 cursor-pointer text-yellow-400 bg-gray-500 p-1 rounded-full'
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className='w-6 h-6 md:w-8 md:h-8 cursor-pointer text-gray-700 bg-gray-300 p-1 rounded-full'
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
}

export default SwitchThemeButton;
