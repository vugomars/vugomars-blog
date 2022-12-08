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
          className='w-8 h-8 cursor-pointer text-yellow-400'
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className='w-8 h-8 cursor-pointer text-gray-700'
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
}

export default SwitchThemeButton;
