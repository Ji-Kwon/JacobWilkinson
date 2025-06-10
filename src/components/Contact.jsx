export default function Contact() {
    return (
      <div className="w-[50vw] mx-auto p-6 bg-[#1c1c1c] rounded-lg shadow-md text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded-md bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded-md bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-2 rounded-md bg-[#2a2a2a] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  