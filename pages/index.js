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

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <meta property="og:title" content="Siddhesh Kothadi" key="title" />
        <meta
          name="description"
          content="Siddhesh Kothadi is a software engineer based in Bangalore, India. He is a self-taught programmer and a self-learner. He is a passionate about learning new technologies and solving problems."
        />
        <meta
          property="og:description"
          content="Siddhesh Kothadi is a software engineer based in Bangalore, India. He is a self-taught programmer and a self-learner. He is a passionate about learning new technologies and solving problems."
          key="description"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/profile-circle.png" />
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
