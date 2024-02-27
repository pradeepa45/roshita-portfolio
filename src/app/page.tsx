import ScrollElement from '@/common/Scroll/Element'
import Projects from '@/components/Projects'
import Hero from '@/components/Hero'
import TechStack from '@/components/Tech'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative">
      <Hero />
      <ScrollElement name="projects" className='min-h-screen py-16'>
        <p className='sm:text-5xl text-center mb-4 text-3xl'>Projects</p>
        <p className='text text-center'>A glimpse into my work</p>
        <Projects />
      </ScrollElement>
      <ScrollElement name="tech" className='min-h-screen py-10 flex flex-col justify-center'>
        <p className='sm:text-5xl text-center mb-4 text-3xl'>Technologies I use</p>
        <TechStack />
      </ScrollElement>
      <ScrollToTop />
    </main>
  )
}

