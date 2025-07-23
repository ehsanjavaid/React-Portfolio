import React, { useState, useEffect } from "react";
import { ChevronRight } from 'lucide-react';

const HeroText: React.FC = () => {
    const texts = ['ERPNEXT DEVELOPER', 'FULL STACK DEVELOPER', 'SOFTWARE DEVELOPER'];
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
        <div className=" pt-[130px] ml-[49.30%] bg-[#373b40] text-white flex flex-col justify-center px-[40px] flex-1">
            <h1 className="text-6xl font-bold leading-tight mt-[40px] ml-[-16vw] relative bg-[#373b40] p-[4.2vw] text-[4.2vw] rounded-[264px] ">Ahsan<br />Javaid</h1>
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
            <div className="flex flex-col titles">
                <div className="title text-[55px] text-white font-bold">About Me </div>
                <div className="subtitle text-[14px] text-[#68e0cf] font-bold">MY STORY </div>
                <div className="flex flex-row mt-[30px] justify-between  w-full mb-[30px]">
                    <div className="pr-[20px] text-[14px] w-[50%]">I'm Ahsan Javaid, a dedicated Full Stack
                        & ERPNext Developer based in Pakistan. With hands-on experience in Frappe and ERPNext,
                        I specialize in crafting efficient, user-friendly business applications
                        that automate workflows and solve real-world problems.
                    </div>
                    <div className="px-[20px] text-[14px] w-[50%]">I’m also proficient in modern web development using React,
                        Vue.js, and Python. I enjoy creating clean interfaces, working with APIs,
                        and building responsive dashboards that help users make smarter decisions.
                    </div>
                </div>
                <div className="pr-[20px] flex pt-[10px] text-[14px]">Beyond coding, I’m passionate about innovation and meaningful problem-solving.
                    Whether it’s building custom ERP modules or contributing to full-stack projects,
                    I take pride in delivering polished solutions that add real value. I'm always open to new challenges and excited to collaborate with forward-thinking teams.

                </div>
            </div>

        </div>
    );
};

export default HeroText;
