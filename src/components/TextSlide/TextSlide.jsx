import React, { useRef } from "react";
import Contact from "../Contact/Contact";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function TextSlide({ portfolioRef, featuresRef, contactRef, homeRef }) {
  

  return (
    <div className="lg:pt-8 pt-8 max-w-full shadow-xl relative ">
      <div className="max-w-[1400px] lg:pb-16 pb-12 mx-auto relative z-40">
        <div className="flex flex-col">
          <div className="text-marqueeText lg:text-[100px] sm:text-7xl text-5xl ">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="20"
              className="leading-tight"
            >
              Let's get your <span className="text-heroColor">business</span>
            </marquee>
          </div>
          <div className="text-marqueeText lg:text-[110px] sm:text-7xl text-5xl ">
            <marquee
              behavior="scroll"
              direction="right"
              scrollamount="20"
              className="leading-tight"
            >
              where <span className="text-heroColor">you</span> want it to be
            </marquee>
          </div>
        </div>
      </div>

      

      <Contact
        portfolioRef={portfolioRef}
        featuresRef={featuresRef}
        contactRef={contactRef}
        homeRef={homeRef}
      />
    </div>
  );
}

export default TextSlide;
