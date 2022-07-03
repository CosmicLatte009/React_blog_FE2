import React from "react";
// import Login from "./components/Login";
// import Logout from "./components/Logout";
import LoginControl from "./components/LoginControl";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "./assets/Logo.svg";
import styled from "styled-components";

const StyledHeader = styled.header`
	background: var(--white-color);

	.max-width {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 4rem;
		padding: 1rem 0;
	}

	h1 {
		font-size: 3rem;
	}
`;

const StyledLink = styled(Link)`
	display: block;
	padding: 0.4rem;
	margin-left: -0.4rem;
`;

const StyledLogoImg = styled(LogoImg)`
	display: block;
`;

export default function Header() {
	return (
		<StyledHeader>
			<div className="max-width">
				<h1>
					<StyledLink to="/">
						<StyledLogoImg alt="My Blog" />
					</StyledLink>
				</h1>
				<LoginControl isLoggedIn />
			</div>
		</StyledHeader>
	);
}
