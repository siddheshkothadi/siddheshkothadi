import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import HamburgerButton from "./HamburgerButton";

function Header(props) {
  const [navbarShadowStyle, setNavbarShadowStyle] = React.useState("");
  const [navNameStyle, setNavNameStyle] = React.useState("");

  React.useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        window.document.body.scrollTop > 20 ||
        window.document.documentElement.scrollTop > 20
      ) {
        window.document.getElementById("navbar-name").style.visibility =
          "visible";
        setNavbarShadowStyle(
          " bottomShadow dark:bottomShadowDark bg-lightBackground dark:bg-drBackground"
        );
        setNavNameStyle(" navNameTransition");
      } else {
        document.getElementById("navbar-name").style.visibility = "hidden";
        setNavbarShadowStyle("");
        setNavNameStyle("");
      }
    }

    return () => {
      window.onscroll = null;
    };
  });

  return (
    <header
      className={
        "fixed flex w-full px-4 py-2 justify-between items-center z-20 max-w-screen-2xl" +
        navbarShadowStyle
      }
    >
      <p
        id="navbar-name"
        className={
          "flex-1 text-xl lg:text-2xl text-textHeadBlack dark:text-drForeGround font-semibold invisible" +
          navNameStyle
        }
      >
        Siddhesh Kothadi
      </p>
      <div className="flex flex-row ml-auto space-x-4">
        <ThemeToggleButton />
        <HamburgerButton onClick={props.onClick} />
      </div>
    </header>
  );
}

export default Header;
