'use client';
import React, { useEffect, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && theme === 'dark' ? (
        <MdLightMode
          className='text-xl cursor-pointer hover:text-amber-400 '
          onClick={() => setTheme('light')}
        />
      ) : (
        <BsFillMoonFill
          className='text-xl cursor-pointer hover:text-amber-400 '
          onClick={() => setTheme('dark')}
        />
      )}
    </>
  );
}
