'use client'

import headerLinks from '@/constants/header'
import scroller from '@/hooks/scroller'
import Button from '@/common/Form/Button'
import { useRouter } from 'next/navigation'

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
    <header className='sticky top-0 left-0 right-0 z-50 shadow-sm border-b'>
      <div className='lg:flex p-4 items-center justify-center gap-12 opacity-100 sm:hidden'>
      {headerLinks.map(({title, to, href},index) => (
        <Button key={index} onClick={()=>handleClick(to,href)} className='py-2 text-lg'>
          {title}
        </Button>
      ))}
      <Button className='rounded-full text-white px-6 py-2 border hover:bg-white hover:text-primary transition-all duration-100 text-lg'>
        My resume
      </Button>
      </div>
    </header>
  )
}