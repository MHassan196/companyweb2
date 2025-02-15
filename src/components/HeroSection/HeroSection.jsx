import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/img/logo.png";
import starImg from "../../assets/img/star.png";
import circleImg from "../../assets/img/circleimg.png";
import ellipseImg from "../../assets/img/ellipse.png";
import arrowImg from "../../assets/img/arrow.png";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroCircle from "../HeroCircle/HeroCircle";
import Navbar from "../Navbar/Navbar";
import TopLine from "../TopLine/TopLine";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({
  portfolioRef,
  featuresRef,
  contactRef,
  homeRef,
}) {
  // const gsapInstance = useGSAP(gsap); // Initialize GSAP useGSAP hook with gsap instance
  const mainContainer = useRef(null);

  const viewAnimate = useRef(null);
  const headingRef = useRef(null);
  const heroTextRef = useRef(null);
  const introHead = useRef(null);
  const introPara = useRef(null);
  const viewBtn = useRef(null);
  const circleRef = useRef(null);
  const roundRef1 = useRef(null);
  const roundRef2 = useRef(null);
  const viewText = useRef(null);

  const sections = {
    Home: mainContainer,
    Portfolio: portfolioRef,
    Features: featuresRef,
    Contact: contactRef,
  };

  const { contextSafe } = useGSAP({ scope: mainContainer });

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.inOut",
      }
    );
  }, []);
  useGSAP(() => {
    gsap.from(heroTextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });
  useGSAP(() => {
    gsap.to(circleRef.current, {
      y: 33,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "back.out",
    });
  });

  const viewProjText = gsap.timeline({ paused: true });

  useGSAP(() => {
    viewProjText
      .from(introHead.current, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power1.out",
        scrollTrigger: {
          trigger: introHead.current,
          start: "top 70%",
          toggleActions: "play none none none",
          scrub: true,
        },
      })
      .from(introPara.current, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power1.out",
        scrollTrigger: {
          trigger: introPara.current,
          start: "top 80%",
          toggleActions: "play none none none",
          scrub: true,
        },
      })
      .from(viewBtn.current, {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: viewBtn.current,
          start: "top 80%",
          toggleActions: "play none none none",
          scrub: true,
        },
      });
  });
  // const headerAnimate = gsap.timeline({ paused: true });

  const handleNavClick = (section) => {
    const targetRef = sections[section];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }

    // Close the menu
    navTl.reverse();
    menuBar.reverse();

    document.body.style.overflow = ""; // Restore scrolling
  };

  let animationRef = null;

  const animateViewEnter = contextSafe(() => {
    gsap.to(viewAnimate.current, {
      x: 50,
      duration: 1,
      color: "#ffffff",
    });

    animationRef = gsap
      .timeline()
      .to(roundRef2.current, {
        x: 20,
        duration: 0,
      })
      .to(viewText.current, {
        color: "#ffffff",
        duration: 0.3,
      })
      .to([roundRef1.current, roundRef2.current], {
        rotationY: 360,
        duration: 1.3,
        ease: "linear",
        // repeat: -1,
        // yoyo: true,
        transformOrigin: "center center",
      })
      .to(
        [roundRef1.current, roundRef2.current],
        {
          background:
            "linear-gradient(55deg, #FFAE00 0%, #ffc549 50%, #ff9f00 100%)",
          duration: 0.5,
          ease: "power1.out",
        },
        0
      );
  });
  const animateViewLeave = contextSafe(() => {
    gsap.to(viewAnimate.current, {
      x: 0,
      duration: 1,
    });
    gsap.to(roundRef2.current, {
      x: 0,
      duration: 0.5,
    });
    gsap.to(viewText.current, {
      color: "#D9D9D9",
      duration: 0.3,
    });

    if (animationRef) {
      animationRef.kill();
      gsap.to([roundRef1.current, roundRef2.current], {
        rotationY: 0,
        background: "transparent",
        duration: 1,
        ease: "power1.out",
      });
    }
  });

  const chars = headingRef.current;

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char"
        style={{
          display: "inline-block",
          whiteSpace: char === " " ? "pre" : "normal",
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <>
      <div
        className="bg-[url('/src/assets/img/herobg2.png')] bg-no-repeat bg-cover bg-moveup max-w-full relative overflow-hidden"
        ref={mainContainer}
      >
        <div className="bg-[url('/src/assets/img/herolines.png')] bg-no-repeat bg-cover bg-center w-full h-full">
          <TopLine />

          <Navbar />

          <div className="relative isolate px-4 pt-14 py-8  lg:px-8 max-w-full ">
            <div className="max-w-[1400px] mx-auto px-3 pt-32 sm:pt-32 lg:pt-32 lg:flex lg:flex-row lg:justify-between">
              <div>
                <h1
                  className="text-4xl max-w-2xl font-bold tracking-tight text-white sm:text-6xl md:text-6xl xl:text-7xl"
                  ref={headingRef}
                >
                  {splitText("Let's Create ")}
                  <span className="inline-block">
                    {splitText("Extraordinary ")}
                  </span>
                  <span className="text-heroColor inline-block">
                    {splitText("Logo")}
                  </span>
                </h1>

                <p
                  className="mt-6 text-lg leading-6 text-white"
                  ref={heroTextRef}
                >
                  Transforming Ideas into Extraordinary Digital {""}
                  <span className="inline-block">Experiences</span>
                </p>
              </div>
              <HeroCircle
                text="Branding Creative Design Logo"
                rotateAngle={12}
                starSize="450px"
                textSizeWidth="w-60"
                textSizeHeight="h-60"
                top="top-5"
                originSize="100px"
                innerSizeWidth="w-32"
                innerSizeHeight="h-32"
                innerPadding="p-8"
                smallCircleSizeWidth="w-8"
                smallCircleSizeHeight="h-8"
              />
            </div>
          </div>
          <div className="w-full h-[10px] bg-heroColor"></div>
        </div>
        <div className="max-w-full lg:py-20 px-4 lg:px-8 py-10">
          <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-start flex flex-col gap-6">
            <div className="flex flex-col gap-4 lg:max-w-3xl max-w-full lg:grow">
              <h2
                className="text-white sm:text-6xl text-4xl font-bold"
                ref={introHead}
              >
                Where Digital Dreams{" "}
                <span className="lg:block">Take Flight</span>
              </h2>
              <p className="text-introColor lg:text-base" ref={introPara}>
                We are your creative partner in the digital realm. We're not
                just a company, we're a team of dreamers, creators, and
                innovators dedicated to bringing your digital dreams to life.
              </p>
            </div>

            <div
              className="lg:w-[270px] w-full relative flex gap-12 items-center cursor-pointer"
              onClick={() => handleNavClick("Portfolio")}
              ref={viewBtn}
            >
              <div
                className="relative"
                onMouseEnter={animateViewEnter}
                onMouseLeave={animateViewLeave}
              >
                <div
                  className="w-20 h-20 border-2 border-borderColor rounded-full"
                  ref={roundRef1}
                />
                <div
                  className="w-20 h-20 border-2 border-borderColor rounded-full absolute top-0 left-0"
                  ref={roundRef2}
                />
              </div>
              <div
                className="absolute left-6 flex justify-start gap-6 w-full"
                ref={viewAnimate}
                onMouseEnter={animateViewEnter}
                onMouseLeave={animateViewLeave}
              >
                <p className="text-viewProj text-xs" ref={viewText}>
                  View All Projects
                </p>
                <img src={arrowImg} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
