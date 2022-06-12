import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useTheme } from "next-themes";
import Button from "../components/Button";
import { Text, TextColor, TextSize } from "../components/Text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import TopAppBar from "../components/TopAppBar";
import ThemeToggleButton from "../components/ThemeToggleButton";
import Spacer from "../components/Spacer";
import Lottie, { LottieOptions } from "lottie-react";
import coderAnimation from "../public/lottie/coder.json";
import blueCoder from "../public/lottie/blue-coder.json";

const Home: NextPage = () => {
  const options: LottieOptions = {
    animationData: coderAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div>
      <Head>
        <title>Siddhesh Kothadi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.mainContainer}>
          <TopAppBar />
          <div className={styles.banner}>
            <div className={styles.leftPart}>
              <Text size={TextSize.DISPLAY1} color={TextColor.LIGHT_ON_PRIMARY_CONTAINER}>Hi, I'm</Text>
              <Text size={TextSize.DISPLAY1} color={TextColor.LIGHT_ON_PRIMARY_CONTAINER}>Siddhesh</Text>
              <Text size={TextSize.DISPLAY1} color={TextColor.LIGHT_ON_PRIMARY_CONTAINER}>Kothadi</Text>
              <Spacer height={2} />

              <Text size={TextSize.HEADLINE4} color={TextColor.LIGHT_ON_PRIMARY_CONTAINER}>A budding software engineer interested in solving real-world problems using software engineering principles. Interested in web and android development.</Text>
            </div>
            <div className={styles.rightPart}>
              {/* <Lottie animationData={blueCoder} style={{ height: "400px" }} loop autoPlay /> */}
            </div>
          </div>

        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
