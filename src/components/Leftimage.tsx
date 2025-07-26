const LeftImage = () => {
  return (
    <div className="w-1/2 fixed top-0 left-0 bg-gray-200 z-0">
      <div className="relative h-screen">
        <img
          src="/myimage.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#6CE4D3] opacity-40 mix-blend-multiply"></div>
      </div>
    </div>

  );
};

export default LeftImage;

