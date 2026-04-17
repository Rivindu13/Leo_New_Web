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
    description:
      'ශ්‍රී ජයවර්ධනපුර විශ්ව විද්‍යාලයීය දිස්ත්‍රික් 306 D7 ලියෝ සමාජයේ අප විසින් රත්මලාන බිහිරි විද්‍යාලයේ අපේම සොහොයුරු සොහොයුරියන් වෙනුවෙන් සිදු කරන "කඩ ඉමෙන් එහා" ව්‍යාපෘතිය.',
    image: project1
  },
  {
    id: 2,
    title: 'Future Xperience',
    category: 'Panel Discussion',
    description:
      'Registrations are NOW OPEN for Future Xperience – Panel Discussion. Join us and be part of an inspiring evening designed to prepare the next generation of professionals.',
    image: project2
  },
  {
    id: 3,
    title: 'INKSPIRE',
    category: 'ART & PHOTOGRAPHY COMPETITION',
    description:
      'Support your favorite! Share the channel link with your friends and ask them to join & like! More likes = Higher chance to win! Voting Deadline - 20th April',
    image: project3
  }
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="w-full min-h-screen py-10 sm:py-12 bg-gradient-to-r from-black via-[#113166] to-black text-white relative overflow-hidden">

      {/* GRID LINES */}
      <div className="absolute inset-0 pointer-events-none opacity-5 
      bg-[linear-gradient(to_right,#FFD700_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] 
      bg-[size:3rem_3rem]"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 
      bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 
      bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="py-4 text-2xl sm:text-3xl md:text-5xl font-bold 
          bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 
          bg-clip-text text-transparent inline-block mb-4">
            Ongoing Projects
          </h2>

          <div className="w-20 sm:w-24 h-1 
          bg-gradient-to-r from-blue-400 to-cyan-400 
          mx-auto rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 place-items-center">

            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group w-full max-w-[320px] sm:max-w-sm cursor-pointer 
                bg-white/5 rounded-xl overflow-hidden transition-all duration-500 
                hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)]"
              >
                {/* IMAGE */}
                <div className="h-40 sm:h-48 md:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover 
                    transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 
                  group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <span className="text-xs sm:text-sm text-blue-300">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0B1E3A] max-w-lg w-full rounded-xl p-4 sm:p-6 shadow-[0_10px_40px_rgba(212,175,55,0.25)]">

            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              {selectedProject.title}
            </h3>

            <img
              src={selectedProject.image}
              alt="Project"
              className="w-full h-48 sm:h-60 object-cover rounded mb-4"
            />

            <p className="text-white/80 text-sm sm:text-base">
              {selectedProject.description}
            </p>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 px-4 py-2 bg-blue-500 rounded w-full sm:w-auto"
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