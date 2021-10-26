import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const { theme, setTheme } = useTheme();

  return (
    <div
      className="toggleThemeBtn dark:toggleThemeBtnDark"
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      {isLoaded && theme === "light" ? (
        <FontAwesomeIcon
          icon={faMoon}
          className="text-base align-middle text-center"
        />
      ) : (
        <FontAwesomeIcon
          icon={faSun}
          className="text-base align-middle text-center"
        />
      )}
    </div>
  );
}
