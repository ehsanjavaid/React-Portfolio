import React, { useState, useEffect } from "react";
import { ChevronRight, Globe, FolderCode, Boxes, Settings } from 'lucide-react';
import Pricingplan from "./Pricingplan";
import Experience from "./Experience";

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
            <h1 className="text-6xl font-bold leading-tight mt-[40px] ml-[-16vw] relative bg-[#373b40] p-[4.2vw] text-[4.2vw] rounded-[264px] font-montserrat">Ahsan<br />Javaid</h1>
            <p className="text-teal-400 mt-4 font-semibold h-8 font-poppins">
                {displayedText}
                <span className="border-r-2 border-teal-400 animate-pulse ml-1"></span>
            </p>
            <p className="mt-4 text-[14px] max-w-lg font-poppins">
                Hello! I’m Ahsan Javaid, a Full Stack & ERPNext Developer from Pakistan.
                I specialize in building web apps with Frappe, React, Vue.js, and Python.
                I love crafting clean, responsive UIs and custom ERP solutions that solve real problems. I love to talk with you about our unique.
            </p>
            <button className="font-poppins group mt-8 bold bg-transparent border rounded-full px-[25px] py-[25px] w-[192px] border-[#52575E] text-[12px] text-white font-bold hover:border-[#5DD5C4] transition flex items-center justify-center gap-2">
                CONTACT ME <ChevronRight className="w-4 h-4 group-hover:text-[#5DD5C4] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            {/* line */}
            <div className="w-full flex justify-center pt-[70px] pb-[40px]">
                <hr className="my-10 w-[100%] border-t border-gray-600" />
            </div>
            {/* about me */}
            <div className="flex flex-col titles ">
                <div className="title text-[55px] text-white font-bold font-montserrat">About Me </div>
                <div className="subtitle text-[14px] text-[#68e0cf] font-bold font-poppins">MY STORY </div>
                <div className="flex flex-row mt-[30px] justify-between  w-full mb-[30px] font-poppins">
                    <div className="pr-[20px] text-[14px] w-[50%]">I'm Ahsan Javaid, a dedicated Full Stack
                        & ERPNext Developer based in Pakistan. With hands-on experience in Frappe and ERPNext,
                        I specialize in crafting efficient, user-friendly business applications
                        that automate workflows and solve real-world problems.
                    </div>
                    <div className="px-[20px] text-[14px] w-[50%] ">I’m also proficient in modern web development using React,
                        Vue.js, and Python. I enjoy creating clean interfaces, working with APIs,
                        and building responsive dashboards that help users make smarter decisions.
                    </div>
                </div>
                <div className="pr-[20px] flex pt-[10px] text-[14px] font-poppins">Beyond coding, I’m passionate about innovation and meaningful problem-solving.
                    Whether it’s building custom ERP modules or contributing to full-stack projects,
                    I take pride in delivering polished solutions that add real value. I'm always open to new challenges and excited to collaborate with forward-thinking teams.

                </div>
                {/* About me 2nd part*/}
                <div className="flex flex-row gap-[15rem] mt-[40px] text-sm font-poppins">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-2  text-[14px]">
                            <span className="font-semibold text-[#68e0cf]">AGE:</span>
                            <span className="text-white">25</span>
                        </div>
                        <div className="flex flex-row gap-2  text-[14px]">
                            <span className="font-semibold text-[#68e0cf]">FREELANCE:</span>
                            <span className="text-white">Available</span>
                        </div>
                        <div className="flex flex-row gap-2  text-[14px]">
                            <span className="font-semibold text-[#68e0cf]">PHONE:</span>
                            <span className="text-white">+923138619329</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-2  text-[14px]">
                            <span className="font-semibold text-[#68e0cf]">RESIDENCE:</span>
                            <span className="text-white">PAKISTAN</span>
                        </div>
                        <div className="flex flex-row gap-2  text-[14px]">
                            <span className="font-semibold text-[#68e0cf]">ADDRESS:</span>
                            <span className="text-white">Lahore</span>
                        </div>
                        <div className="flex flex-row gap-2  text-[14px]">
                            <span className="font-semibold text-[#68e0cf]">EMAIL:</span>
                            <span className="text-white">ehsanjavaid321@gmail.com</span>
                        </div>
                    </div>
                </div>

            </div>
            {/* line 2 */}
            <div className="w-full flex justify-center pt-[70px]">
                <hr className="my-10 w-[100%] border-t border-gray-600" />
            </div>
            {/* Services */}
            <div className="flex flex-col">
                <div className="title text-[55px] text-white font-bold font-montserrat">Services </div>
                <div className="subtitle text-[14px] text-[#68e0cf] font-bold font-poppins">WHAT I DO </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[20px] font-poppins">
                    {/* Service 1 */}
                    <div className="flex flex-col items-start p-4 rounded-lg dark:bg-gray-900">
                        <Boxes className="w-8 h-8 text-[#68e0cf] mb-2" />
                        <h3 className="text-[18px] mb-[20px] font-bold">ERPNext / <br /> Frappe</h3>
                        <p className="text-[14px] text-white dark:text-gray-400">
                            Custom ERP apps, reports, and automations using Frappe Framework and Python.
                            Deep experience in ERPNext customization and integration.
                        </p>
                    </div>
                    {/* Service 2 */}
                    <div className="flex flex-col items-start p-4 rounded-lg dark:bg-gray-900">
                        <Globe className="w-8 h-8 mb-2 text-[32px] text-[#68e0cf]" />
                        <h3 className=" font-bold mb-[20px] text-[18px]">Web <br /> Development</h3>
                        <p className="text-[14px]  text-white dark:text-gray-400">
                            Crafting responsive websites using React, Vue.js, and Tailwind CSS.
                            Focused on performance, SEO, and clean UI/UX experiences.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="flex flex-col items-start p-4 rounded-lg dark:bg-gray-900">
                        <FolderCode className="w-8 h-8 text-[#68e0cf] mb-2" />
                        <h3 className="text-[18px] mb-[20px] font-bold">Software <br /> Development</h3>
                        <p className="text-[14px] text-white dark:text-gray-400">
                            Developing scalable applications with Python, JavaScript, and modern frameworks.
                            From automation tools to full-stack business software.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className="flex flex-col items-start p-4 rounded-lg dark:bg-gray-900">
                        <Settings className="w-8 h-8 text-[#68e0cf] mb-2" />
                        <h3 className="text-[18px] mb-[20px] font-bold">Technical <br /> Services</h3>
                        <p className="text-[14px] text-white dark:text-gray-400">
                            Providing support for server deployment, Linux, and API integrations.
                            Skilled with, Nginx, MariaDB, and cloud environments.
                        </p>
                    </div>
                </div>
            </div>
            {/* line 3 */}
            <div className="w-full flex justify-center pt-[70px]">
                <hr className="my-10 w-[100%] border-t border-gray-600" />
            </div>
            {/* Pricing */}
            <Pricingplan />
            {/* line 4 */}
            <div className="w-full flex justify-center pt-[70px]">
                <hr className="my-10 w-[100%] border-t border-gray-600" />
            </div>
            {/* <!-- Experience Section --> */}
            <Experience />

        </div>
    );
};

export default HeroText;
