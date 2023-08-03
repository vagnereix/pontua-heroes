import { Hero } from '@/types/hero';
import { CheckIcon, ChevronDown, ChevronUp, User, X } from 'lucide-react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps {
  heroes: Hero[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selected: Hero | null;
  setSelected: Dispatch<SetStateAction<Hero | null>>;
}

const inter = Inter({ subsets: ['latin'] });

export function Select({
  heroes,
  isOpen,
  setIsOpen,
  selected,
  setSelected,
}: SelectProps) {
  const isHeroesUnavailable = heroes.length === 0;

  return (
    <div className={twMerge('relative mt-2', inter.className)}>
      <div
        data-active={isOpen}
        onClick={() => setIsOpen((state) => !state)}
        className='box-border shadow-select data-[active=true]:shadow-select-active cursor-pointer relative w-full rounded-lg bg-white py-[10px] pl-[14px] pr-[42px] text-left text-gray-900 border border-gray-300 focus:outline-none sm:text-sm sm:leading-6'
      >
        <span className='flex items-center'>
          {selected ? (
            <Image
              width={24}
              height={24}
              src={`${selected.thumbnail.path}.${selected.thumbnail.extension}`}
              alt={`${selected.name} avatar`}
              className='flex-shrink-0 rounded-full'
            />
          ) : (
            <User size={20} className='text-gray-400' aria-hidden='true' />
          )}
          <span className='ml-2 block truncate text-base font-medium text-gray-900'>
            {selected?.name || 'Selecione um agente'}
          </span>
        </span>

        <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-[14px]'>
          {isOpen ? (
            <ChevronUp size={20} className='text-gray-400' aria-hidden='true' />
          ) : (
            <ChevronDown
              size={20}
              className='text-gray-400'
              aria-hidden='true'
            />
          )}
        </span>
      </div>

      <div
        aria-hidden={isOpen ? 'false' : 'true'}
        className='transition ease-in duration-100 aria-[hidden=true]:opacity-0 aria-[hidden=true]:pointer-events-none visible opacity-100'
      >
        <div className='mt-2 absolute z-10 max-h-56 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-select focus:outline-none sm:text-sm'>
          {heroes.map((hero) => (
            <div
              key={hero.id}
              onClick={() => {
                setSelected(hero);
                setIsOpen(false);
              }}
              className='hover:bg-gray-50 cursor-pointer relative select-none py-[10px] pl-[14px] pr-9'
            >
              <div className='flex items-center'>
                <Image
                  width={24}
                  height={24}
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt={`${hero.name} avatar`}
                  className='flex-shrink-0 rounded-full'
                />
                <span className='data-[active=true]:font-semibold ml-2 block truncate text-base font-medium text-gray-900'>
                  {hero.name}
                </span>
              </div>

              {selected?.id === hero.id ? (
                <span className='data-[active=true]:text-white text-blue-800 absolute inset-y-0 right-0 flex items-center pr-[14px]'>
                  <CheckIcon size={18} aria-hidden='true' />
                </span>
              ) : null}
            </div>
          ))}

          {isHeroesUnavailable && (
            <div className='hover:bg-gray-50 cursor-pointer relative select-none py-[10px] pl-[14px] pr-9'>
              <div
                className='flex items-center'
                onClick={() => setIsOpen(false)}
              >
                <X
                  size={20}
                  className='flex-shrink-0 rounded-full text-gray-400'
                />
                <span className='data-[active=true]:font-semibold ml-2 block truncate text-base font-medium text-gray-900'>
                  Missão em andamento...
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
