import Head from "next/head";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/common.scss";
import "@/styles/resume.scss";
import "@/styles/cv.scss";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";

// import { useRouter } from "next/router";
// import * as gtag from "../lib/gtag";
// import { useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  // const [isDark, setIsDark] = useState(false);
  // const router = useRouter();
  // const handleRouteChange = (path: string) => {
  //   gtag.pageview(path);
  // };
  // useEffect(() => {
  //   if (!gtag.GA_ID) {
  //     return;
  //   }
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <>
      <Head>
        <title>ヒラタの履歴書</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        {/* <ThemeContext.Provider value={{ isDark, setIsDark }}> */}
        <Component {...pageProps} />
        {/* </ThemeContext.Provider> */}
      </SessionContextProvider>
    </>
  );
}

export default MyApp;
