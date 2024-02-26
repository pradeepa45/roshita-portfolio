'use client'

import { Input } from 'antd'
import classNames from 'classnames'

interface InputProps {
  className?: string
  name: string
  label: string
  placeholder?: string
  type?: string
  value: string
  onChange?: VoidFunction
}

export default function FormInput({className, label, name, placeholder, value, type, onChange}:InputProps) {
  return (
    <div className={classNames('flex flex-col', className)}>
      <span className='text-xs mb-2'>{label}</span>
      <Input
       variant='filled'
      type={type }
      onChange={onChange} 
      name={name}
      value={value}
      placeholder={placeholder} 
    />
    </div>
  )
}