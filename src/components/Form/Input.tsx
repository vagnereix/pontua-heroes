import { Eye, EyeOff, LucideIcon } from 'lucide-react';
import { ComponentProps, ForwardedRef, forwardRef, useState } from 'react';

interface InputProps extends ComponentProps<'input'> {
  Icon?: LucideIcon;
  iconSize?: number;
}

export const Input = forwardRef(function MyInput(
  { Icon, iconSize = 20, type: receivedType, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [currentType, setCurrentType] = useState(receivedType);

  function handleViewPassword() {
    setCurrentType((state) => (state === 'password' ? 'text' : 'password'));
  }

  const passwordIconClass =
    'group-focus text-gray-400 absolute right-[15px] top-[23px] cursor-pointer hover:text-blue-600 transition-colors';

  return (
    <div className='flex relative justify-center items-center'>
      <input
        {...rest}
        ref={ref}
        id={currentType}
        type={currentType}
        className='group reveal-hidden w-full tracking-[-1.04px] placeholder:tracking-[-0.9px] placeholder:text-gray-400 placeholder:font-normal rounded-[10px] border-[0.7px] border-gray-400 focus:border-blue-500 py-5 px-[15px] outline-none font-bold text-blue-500'
      />

      {currentType !== 'password' && Icon && (
        <Icon
          size={iconSize}
          className='group-focus text-gray-400 absolute right-[15px] top-[23px] cursor-text hover:text-blue-600 transition-colors'
        />
      )}

      {currentType === 'password' && (
        <Eye
          size={22}
          onClick={handleViewPassword}
          className={passwordIconClass}
        />
      )}

      {currentType === 'text' && receivedType === 'password' && (
        <EyeOff
          size={22}
          onClick={handleViewPassword}
          className={passwordIconClass}
        />
      )}
    </div>
  );
});
