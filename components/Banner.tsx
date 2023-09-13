
const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      <div className="w-44 h-44 rounded-full bg-black">
        {/* <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        /> */}
      </div>
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Aitbaev Ulukbek</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Junior+ Frontend Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          I quickly pick up new skills, stay focused, and am driven to both work
          and learn. During my free time, i enjoy working on pet-projects
          involing various technologies. This hepls me gain hands-on experience
          in coding, which i plan to apply in my future career
        </p>
      </div>
    </div>
  );
};

export default Banner;
