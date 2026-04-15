import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white pt-24 pb-10 overflow-visible">

      {/* 🌊 Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 200" className="w-full h-[80px]">
          <path
            fill="#021229"
            d="M0,64L60,69.3C120,75,240,85,360,101.3C480,117,600,139,720,144C840,149,960,139,1080,117.3C1200,96,1320,64,1380,48L1440,32V0H0Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
              M0,64L60,69.3C120,75,240,85,360,101.3C480,117,600,139,720,144C840,149,960,139,1080,117.3C1200,96,1320,64,1380,48L1440,32V0H0Z;
              M0,80L60,90C120,100,240,120,360,110C480,100,600,60,720,70C840,80,960,140,1080,150C1200,160,1320,120,1380,100L1440,80V0H0Z;
              M0,64L60,69.3C120,75,240,85,360,101.3C480,117,600,139,720,144C840,149,960,139,1080,117.3C1200,96,1320,64,1380,48L1440,32V0H0Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021229] via-black to-black"></div>

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-0"></div>
      <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LEFT */}
          <div className="md:col-span-2">
            <Link to="/">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                J'pura D7 Leos
              </h2>
            </Link>

            <p className="text-gray-400 max-w-md mb-6">
              Established in 2019, J'pura D7 Leos empower university youth through community service, leadership, and social impact initiatives.
            </p>

            {/* Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1AfXgPY7Fd/"
                className="p-3 rounded-full bg-white/10 hover:bg-blue-600/30 hover:scale-110 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
              <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/jpurad7leos?utm_source=qr&igsh=MWRwbXZ6bjNseWI3ZA=="
                className="p-3 rounded-full bg-white/10 hover:bg-pink-500/30 hover:scale-110 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/JPuraD7Leos"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.linkedin.com/company/leo-club-of-district-306-d7-university-of-sri-jayewardenepura"
                className="p-3 rounded-full bg-white/10 hover:bg-blue-500/30 hover:scale-110 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.tiktok.com/@jpurad7leos?_r=1&_t=ZS-95MN0HRyNIg"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm uppercase text-gray-300 mb-5">Explore</h3>
            <ul className="space-y-3">
              {["Home","About","Projects","Board","Contact"].map((item,i)=>(
                <li key={i}>
                  <Link to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm uppercase text-gray-300 mb-5">Contact</h3>

            <ul className="space-y-4">

              {/* Email */}
              <li className="flex items-start gap-3 group text-white">
                <FiMail className="mt-1 text-gray-400 group-hover:text-yellow-400 transition" />
                <a
                  href="mailto:japuraleos@gmail.com"
                  className="text-white group-hover:text-yellow-400 transition"
                >
                  japuraleos@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3 group text-white">
                <FiPhone className="mt-1 text-gray-400 group-hover:text-yellow-400 transition" />
                <a
                  href="tel:+94765668168"
                  className="text-white group-hover:text-yellow-400 transition"
                >
                  +94 76 566 8168
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3 group text-white">
                <FiMapPin className="mt-1 text-gray-400 group-hover:text-yellow-400 transition" />
                <p className="text-sm text-white group-hover:text-yellow-400 transition">
                  Leo Club of District 306 D7 <br />
                  University of Sri Jayewardenepura
                </p>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} J'pura D7 Leos | All rights reserved.
          </p>
        </div>
      </div>

      {/* ⬆️ Back to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-14 h-14 rounded-full 
                    bg-[#4f8fb0] 
                    flex items-center justify-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                    hover:scale-110 transition duration-300
                    z-50"
        >
          <FiArrowUp className="text-white text-2xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;