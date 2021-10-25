import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function HamburgerButton() {
  return (
    <div className="toggleThemeBtn dark:toggleThemeBtnDark">
      <FontAwesomeIcon
        icon={faBars}
        className="text-base align-middle text-center"
      />
    </div>
  );
}
