import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  // "Linux",
  // "Docker",
  "Javascript",
  "Figma",
  "Express",
  "Jetpack Compose",
  "Nuxt.js",
  // "Azure",
  "Next.js",
  "Data Structures",
];
const cppLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png";

function AboutSection() {
  return (
    <div
      id="about"
      className="h-screen overflow-visible w-11/12 flex flex-col items-center justify-center relative"
    >
      <div
        className="relative aboutCard dark:aboutCardDark w-full flex flex-col md:flex-row"
        data-inviewport="zoom-in"
      >
        <div
          className="flex flex-col justify-start h-full items-center flex-1 w-full"
          data-inviewport="slide-in-right"
        >
          <PhotoSection />

          <p className="font-bold text-2xl text-textHeadBlack dark:text-drForeGround noSelect text-center">
            Siddhesh Kothadi
          </p>
          <p className="text-drCurrentLine dark:text-drForeGround py-2 text-center">
            android | web-dev | c++
          </p>

          <div className="typewriterSection dark:typewriterSectionDark py-2 my-4">
            <Typewriter
              options={{
                strings: skills,
                autoStart: true,
                loop: true,
                cursorClassName: "blinking-cursor",
              }}
            />
          </div>
        </div>

        <div
          className="flex-1 flex flex-col items-center md:items-start w-full h-full justify-center mt-4 md:pl-8"
          data-inviewport="slide-in-left"
        >
          <p className="text-xl font-medium text-textHeadBlack dark:text-drForeGround mb-4 hidden md:block">
            Profiles
          </p>
          <div className="flex flex-row flex-wrap space-x-4 items-center pb-8">
            <a
              className={"toggleThemeBtn dark:toggleThemeBtnDark"}
              style={{
                borderRadius: "50%",
              }}
              href="https://github.com/siddheshkothadi/"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  fontSize: "1.2rem",
                }}
              />
            </a>
            <a
              className={"toggleThemeBtn dark:toggleThemeBtnDark"}
              style={{
                borderRadius: "50%",
              }}
              href="https://www.linkedin.com/in/siddhesh-kothadi/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{
                  fontSize: "1.2rem",
                }}
              />
            </a>
            <a
              className={"toggleThemeBtn dark:toggleThemeBtnDark"}
              style={{
                borderRadius: "50%",
              }}
              href="https://twitter.com/siddhesh_kt"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  fontSize: "1.2rem",
                }}
              />
            </a>
          </div>
          <p className="text-xl font-medium text-textHeadBlack dark:text-drForeGround my-4 hidden md:block">
            Other Profiles
          </p>
          <div className="flex flex-row flex-wrap justify-around space-x-4 ">
            <a
              className="flex flex-row flex-wrap space-x-4 pb-4 items-center"
              href="https://siddhesh.bio.link/"
              target="_blank"
              rel="noopener"
            >
              <span className="text-drCurrentLine dark:text-drForeGround underline">
                bio.link
              </span>
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{
                  fontSize: "0.6rem",
                  marginLeft: "0.4rem",
                }}
              />
            </a>
            <a
              className="flex flex-row flex-wrap space-x-4 pb-4 items-center"
              href="https://leetcode.com/siddhesh_kt/"
              target="_blank"
              rel="noopener"
            >
              <span className="text-drCurrentLine dark:text-drForeGround underline">
                leetcode
              </span>
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{
                  fontSize: "0.6rem",
                  marginLeft: "0.4rem",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
