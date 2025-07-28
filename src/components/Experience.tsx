import { useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Experience {
    title: string;
    period: string;
    description: string;
}

const experiences: Experience[] = [
    
    {
        title: "Frappe / ERPNext Developer at Infintrix Technologies",
        period: "Present",
        description:
            "Developing and customizing ERPNext applications using Frappe framework. Collaborating with cross-functional teams to gather requirements and deliver solutions. Implementing new features, bug fixes, and performance optimizations. Participating in code reviews and maintaining high code quality standards.",
    },
    {
        title: "Junior ERPNext Developer at Firm11",
        period: "2023 – 2024",
        description:
            "Assisted in the development and customization of ERPNext applications. Collaborated with senior developers to implement new features and resolve bugs. Participated in code reviews and contributed to team knowledge sharing. Gained experience in Frappe framework and ERPNext modules.",
    },
     {
        title: "Frontend Developer at Techsa",
        period: "2022 – 2024",
        description:
            "Developed and maintained responsive web applications using React.js, and Tailwind Css. Collaborated with backend developers to integrate RESTful APIs. Implemented state management using Redux and Context API. Optimized application performance and ensured cross-browser compatibility.",
    },
    {
        title: "Graphic Designer at Protech Automotive Glass Industries",
        period: "2020 – 2022",
        description:
            "Designed automotive windscreen layouts using AutoCAD and CorelDRAW for precision manufacturing.Collaborated with engineers to ensure accurate templates and high-quality production output.",

    },
   
    
    
    
];

const CARD_WIDTH = 320 + 24; // card + gap (if gap-6 = 24px)

export default function ExperienceSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const extendedExperiences = [...experiences, ...experiences]; // 2x loop
    const middleIndex = experiences.length;

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
            const totalWidth = experiences.length * CARD_WIDTH;
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
                    Experience
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

            <div className="subtitle text-[14px] text-[#68e0cf] font-bold font-poppins">WORKING WITH</div>

            {/* Scrollable Cards */}
            <div className="overflow-hidden w-full">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {extendedExperiences.map((item, idx) => (
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
