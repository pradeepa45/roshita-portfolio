import ScrollElement from '@/common/Scroll/Element'
import Projects from '@/components/Projects'
import Hero from '@/components/Hero'
import ScrollToTop from '@/components/ScrollToTop'
import TechStack from '@/components/TechTags'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative">
      <Hero />
      <ScrollElement name="projects" className='min-h-screen py-16 flex flex-col items-center'>
        <p className='sm:text-5xl text-center mb-4 text-3xl'>Ideas I have worked on</p>
        <div className='pt-8 py-4'>
        <p className='text-center'>Technologies I use</p>
        <TechStack />
        </div>
        <Projects />
      </ScrollElement>
      <ScrollToTop />
    </main>
  )
}

