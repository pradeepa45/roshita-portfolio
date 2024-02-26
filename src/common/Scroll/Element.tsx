'use client'

import {Element} from 'react-scroll'

interface ElementProps {
  name: string
  children: React.ReactNode
  className?: string
}

export default function ScrollElement({name, children, className}:ElementProps) {
  return (
    <Element name={name} className={className}>
      {children}
    </Element>
  )
}