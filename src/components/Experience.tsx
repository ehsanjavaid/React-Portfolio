import { useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft} from "lucide-react";
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
const CARD_WIDTH = 321;

export default function ExperienceSection() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const extendedPlans = [...experiences, ...experiences, ...experiences];
    const startIndex = experiences.length

    useEffect(() => {
        // Scroll to the middle copy on load
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = startIndex * CARD_WIDTH;
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;

        const scrollAmount = direction === "left" ? -CARD_WIDTH : CARD_WIDTH;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });

        setTimeout(() => {
            const max = experiences.length * CARD_WIDTH * 2;
            const min = 0;
            const current = container.scrollLeft;

            // If scrolled too far right, reset to center
            if (current >= max) {
                container.scrollLeft = startIndex * CARD_WIDTH;
            }

            // If scrolled too far left, reset to center
            if (current <= min) {
                container.scrollLeft = startIndex * CARD_WIDTH;
            }
        }, 500); // Wait for smooth scroll to finish
    };

    return (
        <section className="bg-[#2D2F36] text-white py-16 px-6 md:px-20">
            {/* Title & Arrows */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-5xl font-bold">Experience</h2>
                    <p className="text-teal-400 font-semibold mt-2 uppercase tracking-widest">
                        Working with
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
                        onClick={() => scroll("left")}
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
                        onClick={() => scroll("right")}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* Scrollable Cards */}
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {extendedPlans.map((item, idx) => (
                    <div
                        key={idx}
                        className="min-w-[321px] scroll-snap-start flex-shrink-0"
                    >
                        <p className="text-teal-400 text-sm mb-2 tracking-widest">
                            {item.period}
                        </p>
                        <h3 className="text-xl font-bold whitespace-pre-line">
                            {item.title}
                        </h3>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
