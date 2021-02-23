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

			<div className="content-wrap">
				<Layout>
					<div className="top">
						<p>
							こちらでは、履歴書と職務経歴書が
							<br />
							ご確認いただけます。
						</p>
						<div className="link">
							<Link href="/resume">
								<a className="">履歴書はこちら</a>
							</Link>
							<Link href="/cv">
								<a className="">職務経歴書はこちら</a>
							</Link>
						</div>

						<button className="c-button" onClick={signOut}>
							ログアウト
						</button>
					</div>
				</Layout>
			</div>
		</>
	);
}
