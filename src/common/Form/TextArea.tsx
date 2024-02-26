'use client'

import classNames from 'classnames'

interface InputProps {
  className?: string
  name: string
  label: string
  placeholder?: string
  value: string
  onChange?: VoidFunction
}

export default function TextArea({className, label, name, placeholder, value, onChange}:InputProps) {
  return (
    <div className={classNames('flex flex-col', className)}>
      <span className='text-xs mb-2'>{label}</span>
      <textarea 
      className='p-2 bg-white text-black rounded-xl resize-none' 
      onChange={onChange} 
      name={name}
      value={value}
      placeholder={placeholder} 
    />
    </div>
  )
}