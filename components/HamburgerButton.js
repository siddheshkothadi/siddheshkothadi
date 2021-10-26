import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function HamburgerButton(props) {
  const { onClick } = props;
  return (
    <div className="toggleThemeBtn dark:toggleThemeBtnDark" onClick={onClick}>
      <FontAwesomeIcon
        icon={faBars}
        className="text-base align-middle text-center"
      />
    </div>
  );
}
