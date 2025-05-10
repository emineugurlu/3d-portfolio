import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import Fox from "../models/Fox";
import Alert from "../components/Alert";
import useAlert from "../hooks/useAlert";

const Content = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setCurrentAnimation("walk");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Emine",
          from_email: form.email,
          to_email: "ugurlu34emine@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showAlert({ text: "Message sent successfully!", type: "success" });
        setIsLoading(false);
        setCurrentAnimation("idle");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsLoading(false);
        setCurrentAnimation("walk.left");
        showAlert({ text: "I didn't receive your message", type: "danger" });
      });
  };

  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
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
              onBlur={handleBlur}
            />
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
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="input"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full h-[300px] md:h-[400px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Content;
