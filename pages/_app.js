import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
const isProduction = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    console.log(isProduction)
    const handleRouteChange = (url) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
