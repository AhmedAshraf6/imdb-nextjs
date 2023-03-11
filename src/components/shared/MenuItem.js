import Link from 'next/link';
import React from 'react';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className='hover:text-amber-600'>
      <p className='hidden sm:inline '>{title}</p>
      <Icon className='text-2xl sm:hidden ' />
    </Link>
  );
}
