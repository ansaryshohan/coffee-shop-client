const Hero = () => {
  return (
    <div className="w-full h-[700px] bg-heroBg bg-no-repeat bg-cover bg-center">
      <div className="w-full h-full bg-black/50 flex flex-col items-end ">
        <div className="w-full md:w-1/2 h-full text-[#ffffff] flex flex-col pt-40 md:pt-0 pl-6  md:justify-center gap-4">
          <h1 className="text-2xl md:text-4xl font-bold ">Would you like a Cup of Delicious Coffee?</h1>
          <p className="text-base md:text-lg font-light w-10/12">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] text-black font-medium text-2xl rounded w-fit px-4 py-2 mt-2 hover:text-primaryTextColor">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
