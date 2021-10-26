import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function IntroSection() {
  return (
    <div className="introContainer z-10">
      <div className="introContainerLeft" data-inviewport="slide-in-right">
        <p className="w-full text-center md:text-left text-3xl font-semibold text-textHeadBlack dark:text-drForeGround">
          Namaste 🙏
        </p>
        <p
          className="text-drCurrentLine dark:text-drForeGround"
          style={{
            fontSize: "1.4em",
            fontWeight: 300,
          }}
        >
          I'm &nbsp;
          <code className="nameGradient">Siddhesh Kothadi</code>
          &nbsp; from Pune <b>🇮🇳</b>. A self taught developer always looking to
          learn new things. With a passion for android and web development.
        </p>
        <div className="pt-4 flex flex-row justify-center md:justify-start items-center w-full">
          <div
            className="toggleThemeBtn dark:toggleThemeBtnDark max-w-max"
            style={{
              borderRadius: "1rem",
              padding: "0.8rem",
              margin: "0",
            }}
            onClick={() => {
              window.document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <strong className="text-textHeadBlack dark:text-drForeGround noSelect">
              Contact Me
            </strong>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-8 align-middle text-center animate-pulse text-orange cursor-pointer downTransition noTapHighlight"
            onClick={() => {
              window.document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
            style={{
              fontSize: "1.5rem",
            }}
          />
        </div>
      </div>
      <div className="introContainerRight" data-inviewport="zoom-in">
        <img
          src="/avatar.webp"
          className="w-full max-w-md"
          alt="coder-avatar"
        />
      </div>
    </div>
  );
}

export default IntroSection;
