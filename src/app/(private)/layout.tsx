import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import '@/styles/globals.scss';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Pontua Heroes',
    template: '%s | Pontua Heroes',
  },
  description: 'Technical test for Pontua',
  icons: {
    icon: 'icon.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen w-screen'>
          <Sidebar />

          <div className='flex flex-col w-full'>
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
