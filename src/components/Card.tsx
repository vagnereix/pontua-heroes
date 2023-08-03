import { ComponentProps, ReactNode } from 'react';
import { Epilogue } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

interface CardProps extends ComponentProps<'div'> {
  children?: ReactNode;
  className?: string;
}

const epilogue = Epilogue({ subsets: ['latin'] });

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'rounded-2xl bg-gray-100 shadow-default px-[10px] py-[14px] flex gap-4 items-start justify-start',
        epilogue.className,
        className
      )}
    >
      {children}
    </div>
  );
}
