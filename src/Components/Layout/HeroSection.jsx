import React from "react";
import Signup from "./Signup";

const HeroSection = () => {
  return (
    <section className="text-white body-font container mx-auto">
      <div className="py-24 mx-auto flex flex-wrap items-center text-center md:text-start md:w-[890px]">
        <div className="md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h2 className="title-font font-bold text-6xl">
            Generate Awesome Web pages
          </h2>
          <h5 className="leading-relaxed mt-6 font-medium text-2xl w-96">
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </h5>
          <button className="bg-actionThird font-medium text-lg py-3 px-7 rounded-full mt-10">
            Learn More
          </button>
        </div>

        <Signup />
      </div>
    </section>
  );
};

export default HeroSection;
