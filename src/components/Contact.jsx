import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ed016xo',
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
    <div className="w-[50vw] mx-auto p-6 bg-[#1c1c1c] rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-2 rounded-md bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-2 rounded-md bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="p-2 rounded-md bg-[#2a2a2a] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
        >
          Send Message
        </button>
        {sent && <p className="text-green-400 text-sm mt-2 text-center">Message sent successfully!</p>}
      </form>
    </div>
  );
}
