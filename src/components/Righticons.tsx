import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialSidebar = () => {
    return (
        <div className="fixed right-0 top-0 h-screen w-16 bg-[#373b40] flex flex-col items-center justify-center gap-6">
            {/* GitHub Icon */}
            <a
                href="https://github.com/ehsanjavaid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:bg-gray-700 transition"
            >
                <FaGithub className="text-white text-xl" />
            </a>

            {/* LinkedIn Icon */}
            <a
                href="https://www.linkedin.com/in/ahsan-javaid-75032319b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:bg-gray-700 transition"
            >
                <FaLinkedinIn className="text-white text-xl" />
            </a>
        </div>
    );
};

export default SocialSidebar;
