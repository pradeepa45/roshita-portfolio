'use client'

import Button from '@/common/Form/Button'
import scroller from '@/hooks/scroller'
import Image from 'next/image'

import img from '@/smt.svg'
import { ChevronsDown } from 'react-feather'

export default function Hero() {
  return (
    <div className='flex relative items-center'>
      <div className="flex flex-col items-center justify-center w-full min-h-screen -mt-10 gap-4 hero z-10">
        <h1 className='text-7xl'>Hola!</h1>
        <div className='md:w-1/2 md:px-0 px-4'>
        <p className='md:py-6 text-center'>
          Nam sit amet magna id orci placerat facilisis. Etiam orci metus, condimentum facilisis imperdiet non, convallis quis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ac nunc commodo, consequat leo nec, dictum purus. Phasellus at porta eros. Etiam tristique egestas tellus vitae congue. Nam ut maximus.
        </p>
        </div>
        <Button 
          onClick={()=>{scroller.to('projects')}} 
          className='font-medium py-3 px-6 rounded-full border border-light hover:bg-light hover:text-primary animate-bounce'
          icon={<ChevronsDown size={24} className='ml-1' />}
        >
          Checkout my projects
        </Button>
      </div>
        <Image src='https://r-prf.s3.ap-southeast-2.amazonaws.com/images/hero-bg.svg' fill alt="" className='object-cover' />
    </div>
  )
}