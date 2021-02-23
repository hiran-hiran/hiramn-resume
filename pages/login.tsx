import React, { useState, useEffect } from "react";
import { login, logout } from "../src/features/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { auth } from "../firebase/firebase";
import TextInput from "../src/components/TextInput";

const Login = () => {
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
		<div className="content-wrap">
			<section className="p-login">
				<h1>ログイン</h1>
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
					<button className="c-button" type="button" onClick={logIn}>
						ログイン
					</button>
				</div>
			</section>
		</div>
	);
};

export default Login;
