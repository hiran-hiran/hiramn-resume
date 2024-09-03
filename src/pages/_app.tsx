import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { supabaseClient } from "@/lib/supabaseClient";
import "@/styles/common.scss";
import "@/styles/resume.scss";
import "@/styles/cv.scss";
import {
  type Session,
  SessionContextProvider,
} from "@supabase/auth-helpers-react";
// import * as gtag from "../lib/gtag";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
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
        <Component {...pageProps} />
      </SessionContextProvider>
    </>
  );
}

export default MyApp;
