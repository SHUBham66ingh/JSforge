import Navbar from "../components/Navbar";

const tutorials = [
  {
    title: "JavaScript Full Course",
    description: "Learn JavaScript from beginner to advanced.",
    thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
  },
  {
    title: "React JS Crash Course",
    description: "Build modern React applications.",
    thumbnail: "https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
  },
  {
    title: "DSA for Interviews",
    description: "Master Data Structures and Algorithms.",
    thumbnail: "https://img.youtube.com/vi/RBSGKlAvoiM/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
  },
  {
    title: "Node.js Full Course",
    description: "Backend development with Node.js.",
    thumbnail: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=Oe421EPjeBE",
  },
  {
    title: "SQL Complete Tutorial",
    description: "Learn SQL from scratch.",
    thumbnail: "https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
  },
  {
    title: "System Design Basics",
    description: "Introduction to system design interviews.",
    thumbnail: "https://img.youtube.com/vi/xpDnVSmNFX0/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=xpDnVSmNFX0",
  },
];

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <Navbar />

      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-black">
          <span className="text-yellow-400">Video</span>
          <span className="text-white"> Tutorials</span>
        </h1>
      </div>

      {/* Tutorial Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tutorials.map((video, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-yellow-400 transition duration-300 hover:scale-105"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold mb-3">
                  {video.title}
                </h2>

                <p className="text-slate-400 mb-5">
                  {video.description}
                </p>

                <a
                  href={video.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-lg font-bold hover:scale-105 transition"
                >
                  Watch Tutorial ▶
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}