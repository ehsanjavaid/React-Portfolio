import { useRef } from "react";

interface PricingPlan {
    name: string;
    price: string;
    services: string[];
}

const pricingPlans: PricingPlan[] = [
    {
        name: "Basic",
        price: "29",
        services: ["Web Development", "Advertising"],
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
    },
];

export default function Pricing() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            if (direction === "left") scrollRef.current.scrollLeft -= 320;
            else scrollRef.current.scrollLeft += 320;
        }
    };

    return (
        <section className=" text-white py-12">
            <div className="title text-[55px] text-white font-bold font-montserrat">Pricing </div>
            <div className="subtitle text-[14px] text-[#68e0cf] font-bold font-poppins">MY PLANS </div>

            <div className="relative px-6">
                <div className="flex justify-end mb-4 space-x-2">
                    <button
                        onClick={() => scroll("left")}
                        className="bg-teal-500 hover:bg-teal-600 rounded-full p-2"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="bg-teal-500 hover:bg-teal-600 rounded-full p-2"
                    >
                        →
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className=" min-w-[280px] max-w-[300px] p-6 rounded-2xl shadow-lg flex-shrink-0"
                        >
                            <div className="text-teal-400 text-3xl mb-2">🚀</div>
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-4xl font-bold mb-4">
                                ${plan.price}{" "}
                                <span className="text-sm font-light text-gray-400">/hour</span>
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
                            <button className="bg-teal-500 hover:bg-teal-600 text-black px-4 py-2 rounded-full font-semibold">
                                BUY NOW →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
