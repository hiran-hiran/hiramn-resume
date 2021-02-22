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
					<p>こちらでは、履歴書と職務経歴書がご確認いただけます。</p>
          <Link href="/resume">
						<a className="">履歴書はこちら</a>
					</Link>
					<Link href="/cv">
						<a className="">職務経歴書はこちら</a>
					</Link>

					<button className="c-button" onClick={signOut}>
						ログアウト
					</button>
				</Layout>
			</div>
		</>
	);
}
