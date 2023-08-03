'use client';

import { Hero } from '@/types/hero';
import { Dot } from 'lucide-react';
import { Card } from './Card';
import Image from 'next/image';

type HeroInfoProps = {
  hero: Hero;
  type: 'description' | 'comics' | 'series' | 'events' | 'stories';
};

export function HeroInfo({ hero, type }: HeroInfoProps) {
  if (type === 'description') {
    return (
      <Card className='mt-7 bg-white py-[42px] px-[34px] gap-8'>
        <Image
          width={90}
          height={90}
          className='aspect-square rounded-full object-cover'
          alt={`${hero.name} thumbnail`}
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        />

        <div className='flex flex-col'>
          <h1 className={'text-2xl font-bold text-blue-800 tracking-[-0.72px]'}>
            {hero.name}
          </h1>

          <p className='mt-2 text-gray-600 font-semibold leading-[24.56px] tracking-[-0.48px]'>
            {hero.description}
          </p>
        </div>
      </Card>
    );
  }

  if (hero[type].items.length === 0) {
    return (
      <h2 className='mt-4 font-bold text-blue-800'>
        <span className='text-orange-400'>Nenhum</span> dado cadastrado.
      </h2>
    );
  }

  return (
    <ul className='mt-10 flex max-h-full flex-col flex-wrap items-start justify-start'>
      {hero[type].items.map(({ name }) => (
        <li
          key={name}
          className='flex items-center font-semibold text-gray-500 transition'
        >
          <Dot size={32} /> {name}
        </li>
      ))}
    </ul>
  );
}
