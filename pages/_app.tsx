import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/common.scss";
import "../styles/resume.scss";
import "../styles/cv.scss";
import { Provider } from "react-redux";
import store from "../src/store/store";

import { useRouter } from 'next/router'
import * as gtag from '../src/lib/gtag'
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const handleRouteChange = (path: string) => {
    gtag.pageview(path)
  }

  useEffect(() => {
    if (!gtag.GA_ID) {
      return
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

	return (
		<>
			<Head>
				<title>ヒラタの履歴書</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;
