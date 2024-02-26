'use client'

import Button from '@/common/Form/Button'
import scroller from '@/hooks/scroller'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen -mt-10 md:py-20">
        <h1 className='text-7xl'>Hola!</h1>
        <div className='w-2/3 mx-auto'>
        <p className='py-10 text-center'>
          Nam sit amet magna id orci placerat facilisis. Etiam orci metus, condimentum facilisis imperdiet non, convallis quis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ac nunc commodo, consequat leo nec, dictum purus. Phasellus at porta eros. Etiam tristique egestas tellus vitae congue. Nam ut maximus.
        </p>
        </div>
        <Button onClick={()=>{scroller.to('projects')}} className='py-2 px-4 rounded-full border'>Checkout my projects</Button>
      </div>
  )
}