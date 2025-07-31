import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2t16wny',
      'template_82gxg3l',
      form.current,
      'AGr-uJH-OzejIFZmF'         
    )
    .then(() => {
      setSent(true);
      form.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
    });
  };

  return (
    <div className="flex flex-col lg:block items-center w-full lg:w-[50vw] py-10 lg:pr-16 pl-0 bg-[#121212] text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 w-full">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-2 rounded-md bg-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-2 rounded-md bg-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="p-2 rounded-md bg-[#1c1c1c] resize-none focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <button
          type="submit"
          className="bg-[#1c1c1c] hover:bg-[#121212] text-white py-2 px-4 rounded-md transition-colors duration-300 hover:cursor-pointer"
        >
          Send Message
        </button>
        {sent && <p className="text-green-400 text-sm mt-2 text-center">Message sent successfully!</p>}
      </form>
    </div>
  );
}
