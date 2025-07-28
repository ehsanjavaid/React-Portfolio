
const codingSkills = [
  { name: "Frappe & ERPNext Development", level: 90, description: "Custom apps, DocTypes, workflows, server scripts, REST APIs." },
  { name: "Python", level: 75, description: "Backend logic, automation, and integration with Frappe." },
  { name: " JavaScript / TypeScript", level: 85, description: "Frontend interactivity, custom scripts, Vue/React components." },
  { name: "React & Vue.js", level: 80, description: "Modern frontend frameworks for dynamic ERPNext UI & custom apps." },
  { name: "HTML & Tailwind CSS", level: 95, description: "Pixel-perfect UI, responsive designs for web and ERPNext." },
  { name: " MariaDB / MySQL", level: 90, description: "Database design, optimization, and SQL queries for performance." },
];

export default function CodingSkills() {
  return (
    <section className=" text-white py-12 font-poppins">
      {/* Title */}
      <div>
        <h2 className="text-5xl font-bold">Coding Skills</h2>
        <p className="text-teal-400 font-semibold mt-2 uppercase tracking-widest">
          Developing On
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 pr-[50px]">
        {codingSkills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {/* Circular Progress */}
            <div
              className="relative w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: `conic-gradient(#38E0C4 ${skill.level * 3.6}deg, #3a3a3a ${skill.level * 3.6}deg)`,
              }}
            >
              <span className="absolute text-lg font-bold">{skill.level}%</span>
            </div>

            {/* Skill Name */}
            <h3 className="text-lg font-bold mt-4">{skill.name}</h3>

            {/* Skill Description */}
            <p className="text-gray-300 mt-2 leading-relaxed text-sm">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
