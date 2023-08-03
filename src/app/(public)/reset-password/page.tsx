import { Metadata } from 'next';
import { ResetPasswordForm } from './components/ResetPasswordForm';

export const metadata: Metadata = {
  title: 'Recuperar senha',
};

export default function ResetPasswordPage() {
  return (
    <>
      <h1 className='font-bold text-blue-800 text-4xl tracking-[-2.34px]'>
        Recuperar senha
        <span className='text-orange-400'>.</span>
      </h1>

      <ResetPasswordForm />
    </>
  );
}
