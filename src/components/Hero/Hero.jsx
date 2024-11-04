const HeroSection = () => {
  return (
    <section>
      <div
        className="h-screen flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-red-500 opacity-50"></div>{" "}
        {/* Red overlay with opacity */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bebas text-[40px] leading-[60px] md:text-[60px] md:leading-[90px] lg:text-[80px] lg:leading-[110px]">
            Taste the authentic
            <br />
            Saudi cuisine
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Among the best Saudi chefs in the world, serving <br />
            you something beyond flavor.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#FEBF00] text-black font-bold text-lg rounded shadow hover:bg-[#e0a800] transition duration-300">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
