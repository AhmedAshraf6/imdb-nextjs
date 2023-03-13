'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBpx() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    router.push(`/search/${search}`);
  };
  return (
    <form
      className='flex items-center justify-between max-w-6l
    mx-auto px-5'
      onSubmit={handleSubmit}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='search keywords...'
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
      />
      <button
        disabled={!search}
        type='submit'
        className='text-amber-500 disabled:text-gray-400 cursor-pointer disabled:cursor-not-allowed'
      >
        search
      </button>
    </form>
  );
}
