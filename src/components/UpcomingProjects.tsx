import React, { useState, useEffect } from "react";
import Project1 from "../assets/projects/upcomingProjects/p1.jpeg";
import Project2 from "../assets/projects/upcomingProjects/p2.jpeg";
import Project3 from "../assets/projects/upcomingProjects/p3.jpeg";

interface Card {
  image: string;
  title: string;
  date: string;
  description: string;
  category: string;
  status: string;
}

const UpcomingProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards: Card[] = [
    /* Add data for upcoming projects
    {
      image: `${Project1}`,
      title: "Aluth Panthiya",
      date: "April 2026",
      description: "A large-scale educational project focused on school students.The Japura D7 Leos proudly joined hands in Leo Tree Plantation Challenge Season 6 – Phase 1, a remarkable initiative committed to environmental protection and sustainability. As passionate youth leaders, we understood the importance of acting now to ensure a better tomorrow. Through this project, we stepped forward to make a meaningful difference by engaging in responsible and purposeful tree planting.",
      category: "Educational",
      status: "Upcoming"
    },
    */
    {
      image: `${Project2}`,
      title: "Future Xperience",
      date: "April 2026",
      description: "Registrations are NOW OPEN for Future Xperience – Panel Discussion. Join us and be part of an inspiring evening designed to prepare the next generation of professionals.",
      category: "Panel Discussion",
      status: "Upcoming"
    },
    {
      image: `${Project3}`,
      title: "අවුරුදු with Little Legends",
      date: "April 2026",
      description: "Bringing the joy of අවුරුදු  to the brave little heroes at Apeksha Hospital. 'අවුරුදු with Little Legends' is all about sharing smiles, hope, and love with hearts that inspire us every day.",
      category: "Social Service",
      status: "Upcoming"
    }
  ];

  const totalSlides = cards.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="w-full py-16 px-4 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0B1E3A]"></div>

      {/* Glow lights */}
      <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl bottom-20 right-20"></div>

      <div className="relative z-10">

        {/* Title */}
        <div className="text-center mb-4">

          <h2 className="text-4xl md:text-5xl py-4 font-bold bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
            Upcoming Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mt-4"></div>

          <p className="text-white/70 w-[600px] mx-auto mt-4 mb-12">
            Discover the impactful projects we are planning to bring positive change to our community.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition h-[350px] flex gap-6">

                  {/* Image */}
                  <div className="w-1/2 flex items-center justify-center">
                  <div className="w-full max-w-[400px] max-h-[330px] aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={card.image} 
                    alt="Upcoming Project"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  </div>
                  </div>

                  {/* Content */}
                  <div className="w-1/2 flex flex-col justify-between">

                    <div>
                      <h3 className="text-xl font-bold text-white mt-2 mb-2">
                        {card.title}
                      </h3>

                      <p className="text-sm text-white/60 mt-4 mb-2">
                        {card.date}
                      </p>

                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 mb-3">
                        {card.status}
                      </span>

                      <p className="text-white/70 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Category */}
                    <div className="mt-4 text-sm text-yellow-400">
                      {card.category}
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {cards.map((_, i) => (
              <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === i ? "bg-yellow-400 w-4" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UpcomingProjects;