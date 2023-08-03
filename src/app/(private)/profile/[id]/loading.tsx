import { Card } from '@/components/Card';
import { Epilogue } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const epilogue = Epilogue({ subsets: ['latin'] });

export default function Loading() {
  return (
    <div className='px-10 py-6'>
      <h1
        className={twMerge(
          'text-2xl font-bold text-blue-800 tracking-[-0.72px] flex gap-2 items-start',
          epilogue.className
        )}
      >
        Perfil <span className='text-orange-400'>/</span>{' '}
        <div className='rounded bg-gray-200 animate-pulse w-28 h-6 inline-block' />
      </h1>

      <div className='rounded bg-gray-200 animate-pulse mt-6 h-[36px] w-full' />

      <Card className='mt-7 w-full gap-8 bg-white py-[42px] px-[34px] rounded-xl'>
        <div className='bg-gray-200 animate-pulse w-[90px] h-[90px] aspect-square rounded-full' />

        <div className='flex flex-col w-full'>
          <div className='rounded bg-gray-200 animate-pulse h-6' />

          <div className='rounded bg-gray-200 animate-pulse mt-2 h-24' />
        </div>
      </Card>
    </div>
  );
}
