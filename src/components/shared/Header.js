import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoSquareFill } from 'react-icons/bs';
import Link from 'next/link';
export default function Header() {
  return (
    <nav className='flex justify-between items-center max-w-6xl sm:mx-auto py-3 sm:py-5 px-3 '>
      <div className='flex justify-start items-center gap-5'>
        <MenuItem title='HOME' address='/' Icon={AiFillHome} />
        <MenuItem title='ABOUT' address='/about' Icon={BsInfoSquareFill} />
      </div>
      <div>
        <Link href='/'>
          <h2 className='text-2xl flex gap-2 items-center'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>
              Imdb
            </span>
            <span className='text-xl hidden sm:inline'>CLone</span>
          </h2>
        </Link>
      </div>
    </nav>
  );
}
