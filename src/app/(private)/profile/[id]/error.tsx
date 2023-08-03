'use client';

import { Loader2, MoveUpLeftIcon, RefreshCcwIcon } from 'lucide-react';
import { Epilogue } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const epilogue = Epilogue({ subsets: ['latin'] });

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.error(error);
  }, [error]);

  function handleTryAgain() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      reset();
    }, 1000);
  }

  return (
    <div className='px-10 py-6'>
      <h1
        className={twMerge(
          'text-2xl font-bold text-blue-800 tracking-[-0.72px]',
          epilogue.className
        )}
      >
        Erro ao contactar seu agente! <span className='text-orange-400'>/</span>{' '}
        <span className='font-light text-gray-500 leading-normal'>
          {error.message}
        </span>
      </h1>

      <section className='flex gap-4 max-w-lg mt-4'>
        <button
          type='button'
          disabled={loading}
          onClick={handleTryAgain}
          className='text-base py-4 w-full flex items-center justify-center gap-[10px] rounded-[10px] bg-blue-800 text-white font-bold'
        >
          {loading ? (
            <Loader2 size={24} className='animate-spin text-white' />
          ) : (
            <>
              Tentar novamente <RefreshCcwIcon size={20} />
            </>
          )}
        </button>

        <button
          type='button'
          onClick={() => push('/dashboard')}
          className='text-base py-4 w-full flex items-center justify-center gap-[10px] rounded-[10px] bg-orange-500 text-white font-bold'
        >
          <MoveUpLeftIcon size={20} />
          Voltar para Home
        </button>
      </section>
    </div>
  );
}
