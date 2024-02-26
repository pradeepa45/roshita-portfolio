'use client'

import Button from '@/common/Form/Button'
import Input from '@/common/Form/Input'
import TextArea from '@/common/Form/TextArea'
import React from 'react'

export default function Form() {
  const [responses, setFormResponse] = React.useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [formState, setFormState] = React.useState({
    submitting: '',
    submitted: '',
    success: ''
  })

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 rounded-2xl p-4 bg-white text-black'>
      <Input name="name" value={responses.name} onChange={()=>{handleChange()}} label="What should I call you?" className=''/>
      <Input name="email" value={responses.email} onChange={()=>{handleChange()}} label="Your email" type="email"/>
      <TextArea name='message' value={responses.message} onChange={()=>{handleChange()}} label="Say hi!"  />
      <Button type='submit' className='px-4 py-2 rounded-full border w-fit mx-auto'>Send it!</Button>
    </form>
  )
}