import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Menu(props) {
  const { isOpen, setIsOpen } = props;

  return isOpen ? (
    <div className="flex flex-col items-center fixed w-full h-full overflow-auto top-0 left-0 bottom-0 right-0 dark:bg-drBackground bg-lightBackground z-50 menuSlide">
      <div className="flex flex-row w-full p-2 pr-5 items-center justify-end">
        <div
          className="p-5 cursor-pointer rounded-xl flex items-center justify-center hover:innerShadow dark:hover:innerShadowCircleDark"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon
            icon={faTimes}
            className="align-middle text-center text-textBlack dark:text-drForeGround"
            style={{
              fontSize: "1.5rem",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-full justify-evenly items-center">
        <div
          className="p-6 cursor-pointer rounded-xl flex items-center justify-center hover:innerShadow dark:hover:innerShadowCircleDark w-11/12 noSelect text-2xl text-textHeadBlack dark:text-drForeGround"
          onClick={() => {
            setIsOpen(false);
            window.document.getElementById("about").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          About
        </div>
        <div
          className="p-6 cursor-pointer rounded-xl flex items-center justify-center hover:innerShadow dark:hover:innerShadowCircleDark w-11/12 noSelect text-2xl text-textHeadBlack dark:text-drForeGround"
          onClick={() => {
            setIsOpen(false);
            window.document.getElementById("projects").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Projects
        </div>
        <div
          className="p-6 cursor-pointer rounded-xl flex items-center justify-center hover:innerShadow dark:hover:innerShadowCircleDark w-11/12 noSelect text-2xl text-textHeadBlack dark:text-drForeGround"
          onClick={() => {
            setIsOpen(false);
            window.document.getElementById("contact").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Contact Me
        </div>
      </div>
    </div>
  ) : null;
}

export default Menu;
