import { useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Study{
    title: string;
    period: string;
    description: string;
}

const studies: Study[] = [
    {
        title: "Govt College University Faisalabad",
        period: "2018 – 2022",
        description:
            "Graduated with a Bachelor's degree in Computer Science, specializing in software engineering and web development. Developed strong skills in programming languages, database management, and software design principles.",
    },
     {
        title: "ILM College",
        period: "2016 – 2018",
        description:
            "Pursued Intermediate studies in Computer Science, gaining a deeper understanding of programming concepts and software development.",
    },
    
    {
        title: "Govt Islamia High School",
        period: "2014 - 2016",
        description:
            "Completed my Matriculation with a focus on Science subjects, achieving a solid foundation in computer, mathematics and physics.",
    },
   
     
    
    
    
];

const CARD_WIDTH = 320 + 24; // card + gap (if gap-6 = 24px)

export default function EducationSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const extendedStudies = [...studies, ...studies]; // 2x loop
    const middleIndex = studies.length;

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = middleIndex * CARD_WIDTH;
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = direction === "left" ? -CARD_WIDTH : CARD_WIDTH;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });

        setTimeout(() => {
            const totalWidth = studies.length * CARD_WIDTH;
            const currentScroll = container.scrollLeft;

            if (currentScroll <= 0) {
                container.scrollLeft = totalWidth;
            }
            if (currentScroll >= totalWidth * 2) {
                container.scrollLeft = totalWidth;
            }
        }, 500);
    };

    return (
        <section className="text-white py-12 font-poppins">
            {/* Title & Arrows */}
            <div className="flex flex-row items-center justify-between w-[92%]">
                <div className="text-[42px] md:text-[55px] text-white font-bold font-montserrat">
                    Education
                </div>
                <div className="flex space-x-3 text-center">
                    <button
                        onClick={() => scroll("left")}
                        aria-label="Scroll Left"
                        className="bg-[#373b40] px-[22px] text-white rounded-full border border-[#414852] text-[14px] w-[64px] h-[64px] mr-[15px]"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        aria-label="Scroll Right"
                        className="text-white px-[22px] rounded-full bg-[#373b40] border border-[#414852] text-[14px] w-[64px] h-[64px]"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="subtitle text-[14px] text-[#68e0cf] font-bold font-poppins">STUDIED AT</div>

            {/* Scrollable Cards */}
            <div className="overflow-hidden w-full">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {extendedStudies.map((item, idx) => (
                        <div
                            key={idx}
                            className="scroll-snap-start  p-6 rounded-lg w-[320px] flex-shrink-0"
                        >
                            <p className="text-teal-400 font-bold text-sm mb-2 tracking-widest break-words">
                                {item.period}
                            </p>
                            <h3 className="text-xl font-bold mb-2 break-words">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed break-words whitespace-pre-wrap">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
