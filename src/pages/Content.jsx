import React, { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
const Content = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  };
  const hadleFocus = (e) => {
    e.preventDefault();
    setisLoading(true);

    emailjs.form(
     import.meta.env.VITE_APP_EMAILJS_ID,
     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
     {
      form_name: form.name,
      to_name:"Emine",
      form_email:form.mail,
      to_email:'ugurlu34emine@gmail.com',
      message:form.message
     },
     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY 
    ).then(() =>{
        setisLoading(false);

    }).catch((error) =>{
       setisLoading(false);
       console.log(error);
    }
    )
  };
  const handleBlur = () => {};
  const handleSubmit = () => {}
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14">
        
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Emine"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={hadleFocus}
              onBlur={handleBlur}
            ></input>
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="ugurlu34emine@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={hadleFocus}
              onBlur={handleBlur}
            ></input>
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="input"
              placeholder="Let me kanow how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={hadleFocus}
              onBlur={handleBlur}
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={hadleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Content;
