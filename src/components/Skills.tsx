
interface Skill {
  title: string;
  description: string;
  percentage: number;
}

const skills: Skill[] = [
  {
    title:  "Frappe & ERPNext Development",
    description: "Core backend framework for custom apps, workflows, REST APIs, and advanced integrations.",
    percentage: 90,
  },
  {
    title: "React + Vue.js (Frontend Development)",
    description: "Modern UI development with Tailwind, GSAP animations, and component-based design.",
    percentage: 70,
  },
  {
    title: " API Development & Integration",
    description: " REST APIs, WhatsApp integration, biometric devices, third-party system connections.",
    percentage: 95,
  },
  {
    title: "Graphic Design",
    description: "Proficient in AutoCAD, CorelDRAW, Canva, and Figma for UI/UX design and creative prototyping.",
    percentage: 85,
  },
];

export default function DesignSkills() {
  return (
    <section className=" text-white font-poppins py-12">
      {/* Section Title */}
      <div className="mb-10">
        <h2 className="text-5xl font-bold">Skills</h2>
        <p className="text-teal-400 font-semibold mt-2 uppercase tracking-widest">
          Creative Ability
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-12 pr-[40px]">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold">{skill.title}</h3>
            <p className="text-gray-300 mt-2">{skill.description}</p>

            {/* Progress Bar */}
            <div className="relative mt-4">
              <div className="h-[2px] bg-gray-600 rounded-full w-full"></div>
              <div
                className="absolute top-0 h-[2px] bg-teal-400 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
              <span className="absolute right-0 top-[-20px] text-teal-400 text-sm font-bold">
                {skill.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
