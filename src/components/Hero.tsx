'use client'

import Button from '@/common/Form/Button'
import scroller from '@/hooks/scroller'

export default function Hero() {
  return (
    <div className="flex flex-col items-center p-24 w-full py-[250px]">
        <h1 className='text-7xl'>Hola!</h1>
        <p className='py-10 max-w-[800px] text-center'>
          Nam sit amet magna id orci placerat facilisis. Etiam orci metus, condimentum facilisis imperdiet non, convallis quis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ac nunc commodo, consequat leo nec, dictum purus. Phasellus at porta eros. Etiam tristique egestas tellus vitae congue. Nam ut maximus.
        </p>
        <Button onClick={()=>{scroller.to('projects')}} className='py-2 px-4 rounded-full border'>Checkout my projects</Button>
      </div>
  )
}