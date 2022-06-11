import { FC} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "next-themes";
import Button from "./Button";

const ThemeToggleButton: FC = () => {
    const { theme, setTheme } = useTheme();
    
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };

      const getThemeIcon: () => IconDefinition = () => {
        return theme === "light" ? faSun : faMoon;
      }

    return (
        <Button onClick={toggleTheme} isActive={false} isIconButton={true}>
            <FontAwesomeIcon icon={getThemeIcon()}/>
          </Button>
    );
}

export default ThemeToggleButton;