interface RootLayoutProps {
  children: ReactNode;
}
import { Card } from '@/components/Card';
import { ReactNode } from 'react';

import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <main className='min-h-screen w-screen bg-blue-800 flex gap-36 items-center justify-center'>
      <img
        src='/blue_bg_logo.png'
        alt='Logomarca Pontua'
        className='w-40 absolute top-12 left-[106px]'
      />

      <img src='/home_img.png' alt="Pontua's house" />

      <Card
        className={
          'flex flex-col pt-12 pb-11 px-8 max-h-[auto] max-w-[380px] shrink-0'
        }
      >
        {children}
      </Card>

      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable={false}
        theme='dark'
      />
    </main>
  );
}
