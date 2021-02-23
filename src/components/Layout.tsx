import React, { useEffect, FC } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { login, logout, selectUser } from "../features/userSlice";

const Layout: FC = ({ children }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const userState = useSelector(selectUser);

	useEffect(() => {
		if (!userState) {
			auth.onAuthStateChanged((authUser) => {
				if (authUser) {
					dispatch(login(authUser.uid));
					// router.push("/");
				} else {
					dispatch(logout());
					router.push("/login");
				}
			});
		}
	}, []);

	return (
		<>
			{/* <header>header</header> */}
			{children}
			{/* <footer>footer</footer> */}
		</>
	);
};

export default Layout;
