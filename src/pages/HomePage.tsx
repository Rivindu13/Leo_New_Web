import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import AboutUsForHome from '../components/AboutUsForHome';
import ProjectsForHome from '../components/ProjectsForHome';
import TheAnecdote from '../components/TheAnecdote';
import UpcomingProjects from '../components/UpcomingProjects';
import logo from '../assets/D7_logo.png';
import heroBg from '../assets/H1.jpg';

const HomePage: React.FC = () => {

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0B1E3A]">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1E3A]/60"></div>

        {/* CONTENT */}
        {/* CONTENT */}
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center h-full">

  {/* 🔥 Gradient Accent Line */}
  <div className="w-24 h-1 mb-6 rounded-full 
  bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400"></div>

  {/* Heading */}
  <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
    <span className="block text-white">J'PURA D7</span>
    <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
      LEOS
    </span>
  </h1>

  {/* 🔥 GOLD SUBTITLE */}
  <p className="text-xl md:text-2xl font-semibold mb-4 
  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 
  bg-clip-text text-transparent drop-shadow-md">
    Serve with Passion, Rise with Purpose
  </p>

  {/* 🔥 IMPROVED LEOSTIC TEXT */}
  <p className="text-sm md:text-base font-bold tracking-widest 
  text-white-300 bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm mb-6">
    LEOSTIC YEAR 2025/26
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center">

    <Link
      to="/projects"
      className="inline-flex items-center justify-center px-6 py-2 
                font-semibold text-white rounded-full 
                bg-gradient-to-r from-blue-500 to-indigo-500 
                transition-all duration-300 
                hover:scale-105 hover:shadow-lg"
    >
      Our Projects
    </Link>

    <Link
      to="/about"
      className="px-6 py-3 border border-white/30 rounded-full text-white font-bold 
                hover:bg-white/40 transition-all duration-300 
                hover:scale-105 hover:shadow-lg"
    >
      About Us
    </Link>

  </div>
</div>

{/* Bottom scrolling strip */}
<div className="absolute bottom-0 left-0 w-full h-[60px] 
bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600
overflow-hidden">

  <div className="scroll-wrapper flex items-center h-full hover:[animation-play-state:paused]">

    {/* 🔁 Duplicate content for seamless loop */}
    <div className="scroll-content flex items-center">

      {/* ITEM */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center gap-3 mx-8 whitespace-nowrap">
          <img
            src={logo}
            alt="logo"
            className="w-6 h-6 md:w-7 md:h-7 object-contain 
            drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
          />
          <span className="text-white font-bold text-sm md:text-base tracking-wide">
            J'PURA D7 LEOS
          </span>
        </div>
      ))}

    </div>

    {/* 🔁 DUPLICATE AGAIN (important for seamless loop) */}
    <div className="scroll-content flex items-center">

      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center gap-3 mx-8 whitespace-nowrap">
          <img
            src={logo}
            alt="logo"
            className="w-6 h-6 md:w-7 md:h-7 object-contain 
            drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
          />
          <span className="text-white font-bold text-sm md:text-base tracking-wide">
            J'PURA D7 LEOS
          </span>
        </div>
      ))}

          </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section id="projects" className="text-center text-white">
        
      {/* Spacer to account for fixed hero */}
      <ProjectsForHome />

      {/* About Me Section */}
      <AboutUsForHome />

      {/* Upcoming Projects */}
      <UpcomingProjects />

      {/* Upcoming Projects */}
      <TheAnecdote />
        
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;