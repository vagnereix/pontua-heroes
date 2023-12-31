import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import '@/styles/globals.scss';
import NextAuthProvider from '@/providers/NextAuthProvider';
import SearchContextProvider from '@/contexts/useSearch';

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
        <SearchContextProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
        </SearchContextProvider>
      </body>
    </html>
  );
}
