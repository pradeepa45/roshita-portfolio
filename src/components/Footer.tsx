import Link from 'next/link'

import { mails, socials } from '@/constants/footer'
import ScrollElement from '@/common/Scroll/Element'

export default function Footer() {
  return (
    <ScrollElement name='about' className='sm:px-8 bg-text-primary text-secondary px-4'>
      <div className='flex md:justify-end w-full py-12 border-b border-secondary lg:gap-12 sm:gap-4 gap-0 flex-wrap justify-center flex-row-reverse sm:flex-row'>
        <div className='flex flex-col items-end basis-1/2 sm:basis-auto'>
          <p className='sm:text-2xl font-black sm:mb-6 mb-2 text-sm border-b border-secondary '>Contact</p>
          {mails.map(mail => (
            <Link key={mail} href={`mailto:${mail}`} className='sm:text-base text-xs'>{mail}</Link>
          ))}
        </div>
        <div className='flex flex-col items-end basis-1/2 sm:basis-auto'>
          <p className='sm:text-2xl font-black sm:mb-6 mb-2 text-sm border-b border-secondary '>Socials</p>
          {socials.map(item => (
              <Link href={item.url} key={item.slug} className='sm:text-base text-xs'>{item.name}</Link>
          ))}
        </div>
        <div className='sm:flex flex-col items-end hidden sm:basis-auto'>
        <p className='sm:text-2xl font-black sm:mb-6 mb-2 text-sm border-b border-secondary '>Address</p>
          <p className='sm:text-base text-xs'>Hartford, CT</p>
        </div>
        
      </div>
      <div className='py-2 flex justify-end items-center text-xs'>
        <p>Copyright © 2024</p>
      </div>
    </ScrollElement>
  )
}