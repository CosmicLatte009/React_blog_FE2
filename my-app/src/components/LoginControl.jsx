import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const StyledUl = styled.ul`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export default function LoginControl(props) {
	let [isLoggedIn, setIsLoggedIn] = useState(false);

	let handleLoginClick = () => {
		setIsLoggedIn(true);
	};
	let handleLogoutClick = () => {
		setIsLoggedIn(false);
	};

	//isLoggedIn값이 true라면 클릭 시 setIsLoggedIn이 Login 컴포넌트에서 fasle가 되게 하고 : isLoggedIn값이 fasle라면 Logout 컴포넌트에서 true가 되게 한다
	return (
		<StyledUl isLoggedIn>
			{isLoggedIn ? (
				<Login onClick={handleLogoutClick} />
			) : (
				<Logout onClick={handleLoginClick} />
			)}
		</StyledUl>
	);
}
