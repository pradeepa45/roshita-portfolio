import { techstack } from '@/constants/tech'
import { Compass } from 'react-feather'

export default function Tiles() {
  return (
    <div className='grid lg:grid-cols-6 py-20  md:grid-cols-[auto,1fr,1fr,auto] sm:grid-cols-1 sm:px-0 px-2'>
      <div className='lg:col-start-2 lg:col-span-4 flex items-center flex-wrap md:col-start-2 md:col-span-2 justify-center'>
      {techstack.map((tile, index) => (
        <div
          className="md:basis-1/3 group hover:no-underline hover:cursor-pointer max-h-[375px] basis-1/2"
          key={index}
        >
            <div className="bg-text-primary px-6 sm:py-16 py-6 rounded-xl border border-text-primary flex flex-col overflow-hidden
              shadow-sm hover:shadow-md m-2 text-secondary"
            >
              <div className="flex sm:justify-start sm:mb-0 mb-2 group-hover:transition-all
                group-hover:duration-500 group-hover:ease-in-out sm:group-hover:translate-y-[-50%] sm:group-hover:opacity-0 transition-none"
              >
                <Compass className='motion-safe:animate-spin' size={32} strokeWidth={1}/>
              </div>
              <p className="text-xl sm:mt-4 font-bold sm:group-hover:transition-all sm:group-hover:translate-y-[-90px]
                group-hover:duration-500 group-hover:ease-in-out transition-none mt-0"
              >{tile.name}
              </p>
              <p className="h-0 opacity-0 sm:block sm:group-hover:transition-all sm:group-hover:translate-y-[-85px] text-sm
                  sm:group-hover:duration-500 sm:group-hover:ease-in-out group-hover:opacity-100 transition-none hidden"
              >{tile.description}
              </p>
            </div>
          </div>
      ))}
      </div>
    </div>
  )
}

