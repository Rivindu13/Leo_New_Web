import React from "react";
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import { boardMembers, BoardMember } from "../types/boardData";

const Board: React.FC = () => {

  // 🔥 GROUP MEMBERS BY CATEGORY
  const groupedMembers = boardMembers.reduce<Record<string, BoardMember[]>>(
    (acc, member) => {
      if (!acc[member.category]) {
        acc[member.category] = [];
      }
      acc[member.category].push(member);
      return acc;
    },
    {}
  );

  const president = boardMembers.find(
    (member) => member.position === "President"
  );

  if (groupedMembers["Executive Committee"]) {
    groupedMembers["Executive Committee"] =
      groupedMembers["Executive Committee"].filter(
        (member) => member.position !== "President"
      );
  }

  // ✅ ORDER
  const sectionOrder = [
    "Executive Committee",
    "Club Advisors",
    "Senior Directors",
    "Administrative Crew",
    "Club Services Crew",
    "Marketing Crew",
    "Media & IT Crew",
    "Finance Crew",
    "Public Relations Crew",
    "Editorial Crew",
    "Project Cordinators" 
  ];

  // 🎬 ANIMATIONS
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden 
    bg-gradient-to-b from-black via-[#021633] to-black text-white">

      {/* 🌟 BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1400px] 
      bg-yellow-400/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] 
      bg-amber-300/10 blur-[140px] rounded-full"></div>

      {/* 🔥 HERO */}
      <section className="pt-24 pb-14 text-center px-6 relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              OUR BOARD
            </span>
          </h1>

          <div className="w-24 h-1 mb-6 mx-auto rounded-full 
          bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400"></div>
        </div>

        <p className="text-lg md:text-xl text-blue-100">
            • Introducing the faces behind J'pura D7 Leos •
        </p>
      </section>

      {/* 🔥 SECTIONS */}
      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-16">

        {/* 👑 PRESIDENT FEATURE */}
        {president && (
          <div className="flex justify-center mb-20">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="group relative w-full max-w-sm rounded-3xl overflow-hidden 
              border border-blue-400/30 bg-gradient-to-br from-white/10 to-white/0 
              backdrop-blur-xl shadow-2xl transition-all duration-500 
              hover:scale-105 hover:shadow-blue-400/40"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={president.image}
                  alt={president.name}
                  className="w-full h-full object-cover 
                  transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full px-4">
                  <h2 className="text-2xl font-bold text-white">
                    {president.name}
                  </h2>
                  <p className="text-yellow-300 text-lg font-semibold">
                    {president.position}
                  </p>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none 
              border border-yellow-400/40"></div>
            </motion.div>
          </div>
        )}

        {sectionOrder.map((category) =>
          groupedMembers[category] ? (
            <div key={category}>

              {/* 🧠 SECTION TITLE */}
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center 
              bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 
              bg-clip-text text-transparent">
                {category}
              </h2>

              {/* GRID */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-8"
              >
                {groupedMembers[category].map((member: BoardMember) => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    className="group relative w-full max-w-xs rounded-2xl overflow-hidden 
                    border border-white/10 bg-gradient-to-br from-white/5 to-white/0 
                    backdrop-blur-xl shadow-lg transition-all duration-500 
                    hover:scale-105 hover:shadow-blue-500/40"
                  >

                    {/* IMAGE */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover 
                        transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* TEXT */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center w-full px-4">
                        <h3 className="text-lg font-semibold text-white">
                          {member.name}
                        </h3>
                        <p className="text-blue-300 text-sm">
                          {member.position}
                        </p>
                      </div>
                    </div>

                    {/* BORDER GLOW */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none 
                    border border-transparent group-hover:border-blue-400/30 transition"></div>

                  </motion.div>
                ))}
              </motion.div>

            </div>
          ) : null
        )}

      </div>

      <Footer />
    </div>
  );
};

export default Board;