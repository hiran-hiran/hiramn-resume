import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import { login, logout } from "../src/features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase";
import TextInput from "../src/components/TextInput";
import Layout from "../src/components/Layout";

const Login: NextPage = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const logIn = async () => {
		try {
			const result = await auth.signInWithEmailAndPassword(email, password);
			const user = result.user;
			if (user) {
				dispatch(login(user.uid));
			}
		} catch (err) {
			alert("認証に失敗しました");
			console.log(err.message, "エラー");
		}
	};

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(login(authUser.uid));
				router.push("/");
			} else {
				dispatch(logout());
				router.push("/login");
			}
		});
	}, []);

	return (
		<>
			<Head>
				<title>ログイン | ヒラタの履歴書</title>
			</Head>
			<Layout>
				<section className="p-login">
					<div className="content-wrap">
						<section className="left">
							<div className="left-inner">
								<span className="head">Thank you for visiting</span>
								<h1 className="title">
									この度は、ご訪問頂きありがとうございます。
									<br />
									お知らせしました、ログイン情報でログインお願いいたします。
								</h1>
							</div>
						</section>
						<section className="right">
							<div className="right-inner">
								<span className="head">Login</span>

								<div className="form">
									<div className="input">
										<TextInput
											id="email"
											className="auth-input"
											type="email"
											placeholder="メールアドレス"
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className="input">
										<TextInput
											id="password"
											className="auth-input"
											type="password"
											placeholder="パスワード"
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<button className="button" type="button" onClick={logIn}>
										Login
									</button>
								</div>
							</div>
						</section>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Login;
