'use client';

import { APP_ROUTES } from '@/constants/routes';
import { useSearch } from '@/contexts/useSearch';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FormEvent, useRef } from 'react';

export function InputSearch() {
  const path = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);

  const { setLoading, setSearch, setOffset, setCurrentPage } = useSearch();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setLoading(true);
    setOffset(0);
    setCurrentPage(0);

    const search = inputRef.current?.value;
    if (!search) return setSearch(undefined);

    setSearch(search);
  }

  if (path === APP_ROUTES.private.dashboard) {
    return (
      <div className='flex items-center justify-start gap-4'>
        <Search size={20} className='text-blue-200' />

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type='text'
            placeholder='Busque um agente'
            className='h-4 w-[22rem] p-[0.2rem] font-medium text-xs text-blue-200 outline-none'
          />
        </form>
      </div>
    );
  }

  return null;
}
