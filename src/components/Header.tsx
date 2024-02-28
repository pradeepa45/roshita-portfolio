'use client'

import headerLinks from '@/constants/header'
import scroller from '@/hooks/scroller'
import Button from '@/common/Form/Button'
import { useRouter } from 'next/navigation'
import { Download } from 'react-feather'

export default function Header() {
  const router = useRouter()
  const handleClick = (to?:string, href?:string) => {
    if(to) {
      scroller.to(to)
    }
    if(href) {
      router.push(href)
    }
  }
  return (
    <header className='sticky top-0 left-0 right-0 z-50 shadow-sm border-b border-text-primary'>
      <div className='flex items-center justify-between max-w-[80rem] mx-auto lg:px-0 px-4'>
      <div className='sm:flex w-[140px] text-3xl hidden'>
        <Button onClick={()=>{scroller.top()}}>
          Roshita
        </Button>
      </div>
      <div className='sm:hidden text-base flex'>
        <Button onClick={()=>{scroller.top()}} className='border rounded-full px-3 py-2 border-text-primary'>
          RS
        </Button>
      </div>
      <div className='sm:flex p-4 items-center justify-center gap-12 opacity-100 hidden'>
      {headerLinks.map(({title, to, href},index) => (
        <Button key={index} onClick={()=>handleClick(to,href)} className='my-2 text-lg border-b border-primary  hover:border-text-primary'>
          {title}
        </Button>
      ))}
      
      </div>
      <Button 
        className='rounded-full text-text-primary px-6 py-2 border border-text-primary hover:bg-text-primary hover:text-primary transition-all duration-100 sm:text-lg sm:my-0 my-4 text-sm'
        icon={<Download className='ml-2' />}
        >
        Resume
      </Button>
      </div>
    </header>
  )
}