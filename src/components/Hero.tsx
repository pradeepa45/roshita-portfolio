'use client'

import React from 'react';
import Button from '@/common/Form/Button';
import { socials } from '@/constants/footer';
import scroller from '@/hooks/scroller';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronsDown, Linkedin, GitHub, Icon } from 'react-feather';
import { bio } from '@/constants/bio'

const iconMap: Record<string, Icon> = { // Add Record<string, Icon> type for iconMap
  'linkedin': Linkedin,
  'github': GitHub
};

export default function Hero() {
  return (
    <div className='flex relative items-center'>
      <div className="flex flex-col items-center justify-center w-full min-h-screen -mt-10 gap-4 hero z-10">
        <h1 className='text-7xl'>Hola!</h1>
        <div className='md:w-2/3 md:px-0 px-4'>
          <p className='md:py-6 text-center'>
            {bio}
          </p>
          <div className='flex items-center justify-center gap-4 my-8'>
          {socials.map(p => {
            const IconComponent = iconMap[p.icon];
            return (
              <Button key={p.slug} className='border border-text-primary rounded-full p-4 flex items-center'>
                <Link href={p.url}>
                  <IconComponent />
                </Link>
              </Button>
            );
          })}
          </div>
        </div>
        <Button 
          onClick={() => { scroller.to('projects') }} 
          className='font-medium py-3 px-6 rounded-full border border-text-primary hover:bg-text-primary hover:text-primary animate-bounce'
          icon={<ChevronsDown size={24} className='ml-1' />}
        >
          Checkout my projects
        </Button>
      </div>
      <Image 
        src='https://r-prf.s3.ap-southeast-2.amazonaws.com/images/hero-bg.svg' 
        fill 
        alt="" 
        className='object-cover'
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
