import { useSearch } from '@/contexts/useSearch';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Epilogue } from 'next/font/google';
import ReactPaginate from 'react-paginate';
import { twMerge } from 'tailwind-merge';

type PaginationProps = {
  pageCount: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  changePage: (selectedItem: { selected: number }) => void;
};

const epilogue = Epilogue({ subsets: ['latin'] });

export function Pagination({
  pageCount,
  changePage,
  pageRangeDisplayed,
  marginPagesDisplayed,
}: PaginationProps) {
  const { currentPage } = useSearch();

  const previousAndNextLinkClassName = twMerge(
    'select-none cursor-pointer text-sm font-medium text-blue-600 h-10 px-4 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50',
    epilogue.className
  );
  const linksClassName = twMerge(
    'select-none text-blue-200 font-medium text-sm w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-gray-50',
    epilogue.className
  );

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={changePage}
      breakLinkClassName={linksClassName}
      containerClassName='flex justify-center mt-3'
      pageLinkClassName={linksClassName}
      activeClassName='text-blue-600 bg-gray-50'
      nextLinkClassName={twMerge(previousAndNextLinkClassName, 'rounded-r-lg')}
      previousLinkClassName={twMerge(
        previousAndNextLinkClassName,
        'rounded-l-lg'
      )}
      previousLabel={
        <>
          <ArrowLeft size={20} className='text-blue-200' />
          Anterior
        </>
      }
      nextLabel={
        <>
          Próxima
          <ArrowRight size={20} className='text-blue-200' />
        </>
      }
    />
  );
}
