import { Metadata } from 'next';
import { SignInForm } from './components/SignInForm';

export const metadata: Metadata = {
  title: 'Entrar',
};

export default function SignInPage() {
  return (
    <>
      <h1 className='font-bold text-blue-800 text-4xl tracking-[-2.34px]'>
        Bem-vindo
        <span className='text-orange-400'>.</span>
      </h1>

      <SignInForm />
    </>
  );
}
