import React, { useState } from 'react'


const Content = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const handleChange = () => {};
  const hadleFocus = () => {};
  const handleBlur = () => {};
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
     <div className="flex-1 min-w-[50%] flex flex-col">
      <h1 className='head-text'>Get in Touch</h1>

      <form className='w-full flex flex-xol gap-7 mt-14'>
      <label className='text-black-500 font-semibold'>
        Name
        <input
         type="text"
         name="name"
         className='input'
         placeholder='Emine'
         required
         value={form.name}
         onChange={handleChange}
         onFocus={hadleFocus}
         onBlur={handleBlur}
        ></input>
      </label>

      <label className='text-black-500 font-semibold'>
        Email
        <input
         type="email"
         name="email"
         className='input'
         placeholder='ugurlu34emine@gmail.com'
         required
         value={form.email}
         onChange={handleChange}
         onFocus={hadleFocus}
         onBlur={handleBlur}
        ></input>
      </label>

      <label className='text-black-500 font-semibold'>
        Your Message
        <textarea
         name="message"
         rows={4}
         className='input'
         placeholder='Let me kanow how I can help you!'
         required
         value={form.message}
         onChange={handleChange}
         onFocus={hadleFocus}
         onBlur={handleBlur}
        ></textarea>
      </label>
      </form>
     </div>

    </section>
  )
}

export default Content