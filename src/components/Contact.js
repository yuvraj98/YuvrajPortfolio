import React from "react";

const Contact = () => {
  return (
    <section className="relative mx-auto py-16 bg-gradient-to-r from-black to-gray-700" id="contact-me">
      <div className="container mx-auto flex flex-col items-center py-20">
        <h1 className="text-6xl font-extrabold mb-8 text-[#AFB2BF] font-mono">Contact Me</h1>
        <div className="flex flex-col items-center w-full sm:w-2/3">
          <form action="https://formspree.io/f/mayvjogv" method="POST" className="space-y-4 w-full">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-4 text-gray-800 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-4 text-gray-800 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-4 text-gray-800 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" required></textarea>
            <button type="submit" className="w-full p-4 bg-violet-400 hover:bg-violet-600 text-white font-semibold rounded-md transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
