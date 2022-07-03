import React from "react";
import styled from "styled-components";
import Button from "./Button";
import loginIcon from "../assets/icon-login.svg";
import registerIcon from "../assets/icon-register.svg";

const StyledLoginBtn = styled(Button)`
	@media (max-width: 640px) {
		display: none;
	}
`;

export default function Logout({ ...props }) {
	return (
		<>
			<StyledLoginBtn
				gray
				src={loginIcon}
				alt="로그인 아이콘"
				className="only-pc"
				onClick={props.onClick}
			>
				Login
			</StyledLoginBtn>
			<Button gray src={registerIcon} alt="회원가입 아이콘">
				Register
			</Button>
		</>
	);
}
