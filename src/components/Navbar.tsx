import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-[92%] h-screen text-white">
            <nav className=" overflow-hidden relative z-10 bg-[#585D65] top-0 text-white flex justify-between items-center p-[14px] mt-[30px] rounded-[100px]">
                <div className="flex w-[15%] justify-evenly">
                    <img src="/src/assets/logo.png" alt="" className="w-[50px]" />
                    <span className="text-xl font-bold font-sans"> Ahsan <br /> Javaid</span>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 w-[50%] justify-around">
                    <a href="#home" className="hover:text-teal-400 text-white">Home</a>
                    <a href="#about" className="hover:text-teal-400 text-white">About</a>
                    <a href="#projects" className="hover:text-teal-400 text-white">Projects</a>
                    <a href="#contact" className="hover:text-teal-400 text-white">Contact</a>
                    <a href="#contact" className="hover:text-teal-400 text-white">Download CV</a>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-gray-700 flex flex-col items-center gap-4 py-6 md:hidden z-50">
                        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
