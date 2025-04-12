import React from 'react'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name, message)
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message })
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className='w-full h-full flex justify-center items-center'>
    <form onSubmit={handleSubmit} className='w-{400px} h-{400px} flex flex-col bg-amber-600'>
      <input type={name} placeholder='name' onChange={(e) => setName(e.target.value)} className='w-full h-10 caret-amber-200 '/>
      <textarea name="message" id="" placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
