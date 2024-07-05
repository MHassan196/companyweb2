import React, { useRef } from "react";
import TeamCard from "../TeamCard/TeamCard";
import member1Img from "../../assets/img/member1.png";
import member2Img from "../../assets/img/member2.jpeg";
import member3Img from "../../assets/img/member3.jpg";
import fb from "../../assets/img/fb.png";
import insta from "../../assets/img/insta.png";
import linkedIn from "../../assets/img/linkedin.png";
import be from "../../assets/img/Be.png";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const members = [
  {
    imgMember: member1Img,
    name: "Tabish Dehlvi",
    role: "Developer",
    socialIcons: [fb, be, insta, linkedIn],
  },
  {
    imgMember: member2Img,
    name: "Zain Ahsan",
    role: "Developer",
    socialIcons: [fb, be, insta, linkedIn],
  },
  {
    imgMember: member3Img,
    name: "Muhammad Hassan",
    role: "Frontend Developer",
    socialIcons: [fb, be, insta, linkedIn],
  },
];
function Team() {
  const teamHead = useRef(null);
  const teamPara = useRef(null);


  // const heading = "OUR EXPERTS Friendly Team";
  // const splitHeading = heading.split("");
  // const joinHeading = splitHeading.map((item, index) => (
  //   <span key={index} className={`inline-block ${item === " " ? "whitespace-pre" : "whitespace-normal"}`}>{item}</span>
  // ));

  useGSAP(() => {
    const letters = teamHead.current.querySelectorAll("span");
    gsap.from(letters, {
      opacity: 0,
      y: -100,
      duration: 1,
      stagger: 0.2,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: teamHead.current,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none none",
        scrub: true,
        // markers: true,
      },
    });

    gsap.from(teamPara.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: teamPara.current,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none none",
        scrub: true,
        // markers: true,
      },
    });
    
  });

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
    <div className="lg:py-12 lg:px-8 py-8 px-4 max-w-full min-h-[87vh]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h3
              className="text-white lg:text-5xl sm:text-4xl text-3xl font-bold"
              ref={teamHead}
            >
              {splitText("OUR EXPERTS ")}
              <span className="inline-block">{splitText("Friendly ")}</span>
              <span className="inline-block">{splitText("Team ")}</span>
            </h3>
            <p className="text-introColor sm:text-base text-sm" ref={teamPara}>
              At the heart of CollabEz is our team—a diverse group of dreamers,
              doers, and digital enthusiasts who live and breathe creativity.
              We're designers, developers, marketers, and social media gurus,
              each bringing our unique skills and perspectives to the table. But
              what unites us is our shared passion for helping our clients
              succeed.
            </p>
          </div>

          <div className="flex flex-row justify-between items-start flex-wrap gap-5" >
            {members.map((member, index) => (
              <TeamCard
                imgMember={member.imgMember}
                name={member.name}
                role={member.role}
                socialIcons={member.socialIcons}
              />
            ))}
          </div>
        </div>
      </div>


      
    </div>
  );
}

export default Team;
