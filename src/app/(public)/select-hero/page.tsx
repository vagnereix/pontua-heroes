import { marvelApi } from '@/services/api';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';
import { SelectHero } from './components/SelectHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selecionar agente',
};

export default async function SelectHeroPage() {
  const { data } = await marvelApi.get('/characters', {
    params: {
      limit: 10,
    },
  });

  if (data.code !== 200) {
    toast.error('Erro ao buscar heróis');

    setTimeout(() => {
      redirect('/dashboard');
    }, 3000);
  }

  return (
    <>
      <h1 className='font-bold text-blue-800 text-4xl tracking-[-2.34px]'>
        Selecione o seu agente mais legal
        <span className='text-orange-400'>.</span>
      </h1>

      <section className='w-full flex flex-col'>
        <span className='text-gray-500 leading-5 tracking-[-1.04px] block mb-[6px]'>
          Tenha a visão completa do seu agente.
        </span>

        <SelectHero heroes={data.data.results} />
      </section>
    </>
  );
}
