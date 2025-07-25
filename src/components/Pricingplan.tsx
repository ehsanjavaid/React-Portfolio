import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ChevronRight, ChevronLeft, Star, Gem, Rocket } from "lucide-react";

interface PricingPlan {
    name: string;
    price: string;
    services: string[];
    icon: ReactNode;
}

const pricingPlans: PricingPlan[] = [
    {
        name: "Basic",
        price: "49",
        services: [
            "Static Website (1–2 pages)",
            "Basic ERPNext Setup",
            "Custom Print Format (1)",
            "Bug Fixing / Small Customization",
            "Database Backup",
            "ERPNext Custom App Development",
            "Vue/React Dashboard Integration",
            "WhatsApp ChatBot Integration",
            "AI-Powered Dashboards",
        ],
        icon: <Star className="text-teal-400 w-8 h-8 mx-auto mb-2" />,
    },
    {
        name: "Premium",
        price: "149",
        services: [
            "Static Website (3–5 pages)",
            "ERPNext Setup + Customization",
            "Multiple Print Formats (up to 3)",
            "Backend CRUD APIs (Frappe + Vue)",
            "Database Backup & Optimization",
            "ERPNext Custom App Development",
            "Vue/React Dashboard Integration",
            "WhatsApp ChatBot Integration",
            "AI-Powered Dashboards (Basic)",
        ],
        icon: <Gem className="text-teal-400 w-8 h-8 mx-auto mb-2" />,
    },
    {
        name: "Ultimate",
        price: "299",
        services: [
            "Full-Stack Web App (React + API)",
            "Complete ERPNext Solution",
            "Unlimited Print Formats & Reports",
            "Advanced API Integrations",
            "Database Optimization & Auto Backup",
            "Custom ERP App Development",
            "Vue/React Dashboards (with Charts)",
            "WhatsApp + Biometric Integration",
            "AI Dashboards + VPS Deployment",
        ],
        icon: <Rocket className="text-teal-400 w-8 h-8 mx-auto mb-2" />
    },
];

export default function Pricing() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Create infinite loop by duplicating plans
    const extendedPlans = [...pricingPlans, pricingPlans[0]]; // Add first plan at the end

    const scrollToPlan = (index: number) => {
        if (!scrollRef.current || isAnimating) return;

        setIsAnimating(true);
        const scrollPosition = index * 321; // 297px width + 24px gap
        scrollRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        // Update current index after animation
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
        }, 300);
    };

    const scroll = (direction: "left" | "right") => {
        if (isAnimating) return;

        let newIndex = currentIndex;
        if (direction === "right") {
            newIndex = (currentIndex + 1) % extendedPlans.length;
        } else {
            newIndex = currentIndex === 0 ? extendedPlans.length - 1 : currentIndex - 1;
        }

        scrollToPlan(newIndex);
    };

    // Handle infinite loop illusion
    useEffect(() => {
        if (!scrollRef.current) return;

        const handleScrollEnd = () => {
            if (currentIndex === extendedPlans.length - 1) {
                // Jump to first real item without animation
                setCurrentIndex(0);
                if (scrollRef.current) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        };

        const container = scrollRef.current;
        container.addEventListener('scroll', handleScrollEnd);
        return () => container.removeEventListener('scroll', handleScrollEnd);
    }, [currentIndex, extendedPlans.length]);

    return (
        <section className="text-white py-12">
            <div className="flex flex-row items-center justify-between mb-6 w-[92%]">
                <div className="text-[42px] md:text-[55px] text-white font-bold font-montserrat">
                    Pricing
                </div>
                <div className="flex space-x-3 text-center">
                    <button
                        onClick={() => scroll("left")}
                        className="bg-[#373b40] px-[22px] hover:none text-white rounded-full border border-[#414852] text-[14px] w-[64px] h-[64px] mr-[15px]"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="text-white px-[22px] rounded-full bg-[#373b40] border hover:no-underline border-[#414852] text-[14px] w-[64px] h-[64px]"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="subtitle text-[14px] text-[#68e0cf] font-bold font-poppins">MY PLANS</div>

            <div className="relative px-6">
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-hidden scrollbar-hide"
                    style={{ width: '627px' }}
                >
                    {extendedPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="min-w-[297px] max-w-[297px] p-6 rounded-2xl text-center item-center flex-shrink-0"
                        >
                            <div className="text-teal-400 text-3xl mb-2">{plan.icon}</div>
                            <h3 className="font-bold mb-2 text-[18px]">{plan.name}</h3>
                            <p className="text-[54px] font-bold mb-4">
                                ${plan.price}
                            </p>
                            <ul className="mb-4 font-poppins">
                                {plan.services.map((service, i) => {
                                    const shouldStrike =
                                        plan.name === "Basic" &&
                                        [
                                            "ERPNext Custom App Development",
                                            "Vue/React Dashboard Integration",
                                            "WhatsApp ChatBot Integration",
                                            "AI-Powered Dashboards",
                                        ].includes(service);

                                    return (
                                        <li
                                            key={i}
                                            className={`text-sm ${shouldStrike ? "line-through text-gray-500 font-poppins" : ""}`}
                                            style={{
                                                lineHeight: '26px',
                                                marginBottom: '12px',
                                                paddingTop: '2px',
                                                paddingBottom: '2px',
                                            }}
                                        >
                                            {service}
                                            {!shouldStrike && service === "Photography" && (
                                                <span className="ml-2 px-2 py-0.5 text-xs bg-teal-500 text-black rounded-full">
                                                    new
                                                </span>
                                            )}
                                        </li>
                                    );
                                })}
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