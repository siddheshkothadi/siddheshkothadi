import { FC } from "react";
import styles from "../styles/Text.module.scss";
import { useTheme } from "next-themes";

enum TextSize {
    DISPLAY,
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
    PRIMARY,
    SECONDARY,
    TERTIARY,
    ON_PRIMARY,
    ON_SECONDARY,
    ON_TERTIARY,
    LIGHT_ON_PRIMARY_CONTAINER,
    LIGHT_ON_SECONDARY_CONTAINER,
    LIGHT_ON_TERTIARY_CONTAINER,
    DARK_ON_PRIMARY_CONTAINER,
    DARK_ON_SECONDARY_CONTAINER,
    DARK_ON_TERTIARY_CONTAINER,
    ON_PRIMARY_CONTAINER,
    ON_SECONDARY_CONTAINER,
    ON_TERTIARY_CONTAINER,
    ON_ERROR,
    ON_ERROR_CONTAINER,
    ON_SURFACE,
    ON_SURFACE_VARIANT,
    INVERSE_ON_SURFACE,
    ON_BACKGROUND,
    BLACK,
    WHITE
}

interface TextProps {
    children?: React.ReactNode;
    onClick?: () => void;
    size?: TextSize;
    color?: TextColor;
}

const Text: FC<TextProps> = ({children, onClick, size=TextSize.BUTTON, color=TextColor.ON_BACKGROUND}) => {
    const { theme } = useTheme();

    const getTextSize = () => {
        switch (size) {
            case TextSize.DISPLAY:
                return styles.display;
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
        switch(color) {
            case TextColor.PRIMARY:
                return theme === "light" ? styles.primary : styles.primaryDark;
            case TextColor.SECONDARY:
                return theme === "light" ? styles.secondary : styles.secondaryDark;
            case TextColor.TERTIARY:
                return theme === "light" ? styles.tertiary : styles.tertiaryDark;
            case TextColor.ON_PRIMARY:
                return theme === "light" ? styles.onPrimary : styles.onPrimaryDark;
            case TextColor.ON_SECONDARY:
                return theme === "light" ? styles.onSecondary : styles.onSecondaryDark;
            case TextColor.ON_TERTIARY:
                return theme === "light" ? styles.onTertiary : styles.onTertiaryDark;
            case TextColor.LIGHT_ON_PRIMARY_CONTAINER:
                return styles.onPrimaryContainer;
            case TextColor.LIGHT_ON_SECONDARY_CONTAINER:
                return styles.onSecondaryContainer;
            case TextColor.LIGHT_ON_TERTIARY_CONTAINER:
                return styles.onTertiaryContainer;
            case TextColor.DARK_ON_PRIMARY_CONTAINER:
                return styles.onPrimaryContainerDark;
            case TextColor.DARK_ON_SECONDARY_CONTAINER:
                return styles.onSecondaryContainerDark;
            case TextColor.DARK_ON_TERTIARY_CONTAINER:
                return styles.onTertiaryContainerDark;
            case TextColor.ON_PRIMARY_CONTAINER:
                return theme === "light" ? styles.onPrimaryContainer : styles.onPrimaryContainerDark;
            case TextColor.ON_SECONDARY_CONTAINER:
                return theme === "light" ? styles.onSecondaryContainer : styles.onSecondaryContainerDark;
            case TextColor.ON_TERTIARY_CONTAINER:
                return theme === "light" ? styles.onTertiaryContainer : styles.onTertiaryContainerDark;
            case TextColor.ON_ERROR:
                return theme === "light" ? styles.onError : styles.onErrorDark;
            case TextColor.ON_ERROR_CONTAINER:
                return theme === "light" ? styles.onErrorContainer : styles.onErrorContainerDark;
            case TextColor.ON_SURFACE:
                return theme === "light" ? styles.onSurface : styles.onSurfaceDark;
            case TextColor.ON_SURFACE_VARIANT:
                return theme === "light" ? styles.onSurfaceVariant : styles.onSurfaceVariantDark;
            case TextColor.INVERSE_ON_SURFACE:
                return theme === "light" ? styles.inverseOnSurface : styles.inverseOnSurfaceDark;
            case TextColor.ON_BACKGROUND:
                return theme === "light" ? styles.onBackground : styles.onBackgroundDark;
            case TextColor.BLACK:
                return styles.black;
            case TextColor.WHITE:
                return styles.white;
            default:
                return theme === "light" ? styles.lightTextColor : styles.darkTextColor;
        }
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

export {Text, TextSize, TextColor};