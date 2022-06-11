import { FC } from "react";
import styles from "../styles/Text.module.scss";
import { useTheme } from "next-themes";

enum TextSize {
    DISPLAY1,
    DISPLAY2,
    DISPLAY3,
    HEADLINE1,
    HEADLINE2,
    HEADLINE3,
    HEADLINE4,
    HEADLINE5,
    HEADLINE6,
    SUBHEAD1,
    SUBHEAD2,
    BUTTON,
    BODY1,
    BODY2,
    CAPTION,
    OVERLINE,
    LABEL_SMALL,
    DISPLAY_LARGE,
    DISPLAY_MEDIUM,
    DISPLAY_SMALL,
    HEADLINE_LARGE,
    HEADLINE_MEDIUM,
    HEADLINE_SMALL,
    TITLE_LARGE,
    TITLE_MEDIUM,
    TITLE_SMALL,
    LABEL_LARGE,
    LABEL_MEDIUM,
    BODY_LARGE,
    BODY_MEDIUM,
    BODY_SMALL,
}

enum TextColor {
    ON_PRIMARY,
    ON_SECONDARY,
    ON_TERTIARY,
    ON_PRIMARY_CONTAINER,
    ON_SECONDARY_CONTAINER,
    ON_TERTIARY_CONTAINER,
    ON_ERROR,
    ON_ERROR_CONTAINER,
    ON_SURFACE,
    ON_SURFACE_VARIANT,
    INVERSE_ON_SURFACE,
    ON_BACKGROUND
}

interface TextProps {
    children?: React.ReactNode;
    onClick?: () => void;
    size?: TextSize;
    color?: TextColor;
}

const Text: FC<TextProps> = ({children, onClick, size=TextSize.BUTTON, color}) => {
    const { theme } = useTheme();

    const getTextSize = () => {
        switch (size) {
            case TextSize.DISPLAY1:
                return styles.display1;
            case TextSize.DISPLAY2:
                return styles.display2;
            case TextSize.DISPLAY3:
                return styles.display3;
            case TextSize.HEADLINE1:
                return styles.headline1;
            case TextSize.HEADLINE2:
                return styles.headline2;
            case TextSize.HEADLINE3:
                return styles.headline3;
            case TextSize.HEADLINE4:
                return styles.headline4;
            case TextSize.HEADLINE5:
                return styles.headline5;
            case TextSize.HEADLINE6:
                return styles.headline6;
            case TextSize.SUBHEAD1:
                return styles.subhead1;
            case TextSize.SUBHEAD2:
                return styles.subhead2;
            case TextSize.BUTTON:
                return styles.button;
            case TextSize.BODY1:
                return styles.body1;
            case TextSize.BODY2:
                return styles.body2;
            case TextSize.CAPTION:
                return styles.caption;
            case TextSize.OVERLINE:
                return styles.overline;
            case TextSize.LABEL_SMALL:
                return styles.labelSmall;
            case TextSize.DISPLAY_LARGE:
                return styles.displayLarge;
            case TextSize.DISPLAY_MEDIUM:
                return styles.displayMedium;
            case TextSize.DISPLAY_SMALL:
                return styles.displaySmall;
            case TextSize.HEADLINE_LARGE:
                return styles.headlineLarge;
            case TextSize.HEADLINE_MEDIUM:
                return styles.headlineMedium;
            case TextSize.HEADLINE_SMALL:
                return styles.headlineSmall;
            case TextSize.TITLE_LARGE:
                return styles.titleLarge;
            case TextSize.TITLE_MEDIUM:
                return styles.titleMedium;
            case TextSize.TITLE_SMALL:
                return styles.titleSmall;
            case TextSize.LABEL_LARGE:
                return styles.labelLarge;
            case TextSize.LABEL_MEDIUM:
                return styles.labelMedium;
            case TextSize.BODY_LARGE:
                return styles.bodyLarge;
            case TextSize.BODY_MEDIUM:
                return styles.bodyMedium;
            case TextSize.BODY_SMALL:
                return styles.bodySmall;
            default:
                return styles.button;
        }
    }

    const getTextColor = () => {
        if(color === undefined) {
            return theme === "light" ? styles.lightTextColor : styles.darkTextColor;
        }
        // TODO:
    }

    const getClassNameForText = () => {
        return `${getTextSize()} ${getTextColor()} ${styles.text}`;
    }

    return (    
        <div className={getClassNameForText()} onClick={onClick}>
            {children}
        </div>
    );
}

export {Text, TextSize};