'use client';

import { ReactNode } from 'react';
import { Epilogue } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

interface TabProps {
  active?: boolean;
  children: ReactNode;
  onSelected: () => void;
}

const epilogue = Epilogue({ subsets: ['latin'] });

export function Tab({ active = false, children, onSelected }: TabProps) {
  return (
    <div
      onClick={onSelected}
      data-active={active}
      className='cursor-pointer flex justify-center items-start group min-h-[36px] px-1 data-[active=true]:border-b-2 data-[active=true]:border-blue-800'
    >
      <span
        className={twMerge(
          'group-data-[active=true]:text-blue-800 text-gray-500 text-sm font-medium leading-5',
          epilogue.className
        )}
      >
        {children}
      </span>
    </div>
  );
}
