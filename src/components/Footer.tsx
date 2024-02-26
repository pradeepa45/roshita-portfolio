import Link from 'next/link'

import { mails, socials } from '@/constants/footer'
import ScrollElement from '@/common/Scroll/Element'

export default function Footer() {
  return (
    <ScrollElement name='about' className='px-8 bg-white text-black'>
      <div className='flex justify-end w-full gap-12 py-12 border-y'>
        <div className='flex flex-col items-end'>
          <p className='text-2xl mb-6'>Contact</p>
          {mails.map(mail => (
            <Link key={mail} href={`mailto:${mail}`} className='mb-4'>{mail}</Link>
          ))}
          </div>
          <div className='flex flex-col items-end'>
          <p className='text-2xl mb-6'>Address</p>
            <p className='mb-4'>Line 1, Middleton</p>
            <p className='mb-4'>Nowhereville</p>
          </div>
          <div className='flex flex-col items-end'>
            <p className='text-2xl mb-6'>Socials</p>
            {socials.map(item => (
                <Link href={item.url} key={item.slug} className='mb-4'>{item.name}</Link>
            ))}
          </div>
        </div>
        <div className='py-4 flex justify-end items-center'>
          <p>Copyright © 2024</p>
        </div>
    </ScrollElement>
  )
}