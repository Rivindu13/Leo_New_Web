import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

import logoLeo from '../assets/aboutPage/leo.png';
import logoLion from '../assets/aboutPage/lion.png';
import image1 from '../assets/aboutPage/image1.jpg';
import image2 from '../assets/aboutPage/image2.jpg';
import image3 from '../assets/aboutPage/image3.jpg';

/* HOVER CARD */
const HoverCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {

  // 🔥 Split description into lines
  const lines = description.split("\n");

  return (
    <div
      className="group relative h-[280px] rounded-2xl overflow-hidden 
      border border-white/10 bg-gradient-to-br from-white/5 to-white/0 
      backdrop-blur-xl shadow-lg transition-all duration-500 
      hover:scale-105 hover:shadow-blue-500/40"
    >

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
      transition duration-500 bg-gradient-to-r 
      from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-xl"></div>

      {/* IMAGE + TITLE */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full
      transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">

        <img
          src={image}
          alt={title}
          className="w-[200px] h-[200px] mb-4 object-contain 
          drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        />

        <h2 className="text-lg font-semibold text-center text-blue-200 tracking-wide">
          {title}
        </h2>
      </div>

      {/* DESCRIPTION (🔥 ANIMATED) */}
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center 
      opacity-0 group-hover:opacity-100 transition-all duration-500">

        <div className="flex flex-col gap-2 text-sm text-gray-300">

          {lines.map((line, index) => (
            <span
              key={index}
              className="opacity-0 translate-y-4 blur-sm
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:blur-0
              transition-all duration-500"
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              {line}
            </span>
          ))}

        </div>
      </div>

      {/* ✨ BORDER GLOW */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none 
      border border-transparent group-hover:border-blue-400/30 transition"></div>

    </div>
  );
};

/* MAIN */
const About: React.FC = () => {

  /* SLIDESHOW */
  const images = [
    image1,
    image2,
    image3,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen relative overflow-hidden 
    bg-gradient-to-b from-black via-[#021633] to-black text-white">

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1400px] 
      bg-yellow-400/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] 
      bg-amber-300/10 blur-[140px] rounded-full"></div>

      {/* HERO */}
      <section className="pt-24 pb-14 text-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent blur-2xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              ABOUT US
            </span>
          </h1>

          <div className="w-24 h-1 mb-6 mx-auto rounded-full 
          bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400"></div>

          <p className="text-lg md:text-xl text-blue-100">
            Leadership • Experience • Opportunity
          </p>
        </div>
      </section>

      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* TOP CARDS */}
      <section className="max-w-5xl mx-auto px-6 pb-12 grid md:grid-cols-2 gap-6">

        <HoverCard
          title="WHO IS A LEO?"
          image={logoLeo}
          description={`A Leo is a member of the world’s largest youth organization and the official youth program of Lions Clubs International.

Leos focus on three core values: Leadership, Experience, and Opportunity (L.E.O.).

Through service projects and community work, Leos develop leadership skills, support those in need, and make a positive impact on society.`}
        />

        <HoverCard
          title="LIONS CLUB INTERNATIONAL"
          image={logoLion}
          description={`Lions Clubs International is a global service organization founded in 1917 by Melvin Jones.

With clubs in over 250 countries, it works to support communities both locally and worldwide.

Lions focus on key areas such as vision, hunger, the environment, childhood cancer, and diabetes, aiming to make the world a better place through service and compassion.`}
        />

      </section>

      {/* FEATURE SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-white/5 backdrop-blur-md rounded-2xl 
        border border-white/10 shadow-lg overflow-hidden hover:shadow-blue-400/30 transition">

          {/* SLIDESHOW */}
          <div className="relative h-[200px] md:h-[250px] w-full">

            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="slide"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* TEXT */}
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 
            bg-gradient-to-r from-cyan-300 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              ABOUT J'PURA D7 LEOS
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The Leo Club of University of Jayewardenepura was established in 2019 to empower youth 
              through service, leadership, and community engagement.
              <br /><br />
              It provides a platform for undergraduates to develop leadership, organizational, and 
              social skills while making meaningful contributions to society.
              <br /><br />
              We, J'pura Leos, are always ready to take on new challenges and carry on our legacy.
              <br /><br />
              <span className="text-blue-400 font-semibold text-xl bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Serve with Passion, Rise with Purpose!
              </span>
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
};

export default About;