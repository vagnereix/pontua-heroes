import { ComponentProps, ReactNode } from 'react';

interface MenuItemProps extends ComponentProps<'div'> {
  active?: boolean;
  children: ReactNode;
}
export function MenuItem({ active = false, children, ...rest }: MenuItemProps) {
  return (
    <div
      {...rest}
      data-active={active}
      className='hover:bg-gray-background hover:rounded-xl cursor-pointer px-2 py-3 my-[10px] flex gap-[0.875rem] text-sm text-black font-medium items-center data-[active=true]:text-orange-500'
    >
      {children}
    </div>
  );
}
