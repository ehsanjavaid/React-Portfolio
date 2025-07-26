import { ChevronLeft, ChevronRight } from "lucide-react";
interface Experience {
    title: string;
    period: string;
    description: string;
}

const experiences: Experience[] = [
    {
        title: "Art Director at Facebook",
        period: "2010 – 2012",
        description: "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
    },
    {
        title: "The Turin Olympics",
        period: "Present",
        description: "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
    },
];

export default function ExperienceSection() {
  return (
    <section className="bg-[#2D2F36] text-white py-16 px-6 md:px-20">
      {/* Title */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-5xl font-bold">Experience</h2>
          <p className="text-teal-400 font-semibold mt-2 uppercase tracking-widest">
            Working with
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button className="w-12 h-12 border border-white rounded-full flex items-center justify-center">
            <ChevronLeft />
          </button>
          <button className="w-12 h-12 border border-white rounded-full flex items-center justify-center">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience 1 */}
        <div>
          <p className="text-teal-400 rotate-180 origin-left text-sm mb-2 tracking-widest">
            2010 – 2012
          </p>
          <h3 className="text-xl font-bold">Art Director <br /> Facebook</h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
            mauris sit amet nibh. Donec sodales sagittis magna.
          </p>
        </div>

        {/* Experience 2 */}
        <div>
          <p className="text-teal-400 text-sm mb-2 tracking-widest">Present</p>
          <h3 className="text-xl font-bold">The Turin <br /> Olympics</h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
            mauris sit amet nibh. Donec sodales sagittis magna.
          </p>
        </div>
      </div>
    </section>
  );
}
