import React, { useState, useEffect } from "react";
import { ChevronRight } from 'lucide-react';

const HeroText: React.FC = () => {
    const texts = ['ERPNEXT DEVELOPER', 'FULL STACK DEVELOPER', 'SOFTWARE ENGINEER'];
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        let timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentText.length) {
                    setIsDeleting(true);
                }
            } else {
                setDisplayedText(currentText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts]);

    return (
        <div className="pt-[130px] ml-[49.33%] bg-[#373b40] text-white flex flex-col justify-center px-10">
            <h1 className="text-6xl font-bold leading-tight mt-[40px] ml-[-12vw] relative bg-[#373b40] p-[4.2vw] text-[4.2vw] rounded-[264px] ">Ahsan<br />Javaid</h1>
            <p className="text-teal-400 mt-4 font-semibold h-8">
                {displayedText}
                <span className="border-r-2 border-teal-400 animate-pulse ml-1"></span>
            </p>
            <p className="mt-4 text-[14px] max-w-lg">
                Hello! I’m Ahsan Javaid, a Full Stack & ERPNext Developer from Pakistan.
                I specialize in building web apps with Frappe, React, Vue.js, and Python.
                I love crafting clean, responsive UIs and custom ERP solutions that solve real problems. I love to talk with you about our unique.
            </p>
            <button className="group mt-8 bold bg-transparent border rounded-full px-[25px] py-[25px] w-[192px] border-[#52575E] text-[12px] text-white font-bold hover:border-[#5DD5C4] transition flex items-center justify-center gap-2">
                CONTACT ME <ChevronRight className="w-4 h-4 group-hover:text-[#5DD5C4] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <div className="w-full flex justify-center">
                <hr className="my-10 w-[100%] border-t border-gray-600" />
            </div>
        </div>
    );
};

export default HeroText;
