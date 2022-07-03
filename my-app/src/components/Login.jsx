import React from "react";
import profileImg from "../assets/profile.jpg";
import logoutIcon from "../assets/icon-logout.svg";
import Button from "./Button";
import modifyIcon from "../assets/icon-modify-white.svg";
import styled from "styled-components";

const StyledProfile = styled.a`
	width: 4.4rem;
	height: 4.4rem;
	display: block;
	border-radius: 50%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export default function Login({ ...props }) {
	return (
		<>
			<li>
				<StyledProfile href="#">
					<img src={profileImg} alt="My page" />
				</StyledProfile>
			</li>
			<Button src={modifyIcon} alt="수정 아이콘">
				Write
			</Button>
			<Button
				white
				src={logoutIcon}
				alt="로그아웃 아이콘"
				onClick={props.onClick}
			>
				Logout
			</Button>
		</>
	);
}
