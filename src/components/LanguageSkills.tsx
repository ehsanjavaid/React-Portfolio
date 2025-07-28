import React from "react";

const languages = [
  {
    name: "English",
    description:
      "Fluent in reading, writing, and speaking, suitable for professional communication.",
    level: 8, // out of 10
  },
  {
    name: "Urdu",
    description:
      "Fluent in reading, writing, and speaking, suitable for professional communication.",
    level: 10, // out of 10
  },
];

export default function LanguageSkills() {
  return (
    <section className=" text-white py-12 font-poppins">
      {/* Title */}
      <div>
        <h2 className="text-5xl font-bold">Language Skills</h2>
        <p className="text-teal-400 font-semibold mt-2 uppercase tracking-widest">
          Reading and Writing
        </p>
      </div>

      {/* Language List */}
      <div className="grid md:grid-cols-2 gap-12 mt-10">
        {languages.map((lang, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold">{lang.name}</h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              {lang.description}
            </p>

            {/* Level Circles */}
            <div className="flex gap-2 mt-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < lang.level ? "bg-teal-400" : "bg-gray-600"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
