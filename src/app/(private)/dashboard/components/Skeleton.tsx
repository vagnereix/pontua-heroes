import { Divider } from '@/components/Divider';

export function Skeleton() {
  const skeletonsList = Array.from({ length: 10 });

  return (
    <div className='w-full h-full overflow-auto'>
      <div className='px-7 py-5 grid grid-cols-4 gap-[10px]'>
        {skeletonsList.map((_, index) => (
          <div
            key={index}
            className='rounded-2xl bg-gray-200 shadow-default animate-pulse hero-card h-[150px] min-w-[230px]'
          />
        ))}
      </div>

      <Divider />

      <div className=' flex flex-col items-center'>
        <div className='mt-3 rounded-lg bg-gray-200 animate-pulse w-[520px] h-10' />
      </div>
    </div>
  );
}
