import React, { useEffect, FC } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { login, logout, selectUser } from "../features/userSlice";

type Props = {
	children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const userState = useSelector(selectUser);

	useEffect(() => {
		if (!userState) {
			auth.onAuthStateChanged((authUser) => {
				if (authUser) {
					dispatch(login(authUser.uid));
				} else {
					dispatch(logout());
					router.push("/login");
				}
			});
		}
	}, []);

	return <>{children}</>;
};

export default Layout;
