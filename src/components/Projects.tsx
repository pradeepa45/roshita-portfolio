'use client'

import React from "react"
import Image from 'next/image'
import { Badge, Button, Card, Carousel } from 'antd'
import Link from 'next/link'

import { projects } from '@/constants/projects'

export default function Projects() {
  return (
    <div className='grid lg:grid-cols-6 py-20 text-black md:grid-cols-[auto,1fr,1fr,auto] sm:grid-cols-1'>
      <div className='lg:col-start-2 lg:col-span-4 flex items-center flex-wrap md:col-start-2 md:col-span-2'>
        {projects.map(p => (
          <div className='md:basis-1/2 sm:basis-full' key={p.name}>
            <div className='flex flex-col gap-4 m-4 rounded bg-white'>
            <div className='rounded-t overflow-hidden'>
              <Image src={p.image} fill alt="" className='!relative'/>
            </div>
            <div className='flex justify-between items-baseline px-4'>
              <p className='font-semibold text-lg'>{p.name}</p>
              <Link href={p.url}>&#10230;</Link>
            </div>
            <div className='px-4'>
              <p>{p.description}</p>
            </div>
            <div className='flex flex-wrap gap-4 px-4 pb-4'>
            {p.tags.map(tag => <p key={tag} className='py-2 px-4 bg-slate-300 rounded-full text-xs italic'>{tag}</p>)}
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}