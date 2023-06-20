import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectSection";
import React from "react";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AboutSection from "../components/AboutSection";
import Menu from "../components/Menu";
import * as gtag from "../lib/gtag";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    gtag.event({
      action: "toggle_menu",
      category: "menu",
      label: isOpen ? "close" : "open",
    });
  };

  React.useEffect(() => {
    const inViewport = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {};

    const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL, obsOptions);
    });
  }, []);

  return (
    <div className="flex justify-center bg-lightBackground dark:bg-drBackground min-h-screen min-w-screen">
      <Head>
        <title>Siddhesh Kothadi</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/profile-circle.png" />

        <meta name="title" content="Siddhesh Kothadi - Portfolio" />
        <meta
          name="description"
          content="Siddhesh Kothadi, a self taught developer from Pune, India. I build cool stuff on android and web."
        />
        <meta
          name="keywords"
          content="siddhesh kothadi, siddhesh, kothadi, portfolio, android, web"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://siddheshkothadi.me/" />
        <meta property="og:title" content="Siddhesh Kothadi" key="title" />
        <meta
          property="og:description"
          content="A self taught developer from Pune. Always looking to
          learn new things. With a passion for android and web development."
          key="description"
        />
        <meta
          property="og:image"
          content="https://siddheshkothadi.me/preview-screenshot.png"
        ></meta>

        {/* Twitter */}
        <meta
          property="twitter:card"
          content="https://siddheshkothadi.me/preview-screenshot.png"
        />
        <meta
          property="twitter:url"
          content="https://siddheshkothadi.me/"
        />
        <meta property="twitter:title" content="Siddhesh Kothadi" />
        <meta
          property="twitter:description"
          content="A self taught developer from Pune. Always looking to learn new things. With a passion for android and web development."
        />
        <meta
          property="twitter:image"
          content="https://siddheshkothadi.me/preview-screenshot.png"
        ></meta>
      </Head>

      <div className="flex flex-col w-full max-w-screen-2xl items-center overflow-hidden">
        <Header onClick={toggleMenu} />
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        <IntroSection />

        <AboutSection />

        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
