// ================= ONGOING PROJECTS SECTION =================

import { useState } from 'react';
import project1 from '../assets/projects/projectsForHome/1.jpg';
import project2 from '../assets/projects/projectsForHome/2.jpeg';
import project3 from '../assets/projects/projectsForHome/3.jpeg';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Kadaimen Eha',
    category: 'Education',
    description: 'ශ්‍රී ජයවර්ධනපුර විශ්ව විද්‍යාලයීය දිස්ත්‍රික් 306 D7 ලියෝ සමාජයේ අප විසින් රත්මලාන බිහිරි විද්‍යාලයේ අපේම සොහොයුරු සොහොයුරියන් වෙනුවෙන් සිදු කරන "කඩ ඉමෙන් එහා" ව්‍යාපෘතිය.',
    image: project1
  },
  {
    id: 2,
    title: 'Blood Donation Camp',
    category: 'Health',
    description: 'Organizing blood donation drives to support hospitals and save lives.',
    image: project2
  },
  {
    id: 3,
    title: 'Diwi Abhilasha',
    category: 'Economic Empowerment',
    description: 'ආර්ථිකයෙන් ශක්තිමත් දිවියකට අත්තිවාරමක් සොයන ඔවුන්ට. ස්ථානය: මාතලේ, පල්ලෙපොළ, ඇහැලේපොළ ගමේ විහාරස්ථානය. ඔවුන්ගේ ජීවිතයට ආලෝකයක් ලබාදෙන්න ජපුර ලියෝ අපි සූදානම්..',
    image: project3
  }
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="w-full py-12 h-[700px] bg-gradient-to-r from-black via-[#113166] to-black text-white relative overflow-hidden">      

      {/* Gold Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#FFD700_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] animate-grid"></div>

      {/* Gold Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float-delayed pointer-events-none"></div>
      
      {/* CONTENT (bring above background) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="py-5 text-4xl md:text-5xl 
          font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent inline-block mb-4">
            Ongoing Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto py-5">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="
                  group w-full max-w-sm
                  cursor-pointer
                  bg-white/5
                  rounded-xl
                  overflow-hidden
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)]
                "
              >
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <span className="text-sm text-blue-300">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 mt-6">
          <div className="mt-6 bg-[#0B1E3A] max-w-lg w-full rounded-xl p-6 shadow-[0_10px_40px_rgba(212,175,55,0.25)]">
            <h3 className="text-2xl font-bold mb-4 mt-6">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt='Project' className="w-full h-full object-cover rounded mb-4" />
            <p className="text-white/80">{selectedProject.description}</p>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 px-4 py-2 bg-blue-500 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;