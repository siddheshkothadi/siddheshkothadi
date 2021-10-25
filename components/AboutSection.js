import React from "react";
import Typewriter from "typewriter-effect";
import PhotoSection from "./PhotoSection";

const skills = [
  "C++",
  "Android",
  "Web-Dev",
  "React",
  "React Native",
  "Git",
  "GitHub",
  "HTML",
  "Kotlin",
  "CSS",
  "Linux",
  "Docker",
  "Javascript",
  "Figma",
  "Express",
  "Jetpack Compose",
  "Nuxt.js",
  "Azure",
  "Next.js",
  "Data Structures",
];

function AboutSection() {
  return (
    <div
      id="about"
      className="h-screen overflow-visible w-11/12 flex flex-col items-center pb-8 relative"
    >
      <p className="text-2xl font-semibold text-textHeadBlack dark:text-drForeGround mb-20 mr-auto">
        About Me
      </p>
      <div className="relative aboutCard dark:aboutCardDark w-full flex flex-col">
        <PhotoSection />

        <p>Siddhesh Kothadi</p>
        <p>Android | Web-Dev | C++ | DSC logo</p>

        <div className="typewriterSection dark:typewriterSectionDark py-2">
          <Typewriter
            options={{
              strings: skills,
              autoStart: true,
              loop: true,
              cursorClassName: "blinking-cursor",
            }}
          />
        </div>

        <p>BioLink: https://siddhesh.bio.link/</p>
        <p>GitHub</p>
        <p>Twitter</p>
        <p>Linkedin</p>
        <p>Leetcode</p>
      </div>
    </div>
  );
}

export default AboutSection;
