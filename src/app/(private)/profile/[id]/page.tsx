import { AvailableTabs } from '@/components/AvailableTabs';
import { marvelApi } from '@/services/api';
import { Epilogue } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

type ProfileProps = {
  params: {
    id: number;
  };
};

const epilogue = Epilogue({ subsets: ['latin'] });

export async function generateMetadata({ params }: ProfileProps) {
  const { id } = params;
  const { data } = await marvelApi.get(`/characters/${id}`);
  return {
    title: data.data.results[0]?.name,
  };
}

export default async function SpecificProfilePage({ params }: ProfileProps) {
  const { id } = params;
  const { data } = await marvelApi.get(`/characters/${id}`);

  return (
    <div className='px-10 py-6'>
      <h1
        className={twMerge(
          'text-2xl font-bold text-blue-800 tracking-[-0.72px]',
          epilogue.className
        )}
      >
        Perfil <span className='text-orange-400'>/</span>{' '}
        <span className='font-light text-gray-500 leading-normal'>
          {data.data.results[0]?.name}
        </span>
      </h1>

      <AvailableTabs heroData={data.data.results[0]} />
    </div>
  );
}
