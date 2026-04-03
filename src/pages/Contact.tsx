import React, { useState } from 'react';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending"); // ✅ important

    emailjs.send(
      "service_jyh9voi",
      "template_b1n748y",
      formData,
      "6l6ar2FgpO25YT_zY"
    )
    .then(() => {
      setStatus("success");
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(() => {
      setStatus("error");
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden 
    bg-gradient-to-b from-black via-[#021633] to-black text-white">

      {/* 🔥 BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1400px] 
      bg-yellow-400/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] 
      bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* 🔹 HERO */}
      <section className="pt-24 pb-14 text-center px-6 relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              CONTACT US
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* 🔹 CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 items-stretch">

        {/* 📍 LEFT CARD */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl 
        border border-white/10 p-8 shadow-lg flex flex-col justify-between h-full">

          {/* content */}
          <div className="space-y-6 text-gray-300 flex-1">

            <h2 className="text-2xl font-semibold text-blue-200">
              Get in Touch
            </h2>

            <p className="text-gray-400">
              Feel free to reach out for inquiries, collaborations, or support.
            </p>

            {/* Address */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <MapPin className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Address</h3>
                <p>University of Sri Jayewardenepura</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <Mail className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p>japuraleos@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <Phone className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p>+94 76 566 8168</p>
              </div>
            </div>
          </div>

          {/* ✅ BUTTON aligned bottom */}
          <a
            href="https://whatsapp.com/channel/0029VbBl2LbBA1f0ErBjKg1T"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-3 text-center block rounded-full font-bold 
            text-white no-underline
            bg-gradient-to-r from-blue-500 to-indigo-500 
            hover:scale-105 transition duration-300"
          >
            Join With Our WhatsApp Channel
          </a>
        </div>

        {/* 📄 RIGHT CARD */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl 
        border border-white/10 p-8 shadow-lg flex flex-col justify-between h-full">

          <h2 className="text-2xl font-semibold mb-6 text-blue-200">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 
              focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 
              focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 
              focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 
              focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-full font-bold 
              bg-gradient-to-r from-blue-500 to-indigo-500 
              hover:scale-105 transition duration-300 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p className="text-green-400 text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                ❌ Failed to send message.
              </p>
            )}

          </form>
        </div>

      </section>

      {/* 🌍 MAP SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-white/5 backdrop-blur-md rounded-2xl 
        border border-white/10 overflow-hidden shadow-lg hover:shadow-blue-400/30 transition">

          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-200">
              Find Us Here
            </h2>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3152256557387!2d79.89882099678958!3d6.852767000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a8936886579%3A0xa8c769f4b86d85b5!2sUniversity%20of%20Sri%20Jayewardenepura!5e0!3m2!1sen!2slk!4v1774989129529!5m2!1sen!2slk"
            className="w-full h-[400px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Contact;