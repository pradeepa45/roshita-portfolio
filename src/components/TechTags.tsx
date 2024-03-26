import { techstack } from '@/constants/tech'

export default function TechStack() {
  return (
    <div className='flex flex-wrap py-6 sm:px-0 px-2 gap-2'>
      {techstack.map((tile, index) => (
        <div className='px-2.5 py-1 flex items-center justify-center rounded-md border-2 border-text-primary' key={index}>
          # {tile}
        </div>
      ))}
    </div>
  )
}