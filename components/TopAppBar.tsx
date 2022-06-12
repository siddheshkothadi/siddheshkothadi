import React, { FC } from "react";
import styles from "../styles/TopAppBar.module.scss";
import { useTheme } from "next-themes";
import Button from "./Button";
import ThemeToggleButton from "./ThemeToggleButton";
import { Text, TextColor, TextSize } from "./Text";
import Spacer from "./Spacer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

const TopAppBar: FC = () => {
  const { theme } = useTheme();

  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  const getBackgroundColor = React.useCallback(() => {
    if (isScrolled) {
      return theme === "light" ? styles.lightBg : styles.darkBg;
    }
    return styles.transparent;
  }, [theme, isScrolled]);

  const router = useRouter();

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
    <header className={`${styles.headerContainer} ${getBackgroundColor()}`}>
      <div className={styles.section}>
        <div className={styles.menu}>
          <Button isActive={false} isIconButton={true}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
        <Text
          size={TextSize.TITLE_LARGE}
          color={TextColor.ON_PRIMARY_CONTAINER}
        >
          Siddhesh
        </Text>
      </div>
      <div className={styles.section}>
        <div className={`${styles.section} ${styles.rightSection}`}>
          <Link href="/">
            <a>
              <Button isActive={router.pathname === "/"}>
                <Text>Home</Text>
              </Button>
            </a>
          </Link>
          <Spacer width={0.2} />
          <Link href="/projects">
            <a>
              <Button isActive={router.pathname === "/projects"}>
                <Text>Projects</Text>
              </Button>
            </a>
          </Link>
          <Spacer width={0.2} />
          <Link href="/experience">
            <a>
              <Button isActive={router.pathname === "/experience"}>
                <Text>Experience</Text>
              </Button>
            </a>
          </Link>
          <Spacer width={0.2} />
          <Link href="/education">
            <a>
              <Button isActive={router.pathname === "/education"}>
                <Text>Education</Text>
              </Button>
            </a>
          </Link>
          <Spacer width={0.2} />
          <Link href="/blogs">
            <a>
              <Button isActive={router.pathname === "/blogs"}>
                <Text>Blogs</Text>
              </Button>
            </a>
          </Link>
          <Spacer width={0.2} />
          <Link href="/contact">
            <a>
              <Button isActive={router.pathname === "/contact"}>
                <Text>Contact</Text>
              </Button>
            </a>
          </Link>
          <Spacer width={0.2} />
        </div>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default TopAppBar;
