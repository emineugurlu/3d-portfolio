import React, { useState } from 'react'


const Content = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const handleChange = () => {};
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
        ></input>
      </label>
      </form>
     </div>

    </section>
  )
}

export default Content