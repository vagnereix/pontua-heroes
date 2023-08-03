'use client';

import { useRouter } from 'next/navigation';

export function Button() {
  const { replace } = useRouter();

  return (
    <button
      type='button'
      onClick={() => replace('/sign-in')}
      className='text-2xl py-4 w-full flex items-center justify-center gap-[10px] mt-[11px] rounded-[10px] bg-blue-800 text-white font-bold'
    >
      voltar para o login
    </button>
  );
}
