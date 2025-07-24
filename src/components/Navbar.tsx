import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Download } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-[92%] text-white bg-[#585D65] font-poppins">
            <nav className=" w-[92%] justify-between fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-[#585D65] text-white px-6 py-3 rounded-full shadow-md flex gap-6">
                <div className="flex w-[15%] justify-evenly">
                    <img src="/logo.png" alt="" className="w-[50px]" />
                    <span className="text-xl font-bold font-montserrat"> Ahsan <br /> Javaid</span>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 w-[50%] justify-around items-center">
                    <a href="#home" className="hover:text-teal-400 text-white">HOME</a>
                    <a href="#about" className="hover:text-teal-400 text-white">ABOUT</a>
                    <a href="#projects" className="hover:text-teal-400 text-white">PROJECTS</a>
                    <a href="#contact" className="hover:text-teal-400 text-white">CONTACT</a>
                    <a href="#contact" className="hover:text-white group text-white flex items-center  rounded-[40px]  gap-1 border border-white hover:border-[#5DD5C4] px-[25px] py-[16px]">
                        DOWNLOAD CV <Download className="w-4 h-4 group-hover:text-[#5DD5C4]" />
                    </a>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-gray-700 flex flex-col items-center gap-4 py-6 md:hidden z-50">
                        <a href="#home" className="hover:text-teal-400 text-white">HOME</a>
                    <a href="#about" className="hover:text-teal-400 text-white">ABOUT</a>
                    <a href="#projects" className="hover:text-teal-400 text-white">PROJECTS</a>
                    <a href="#contact" className="hover:text-teal-400 text-white">CONTACT</a>
                    <a href="#contact" className="hover:text-white text-white flex items-center  rounded-[40px]  gap-1 border border-white hover:border-[#5DD5C4] px-[25px] py-[16px]">
                        DOWNLOAD CV <Download className="w-4 h-4" />
                    </a>
                    </div>
                )}
            </nav>
           
        </div>
    );
};

export default Navbar;
