'use client';

import { Tab } from './Tab';
import { Divider } from './Divider';
import { HeroInfo } from './HeroInfo';
import { Hero } from '@/types/hero';
import { useState } from 'react';

type TabType = 'description' | 'comics' | 'series' | 'events' | 'stories';

const tabs = [
  {
    name: 'Visão geral',
    value: 'description',
  },
  {
    name: 'Comics',
    value: 'comics',
  },
  {
    name: 'Series',
    value: 'series',
  },
  {
    name: 'Events',
    value: 'events',
  },
  {
    name: 'Stories',
    value: 'stories',
  },
];

export function AvailableTabs({ heroData }: { heroData: Hero }) {
  const [activeTab, setActiveTab] = useState<TabType>('description');

  return (
    <>
      <div className='mt-6 flex gap-4'>
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            active={activeTab === tab.value}
            onSelected={() => setActiveTab(tab.value as TabType)}
          >
            {tab.name}
          </Tab>
        ))}
      </div>

      <Divider />

      <HeroInfo hero={heroData} type={activeTab} />
    </>
  );
}
