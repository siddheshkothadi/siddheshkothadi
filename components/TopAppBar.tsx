import React, { FC } from "react";
import styles from "../styles/TopAppBar.module.scss";
import { useTheme } from "next-themes";
import Button from "./Button";
import ThemeToggleButton from "./ThemeToggleButton";
import { Text, TextColor, TextSize } from "./Text";
import Spacer from "./Spacer";

const TopAppBar: FC = () => {
  const { theme } = useTheme();

  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  const getBackgroundColor = React.useCallback(() => {
    if (isScrolled) {
      return theme === "light" ? styles.lightBg : styles.darkBg;
    }
    return styles.transparent;
  }, [theme, isScrolled]);

  React.useEffect(() => {
    function scrollFunction() {
      if (
        window.document.body.scrollTop > 20 ||
        window.document.documentElement.scrollTop > 20
      ) {
        if (!isScrolled) {
          setIsScrolled(true);
        }
      } else {
        if (isScrolled) {
          setIsScrolled(false);
        }
      }
    }

    window.onscroll = function () {
      scrollFunction();
    };

    return () => {
      window.onscroll = null;
    };
  });

  return (
    <header
      className={`${
        styles.headerContainer
      } ${getBackgroundColor()}`}
    >
      <div className={styles.section}>
        <Text
          size={TextSize.TITLE_LARGE}
          color={TextColor.ON_PRIMARY_CONTAINER}
        >
          Siddhesh
        </Text>
      </div>
      <div className={`${styles.section} ${styles.rightSection}`}>
        <Button>
          <Text>Home</Text>
        </Button>
        <Spacer width={0.3}/>
        <Button isActive={false}>
          <Text>About</Text>
        </Button>
        <Spacer width={0.3}/>
        <Button isActive={false}>
          <Text>Work</Text>
        </Button>
        <Spacer width={0.3}/>
        <Button isActive={false}>
          <Text>Contact</Text>
        </Button>
        <Spacer width={0.3}/>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default TopAppBar;
