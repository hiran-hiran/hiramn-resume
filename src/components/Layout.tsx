import React, { useEffect, FC } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { login, logout, selectUser } from "../features/userSlice";
import { selectTheme, isDark } from "../features/themeSlice";

type Props = {
	children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
	const router = useRouter();
	const dispatch = useDispatch();
  const userState = useSelector(selectUser);
  const themeState = useSelector(selectTheme);
  

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
  
  const handleClick = () => {
    dispatch(isDark())
  }
  useEffect(() => {
    if (themeState) {
      document.querySelector("body")?.classList.add("isDark")
    } else {
      document.querySelector("body")?.classList.remove("isDark")
    }
  }, [themeState])

	return (
		<>
			<div className="theme-btn-container">
				<div onClick={handleClick} className={themeState ? "theme-btn-wrap isDark" : "theme-btn-wrap"}>
					<div className="dark">
						<img src="/dark.png" alt="dark mode" />
					</div>
					<div className="light">
						<img src="/light.png" alt="light mode" />
					</div>
					<div className="btn-theme"></div>
				</div>
			</div>

			<div className="container">{children}</div>
		</>
	);
};

export default Layout;
