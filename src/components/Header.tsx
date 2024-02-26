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
    <div className='sticky top-0 left-0 right-0'>
      <div className='flex p-4 items-center justify-end gap-6'>
      {headerLinks.map(({title, to, href},index) => (
        <Button key={index} onClick={()=>handleClick(to,href)} className='py-2'>
          {title}
        </Button>
      ))}
      <Button className='rounded-full px-6 py-2 border'>
        My resume
      </Button>
      </div>
    </div>
  )
}