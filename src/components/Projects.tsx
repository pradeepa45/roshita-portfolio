'use client'

import React from "react"
import Image from 'next/image'
import Link from 'next/link'

import { projects } from '@/constants/projects'
import Button from '@/common/Form/Button'
import { Globe } from 'react-feather'

export default function Projects() {
  return (
    <div className='grid lg:grid-cols-6  py-2 md:grid-cols-[auto,1fr,1fr,auto] sm:grid-cols-1 mb-16'>
      <div className='lg:col-start-2 lg:col-span-4 flex items-center justify-center flex-wrap md:col-start-2 md:col-span-2'>
        {projects.map((p,index) => (
          <div className='basis-full text-primary' key={`${p.name}-${index}}`}>
            <div className={`flex rounded ${index%2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className='rounded-t basis-1/2 flex flex-col justify-center'>
                <Image 
                  src={p.image}
                  alt=""
                  width={500}
                  height={300}
                  className='rounded-t -z-0 backdrop-brightness-0 grayscale'
                />
                <div className='flex flex-wrap gap-4 py-4'>
                  {p.tags.map((tag,index) => <p key={index} className='py-2 px-4 border-secondary border text-secondary rounded-md text-sm italic'>{tag}</p>)}
                </div>
              </div>
              <div className='flex flex-col basis-1/2 justify-center gap-4 py-12 px-10 text-text-primary'>
              <div className='flex justify-between items-baseline px-4 '>
                <p className='font-semibold text-3xl mb-2.5'>{p.name}</p>
              </div>
              <div className='px-4'>
                <p className='text-sm'>{p.description}</p>
              </div>
              <div className='pb-4 px-4'>
                <Button className="px-6 py-2 border border-secondary text-secondary rounded-md grow font-medium">
                  <Link href={p.url}>Link to project</Link>
                </Button>
              </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}