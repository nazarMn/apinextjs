import Head from 'next/head'
import { useState } from 'react'

export default function about() {
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
        <>
<Head>
  <title>Про нас | MySite</title>
  <meta name="description" content="Дізнайся більше про нас" />

  
  <meta property="og:title" content="Про нас | MySite" />
  <meta property="og:description" content="Дізнайся більше про нас" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://9x4bk6kg-3000.euw.devtunnels.ms/about" />
  <meta property="og:image" content="https://9x4bk6kg-3000.euw.devtunnels.ms/hacker.png" />

 
  <link rel="icon" href="/hacker.png" type="image/png" />
</Head>


            <main>
            <div className='w-full h-full flex justify-center items-center'>
    <form onSubmit={handleSubmit} className='w-{400px} h-{400px} flex flex-col bg-amber-600'>
      <input type={name} placeholder='name' onChange={(e) => setName(e.target.value)} className='w-full h-10 caret-amber-200 '/>
      <textarea name="message" id="" placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type='submit'>Submit</button>
    </form>
    </div>
            </main>
            
        </>
    )
}