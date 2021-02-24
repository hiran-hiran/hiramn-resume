import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/common.scss";
import "../styles/resume.scss";
import "../styles/cv.scss";
import { Provider } from "react-redux";
import store from "../src/store/store";

function MyApp({ Component, pageProps }: AppProps) {


	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

// jhsfdpaldkjbsf14l
export default MyApp;
