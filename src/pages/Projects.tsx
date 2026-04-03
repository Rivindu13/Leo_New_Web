import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

import { projects } from '../types/projectsData';

/* PROJECT CARD */
const ProjectCard = ({ project }: { project: any }) => {

  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const images = project.images;

  useEffect(() => {
    if (!hovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered, images.length]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCurrent(0);
      }}
      className="group relative rounded-2xl overflow-hidden 
      border border-white/10 bg-gradient-to-br from-white/5 to-white/0 
      backdrop-blur-xl shadow-lg transition-all duration-500 
      hover:scale-[1.02] hover:shadow-blue-500/40"
    >

      {/* 🔥 IMAGE / SLIDESHOW */}
      <div className="relative h-48 w-full overflow-hidden">

        {images.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt="project"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
      transition duration-500 bg-gradient-to-r 
      from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 p-6">

        {/* TITLE + STATUS */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-blue-200">
            {project.title}
          </h3>

          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
            project.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-300' :
            'bg-yellow-500/20 text-yellow-300'
          }`}>
            {project.status}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* FOOTER */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">
            {project.date}
          </span>

          <span className="text-cyan-300 font-medium">
            {project.impact}
          </span>
        </div>
      </div>

      {/* BORDER GLOW */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none 
      border border-transparent group-hover:border-blue-400/30 transition"></div>

    </div>
  );
};

/* MAIN */
const Projects: React.FC = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredProjects = projects.filter((project) => {
  const searchText = search.toLowerCase().trim();

  const matchesSearch =
    project.title.toLowerCase().includes(searchText) ||
    project.status.toLowerCase().includes(searchText);

  const matchesStatus =
    statusFilter === 'All' ||
    project.status?.toLowerCase().trim() === statusFilter.toLowerCase().trim();

  return matchesSearch && matchesStatus;
});

  return (
    <div className="min-h-screen relative overflow-hidden 
    bg-gradient-to-b from-black via-[#021633] to-black text-white">

      <div className="absolute inset-0 pointer-events-none">
        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] 
        bg-yellow-400/10 blur-[160px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] 
        bg-amber-300/10 blur-[140px] rounded-full"></div>

        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] 
        bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* HERO */}
      <section className="pt-24 pb-14 text-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent blur-2xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              OUR PROJECTS
            </span>
          </h1>

          <div className="w-24 h-1 mb-6 mx-auto rounded-full 
          bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400"></div>

          <p className="text-lg md:text-xl text-blue-100">
            Making Impact Through Service
          </p>
        </div>
      </section>

      {/* 🔍 SEARCH + FILTER */}
        <div className="max-w-6xl mx-auto px-6 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded-xl bg-white/10 
            border border-white/20 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* FILTER BUTTONS */}
          <div className="flex gap-3 flex-wrap justify-center">
            {['All', 'Completed', 'Ongoing'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  statusFilter === status
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

      {/* PROJECT GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No projects found!
        </p>
      )}
      </section>

      <Footer />
    </div>
  );
};

export default Projects;