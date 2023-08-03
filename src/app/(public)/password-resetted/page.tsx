import { Button } from './components/ButtonSignIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tudo certo',
};

export default function PasswordResettedPage() {
  return (
    <>
      <h1 className='font-bold text-blue-800 text-4xl tracking-[-2.34px]'>
        Tudo certo <span className='text-orange-400'>;)</span>
      </h1>

      <span className='text-gray-500 leading-5 tracking-[-1.04px] block mb-[6px]'>
        Foi enviado um e-mail para você com instruções de como redefinir a sua
        senha.
      </span>

      <Button />
    </>
  );
}
