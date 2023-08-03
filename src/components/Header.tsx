import { InputSearch } from './Form/InputSearch';

export function Header() {
  return (
    <div className='min-h-[3.75rem] border-b-[1px] border-divider flex items-center justify-start px-9'>
      <InputSearch />
    </div>
  );
}
