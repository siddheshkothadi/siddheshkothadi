import { FC } from "react";
import styles from "../styles/Button.module.scss";
import { useTheme } from "next-themes";

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
    isIconButton?: boolean;
}

const Button: FC<ButtonProps> = ({children, onClick, isActive = true, isIconButton = false}) => {
    const { theme } = useTheme();

    const getHoverStyle = () => {
        if (isActive) {
            return "";
        }
        return theme === "light" ? styles.hoverLight : styles.hoverDark;
    }

    const getBgColor = () => {
        if (isActive) {
            return theme === "light" ? styles.lightBg : styles.darkBg;
        }
        return ""
    }

    const getButtonStyle = () => {
        if (isIconButton) {
            return styles.iconButton;
        }
        return styles.textButton;
    }

    const getTextColor = () => {
        return theme === "light" ? styles.lightText : styles.darkText;
    }

    const getClassNameForButton = () => {
        return `${styles.button} ${getButtonStyle()} ${getBgColor()} ${getHoverStyle()} ${getTextColor()}`;
    }

    return (
        <div className={getClassNameForButton()} onClick={onClick}>
            {children}
        </div>
    );
}

export default Button;