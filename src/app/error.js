'use client';
export default function error({ error, reset }) {
  return (
    <div className='text-center mt-10'>
      <h1>something went wrong</h1>
      <button onClick={() => reset()} className='hover:text-amber-500'>
        try again
      </button>
    </div>
  );
}
