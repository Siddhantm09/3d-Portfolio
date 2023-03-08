import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen ">
      {/* mx-auto */}
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl flex flex-row `}
        //   inset-0 mx-auto items-start gap-5
      >
        <div className="flex flex-col items-center mt-5">
          {/* justify-center*/}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            {/* text-white */}
            Hi, I'm <span className="text-[#915eff]">Siddhant</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop Full Stack Applications using
            <br className="sm:block hidden" />
            ReactJs MongoDB ExpressJs and NodeJs
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
