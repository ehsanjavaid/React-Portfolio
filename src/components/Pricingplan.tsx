import { useRef } from "react";
import type { ReactNode } from "react";
import { ChevronRight, ChevronLeft, Star, Gem,Rocket } from "lucide-react";

interface PricingPlan {
    name: string;
    price: string;
    services: string[];
    icon: ReactNode;
    
}

const pricingPlans: PricingPlan[] = [
    {
        name: "Basic",
        price: "29",
        services: ["Web Development", "Advertising"],
        icon: <Star className = "text-teal-400 w-8 h-8 mx-auto mb-2" />,
    },
    {
        name: "Premium",
        price: "59",
        services: [
            "Web Development",
            "Advertising",
            "Game Development",
            "Music Writing",
            "Photography",
        ],
        icon: <Gem className = "text-teal-400 w-8 h-8 mx-auto mb-2" />,
    },
    {
        name: "Ultimate",
        price: "59",
        services: [
            "Web Development",
            "Advertising",
            "Game Development",
            "Music Writing",
            "Photography",
        ],
        icon: <Rocket className = "text-teal-400 w-8 h-8 mx-auto mb-2" />
    },
];

export default function Pricing() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            if (direction === "left") scrollRef.current.scrollLeft -= 321;
            else scrollRef.current.scrollLeft += 321;
        }
    };

    return (
        <section className=" text-white py-12">
            <div className="flex flex-row items-center justify-between mb-6 w-[92%]">
                <div className="text-[42px] md:text-[55px] text-white font-bold font-montserrat">
                    Pricing
                </div>
                <div className="flex space-x-3 text-center">
                    <button
                        onClick={() => scroll("left")}
                        className=" bg-[#373b40] px-[22px] hover:none text-white rounded-full border border-[#414852] text-[14px] w-[64px] h-[64px] mr-[15px]"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className=" text-white px-[22px] rounded-full bg-[#373b40] border hover:no-underline border-[#414852] text-[14px]  w-[64px] h-[64px]"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="subtitle text-[14px] text-[#68e0cf] font-bold font-poppins">MY PLANS </div>

            <div className="relative px-6">
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ width: '627px' }}
                >
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className=" min-w-[297px] max-w-[297px] p-6 rounded-2xl text-center item-center flex-shrink-0"
                        >
                            <div className="text-teal-400 text-3xl mb-2">{ plan.icon }</div>
                            <h3 className=" font-bold mb-2 text-[18px]">{plan.name}</h3>
                            <p className="text-[54px] font-bold mb-4">
                                ${plan.price}{" "}
                                <span className="text-[14px] font-light text-gray-400">/hour</span>
                            </p>
                            <ul className="space-y-2 mb-4">
                                {plan.services.map((service, i) => (
                                    <li key={i} className="text-sm">
                                        {service}
                                        {service === "Photography" && (
                                            <span className="ml-2 px-2 py-0.5 text-xs bg-teal-500 text-black rounded-full">
                                                new
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <button className="font-poppins group mt-8 bold bg-transparent border rounded-full px-[25px] py-[25px] w-[143px] ml-[53px] border-[#52575E] text-[12px] text-white font-bold hover:border-[#5DD5C4] transition flex items-center justify-center gap-2">
                                BUY NOW <ChevronRight className="w-4 h-4 group-hover:text-[#5DD5C4] transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
