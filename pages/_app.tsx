import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/common.scss";
import "../styles/resume.scss";
import "../styles/cv.scss";
import { Provider } from "react-redux";
import store from "../src/store/store";

function MyApp({ Component, pageProps }: AppProps) {
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
