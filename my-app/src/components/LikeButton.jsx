import React from "react";
import styled from "styled-components";
import likeIcon from "../assets/icon-like.svg";
import likeIconWhite from "../assets/icon-like-white.svg";

const StyledLikeBtn = styled.button`
	flex-shrink: 0;
	width: 12rem;
	height: 4rem;
	padding-left: 3rem;
	border: 1px solid rgba(var(--red-rgb), 0.5);
	border-radius: var(--border-radius);
	background: var(--white-color) url(${likeIcon}) no-repeat 2.5rem 50% / 2.4rem;
	transition: all 0.3s;

	&:hover,
	&:active {
		background: var(--red-color) url(${likeIconWhite}) no-repeat 2.5rem 50% /
			2.4rem;
		color: var(--white-color);
	}

	&:focus {
		outline-color: rgba(var(--red-rgb), 0.2);
		box-shadow: none;
	}
`;

export default function LikeButton({ children }) {
	return <StyledLikeBtn>{children}</StyledLikeBtn>;
}
