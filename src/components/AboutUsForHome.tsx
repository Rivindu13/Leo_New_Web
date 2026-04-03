import React, { useState } from 'react';
import aboutBg from '../assets/H3.jpg';
import usImage from '../assets/D7_logo.png'

type Category = {
  id: string;
  title: string;
  content: string;
};

const AboutUsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('mission');

  const categories: Category[] = [
    {
      id: 'mission',
      title: 'Our Mission',
      content:
        "We are dedicated to serving communities through impactful projects, leadership development, and meaningful engagement."
    },
    {
      id: 'vision',
      title: 'Our Vision',
      content:
        "To build a united network of young leaders who inspire change, promote service, and create sustainable impact both locally and globally."
    },
    {
      id: 'values',
      title: 'Our Values',
      content:
        "Leadership, teamwork, integrity, and compassion define who we are. We believe in growing together while serving others with passion and purpose."
    }
  ];

  return (
    <section 
      className="w-full py-24 bg-black relative overflow-hidden" 
      id="about-me"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 33, 74, 0.5), rgba(0, 12, 57, 0.6), rgba(0, 0, 0, 0.85)), url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-indigo-400 to-cyan-400 bg-clip-text text-transparent inline-block mb-4">
            A Few Words About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* LEFT VISUAL (FLAG EFFECT) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group perspective-[1000px]">

              <div className="w-72 h-72 rounded-2xl overflow-hidden border border-white/10 shadow-xl transform transition duration-500 group-hover:rotate-y-6 group-hover:skew-y-1">

                {/* Image */}
                <img
                  src={usImage}
                  alt="Jpura Leos"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* WAVE OVERLAY (animated gradient) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] animate-wave"></div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20"></div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2">
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                      : 'bg-white/40 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`transition-all duration-500 ${
                    activeCategory === category.id
                      ? 'opacity-100 block'
                      : 'opacity-0 hidden'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {category.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {category.content}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-xl font-bold text-blue-400">
                        40+
                      </div>
                      <div className="text-white/80">Projects Done</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-xl font-bold text-indigo-400">
                        100+
                      </div>
                      <div className="text-white/80">Active Members</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CUSTOM ANIMATION */}

    </section>
  );
};

export default AboutUsSection;