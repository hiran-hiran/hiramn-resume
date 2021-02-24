import Head from "next/head";
import Link from "next/link";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "../src/features/userSlice";
import Layout from "../src/components/Layout";

export default function Home() {
	const router = useRouter();
	const dispatch = useDispatch();

	const signOut = async () => {
		await auth.signOut();
		dispatch(logout());

		router.push("/login");
	};

	return (
		<>
			<Head>
				<title>ヒラタの履歴書</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="p-top">
				<Layout />
				<div className="content-wrap">
					<div className="left">
						<div className="left-inner">
							<h1>Welcome!</h1>
							<p>こちらでは、私の履歴書と職務経歴書がご確認いただけます。</p>
							<button className="button button-white" onClick={signOut}>
								ログアウト
							</button>
						</div>
					</div>

					<div className="right">
						<div className="right-inner">
							<div className="link">
								<Link href="/resume">
									<a className="link">履歴書はこちら</a>
								</Link>
								<Link href="/cv">
									<a className="link">職務経歴書はこちら</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
