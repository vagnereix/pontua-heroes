'use client';

import { ArrowLeft, AtSign, Loader2 } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Input } from '@/components/Form/Input';
import { useRouter } from 'next/navigation';

export function ResetPasswordForm() {
  const { push, replace } = useRouter();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <form
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
          replace('/password-resetted');
        }, 1000);
      }}
    >
      <span className='text-gray-500 leading-5 tracking-[-1.04px] block mb-[6px]'>
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um
        link com as instruções para você redefinir a sua senha.
      </span>

      <div className='flex flex-col gap-6'>
        <Input
          type='email'
          name='email'
          Icon={AtSign}
          placeholder='Informe seu e-mail'
          onChange={(e) => setEmail(e.target.value)}
          className='group w-full tracking-[-1.04px] placeholder:tracking-[-0.9px] placeholder:text-gray-400 placeholder:font-normal rounded-[10px] border-[0.7px] border-gray-400 focus:border-blue-500 py-5 px-[15px] outline-none font-bold text-blue-500'
        />
      </div>

      <button
        type='submit'
        data-loading={loading}
        disabled={email.trim() === ''}
        className='data-[loading=true]:disabled:bg-blue-800 disabled:bg-gray-200 text-2xl py-4 w-full flex items-center justify-center gap-[10px] mt-[11px] rounded-[10px] bg-blue-800 text-white font-bold'
      >
        {loading ? (
          <Loader2 size={32} className='animate-spin text-white' />
        ) : (
          <>enviar link</>
        )}
      </button>

      <span
        onClick={() => push('/sign-in')}
        className='cursor-pointer text-orange-500 text-[11px] justify-end flex gap-1 mt-5'
      >
        <ArrowLeft size={14} />
        Já tenho uma conta
      </span>
    </form>
  );
}
