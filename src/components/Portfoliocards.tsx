// components/Portfolio.tsx

import { useState } from "react";

const categories = ["All", "Video", "Music", "Links", "Image", "Gallery", "Content"];

const projects = [
  {
    id: 1,
    category: "Gallery",
    title: "Alabaster Complete Collection",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    category: "Video",
    title: "Book of John Paper",
    image: "/images/project2.jpg",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="text-white py-12 font-poppins">
      {/* Title */}
      <div>
        <h2 className="text-5xl font-bold">Portfolio</h2>
        <p className="text-teal-400 font-semibold mt-2 uppercase tracking-widest">
          Latest Works
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-6 mt-6 text-gray-300">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`hover:text-teal-400 ${
              activeCategory === cat ? "text-white font-semibold" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
        {filteredProjects.map((project) => (
          <div key={project.id} className="text-center">
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-teal-400 mt-4 uppercase text-sm">
              {project.category}
            </p>
            <h3 className="text-lg font-bold mt-1">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
