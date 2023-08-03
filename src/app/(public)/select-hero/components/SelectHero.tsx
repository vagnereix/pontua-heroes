'use client';

import { useState } from 'react';
import { Hero } from '@/types/hero';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { setCookie } from 'cookies-next';
import { Select } from '@/components/Form/Select';

interface SelectHeroProps {
  heroes?: Hero[];
}

export function SelectHero({ heroes = [] }: SelectHeroProps) {
  const [selected, setSelected] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { replace } = useRouter();

  function handleRedirect() {
    setCookie('selectedHero', selected?.id);
    replace(`/profile/${selected?.id}`);
  }

  return (
    <>
      <Select
        heroes={heroes}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selected={selected}
        setSelected={setSelected}
      />

      <button
        type='button'
        disabled={!selected}
        onClick={() => {
          setLoading(true);
          handleRedirect();
        }}
        className='min-w-[120px] disabled:text-white disabled:bg-gray-200 text-2xl py-3 px-5 flex items-center justify-center self-end gap-[10px] mt-4 rounded-[10px] bg-blue-800 text-white font-bold'
      >
        {loading ? (
          <Loader2 size={32} className='animate-spin text-white' />
        ) : (
          <>entrar</>
        )}
      </button>
    </>
  );
}
