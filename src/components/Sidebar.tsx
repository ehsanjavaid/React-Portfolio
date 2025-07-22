// src/components/HeroText.tsx
const HeroText = () => {
  return (
    <div className="ml-[33.33%] min-h-screen bg-[#2d2f33] text-white flex flex-col justify-center px-10">
      <h1 className="text-6xl font-bold leading-tight">Joé<br />Wilson</h1>
      <p className="text-teal-400 mt-4 font-semibold">CONSULTANT AND M</p>
      <p className="mt-4 text-lg max-w-lg">
        Hello! I am Web Developer from United States, New York. I have rich experience
        in website design and building, also I am good at WordPress. I love to talk with
        you about our unique.
      </p>
      <button className="mt-8 bg-transparent border rounded-full px-6 py-3 text-white font-bold hover:bg-white hover:text-black transition">
        CONTACT ME →
      </button>
    </div>
  );
};

export default HeroText;
