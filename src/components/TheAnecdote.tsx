import Anecdote from "../assets/anecdote/anecdote.jpg";
import AnecdoteBg from "../assets/anecdote/anecdoteBg.png";

const NewsletterPage = () => {

  // Latest Newsletter
  const latestNewsletter = {
    title: "March 2026 Newsletter",
    month: "March 2026",
    image: Anecdote,
  };

  return (
    <div className="w-full bg-black text-white">

      {/* 🔥 HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">

        {/* Background */}
        <div
            className="absolute inset-0"
            style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 61, 135, 0.4), rgba(0, 26, 121, 0.3), rgba(0, 0, 0, 0.25)), url(${AnecdoteBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12">

            {/* 🔥 LEFT SIDE (TITLE) */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl text-center md:text-6xl py-4 font-bold bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
                THE ANECDOTE
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full mt-2 mx-auto lg:mx-auto"></div>
            </div>

            {/* 📄 RIGHT SIDE (CONTENT) */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">

            <div className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-black bg-yellow-400 rounded-full">
                Latest Edition
            </div>

            <p className="text-yellow-400 uppercase text-sm mb-2 tracking-wider">
                {latestNewsletter.month}
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {latestNewsletter.title}
            </h3>

            <p className="text-white/70 mb-6 leading-relaxed">
                The Implacable Prolongation of the Unvoiced Adventure 💙<br></br>
                We are quite proud to present "THE ANECDOTE", the official e-newsletter of the Leo Club of District 306 D7 University of Sri Jayewardenepura. 🦁🌟
                <br></br>Don’t miss out - let’s dive in!
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                📄 30+ Pages
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                📰 10+ Articles
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                📸 Project Highlights
                </div>
            </div>

            <a
            href="https://heyzine.com/flip-book/2a96b819a1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-bold 
                    bg-gradient-to-r from-yellow-500 to-yellow-400 
                    text-black 
                    hover:scale-105 transition duration-300 
                    shadow-[0_10px_30px_rgba(255,215,0,0.25)] inline-block"
            >
            View Full Magazine
            </a>

            </div>

        </div>
        </section>

    </div>
  );
};

export default NewsletterPage;