import Image from 'next/image'

import ScrollElement from '@/common/Scroll/Element'
import Form from '@/components/Contact'
import Projects from '@/components/Projects'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <ScrollElement name="projects" className='min-h-screen py-10'>
        <p className='text-5xl text-center mb-4'>Projects</p>
        <p className='text text-center'>A glimpse into my work</p>
        <Projects />
      </ScrollElement>
    </main>
  );
}

