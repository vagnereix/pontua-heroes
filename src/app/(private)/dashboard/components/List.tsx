'use client';

import { Card } from '@/components/Card';
import { Divider } from '@/components/Divider';
import { Pagination } from '@/components/Pagination';
import { Epilogue } from 'next/font/google';
import { useRouter } from 'next/navigation';

import { Skeleton } from './Skeleton';
import { useSearch } from '@/contexts/useSearch';

const epilogue = Epilogue({ subsets: ['latin'] });

export function List() {
  const {
    loading,
    setLoading,
    heroes,
    totalHeroes,
    setOffset,
    setCurrentPage,
  } = useSearch();

  const { push } = useRouter();
  const charactersPerPage = 10;

  async function changePage(selectedItem: { selected: number }) {
    setLoading(true);
    const { selected } = selectedItem;

    setCurrentPage(selected);
    setOffset(selected * charactersPerPage);
  }

  return (
    <div className='h-full overflow-auto'>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <div className='px-7 py-5 grid grid-cols-4 gap-[10px]'>
            {heroes.map((hero) => (
              <Card
                key={hero.id}
                onClick={() => push(`/profile/${hero.id}`)}
                className='hero-card cursor-pointer hover:-translate-y-[2px] transition-all h-[150px] min-w-[230px]'
              >
                <img
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt={`${hero.name} thumbnail`}
                  className='object-cover max-w-[83px] h-full aspect-[3/4] rounded-xl '
                />

                <div className='flex flex-col gap-2'>
                  <strong className={'text-black font-bold text-base'}>
                    {hero.name}
                  </strong>

                  <span
                    className={`${epilogue.className} leading-3 overflow-ellipsis font-light text-xs text-black line-clamp-6 tracking-[-0.36px]`}
                  >
                    {hero.description}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <Divider />

          <Pagination
            changePage={changePage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
            pageCount={Math.ceil(totalHeroes / 10)}
          />
        </>
      )}
    </div>
  );
}
