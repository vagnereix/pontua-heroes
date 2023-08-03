'use client';

import { CornerUpLeft, LayoutDashboard, User } from 'lucide-react';
import { Divider } from '@/components/Divider';
import { MenuItem } from './MenuItem';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { APP_ROUTES } from '@/constants/routes';
import { useSearch } from '@/contexts/useSearch';

export function Sidebar() {
  const pahtname = usePathname();

  const { push } = useRouter();
  const { setSearch, setOffset } = useSearch();

  function handleGoToDashboard() {
    setOffset(0);
    setSearch(undefined);

    push('/dashboard');
  }

  return (
    <nav className='bg-white text-black min-h-screen shadow-default w-64 flex flex-col items-start lg:min-w-[200px] xl:shrink-0'>
      <div
        onClick={() => push('/dashboard')}
        className='h-[calc(3.75rem-1px)] px-6 flex items-center justify-center cursor-pointer'
      >
        <img src='/white_bg_logo.png' alt='Pontua logo' />
      </div>

      <Divider />

      <nav className='w-full px-4'>
        <MenuItem
          active={pahtname === APP_ROUTES.private.dashboard}
          onClick={handleGoToDashboard}
        >
          <LayoutDashboard size={20} /> Home
        </MenuItem>

        <MenuItem
          active={pahtname.includes('/profile')}
          onClick={() => push('/profile')}
        >
          <User size={20} /> Profile
        </MenuItem>
      </nav>

      <Divider />

      <nav className='w-full px-4'>
        <MenuItem onClick={async () => await signOut()}>
          <CornerUpLeft size={20} /> Sair
        </MenuItem>
      </nav>
    </nav>
  );
}
