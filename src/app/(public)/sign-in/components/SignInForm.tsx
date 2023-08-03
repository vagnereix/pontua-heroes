'use client';

import { AtSign, Loader2, LogIn, ShieldQuestion } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import { Input } from '@/components/Form/Input';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function SignInForm() {
  const { push, replace } = useRouter();

  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;

    if (!email || !password) {
      setLoading(false);
      return toast.warning('Preencha todos os campos');
    }

    const response = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
    });

    if (response?.error) {
      setLoading(false);
      return toast.error(response?.error);
    }

    replace('/select-hero');
  }

  function handleForgotPassword() {
    setLoading(true);
    push('/reset-password');
  }

  return (
    <form onSubmit={handleSubmit}>
      <span className='text-gray-500 leading-5 tracking-[-1.04px] block mb-[6px]'>
        Informe as suas credenciais de acesso ao portal
      </span>

      <div className='flex flex-col gap-6'>
        <Input
          type='email'
          name='email'
          Icon={AtSign}
          ref={emailRef}
          placeholder='Informe seu e-mail'
          className='group w-full tracking-[-1.04px] placeholder:tracking-[-0.9px] placeholder:text-gray-400 placeholder:font-normal rounded-[10px] border-[0.7px] border-gray-400 focus:border-blue-500 py-5 px-[15px] outline-none font-bold text-blue-500'
        />

        <Input
          iconSize={22}
          type='password'
          name='password'
          ref={passwordRef}
          placeholder='Informe sua senha'
          className='group w-full tracking-[-1.04px] placeholder:tracking-[-0.9px] placeholder:text-gray-400 placeholder:font-normal rounded-[10px] border-[0.7px] border-gray-400 focus:border-blue-500 py-5 px-[15px] outline-none font-bold text-blue-500'
        />
      </div>

      <button
        type='submit'
        disabled={loading}
        className='text-2xl py-4 w-full flex items-center justify-center gap-[10px] mt-[11px] rounded-[10px] bg-blue-800 text-white font-bold'
      >
        {loading ? (
          <Loader2 size={32} className='animate-spin text-white' />
        ) : (
          <>
            entrar <LogIn size={14} />
          </>
        )}
      </button>

      <span
        onClick={handleForgotPassword}
        className='select-none cursor-pointer text-orange-500 text-[11px] justify-end flex gap-1 mt-5'
      >
        <ShieldQuestion size={14} />
        Esqueceu a senha?
      </span>
    </form>
  );
}
