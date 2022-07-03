import React from "react";
import styled, { css } from "styled-components";
import profileImg from "../assets/profile.jpg";

const StyledAuthorWrap = styled.dl`
	display: flex;
	gap: 1rem;
	color: #767676;
	font-size: 1.2rem;

	& > dd {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	${(props) =>
		props.post &&
		css`
			height: 6.4rem;
			font-size: 1.4rem;

			@media (max-width: 1024px) {
				height: 5.2rem;
				margin-bottom: 1rem;
			}

			@media (max-width: 640px) {
				margin-bottom: 1rem;
				padding-left: 3rem;
			}
		`}
`;
const StyledProfileImg = styled.img`
	width: 2em;
	height: 2em;
	border-radius: 50%;
`;

const CreatedDay = styled.dd`
	&::before {
		content: "";
		display: block;
		width: 1px;
		height: 0.8em;
		margin-right: 1rem;
		background: var(--border-color);
	}
`;

export default function Author({ children, ...props }) {
	return (
		<StyledAuthorWrap {...props}>
			<dt class="a11y-hidden">Author</dt>
			<dd>
				<StyledProfileImg src={profileImg} alt="" /> Chilli
			</dd>
			<dt className="a11y-hidden">Created</dt>
			<CreatedDay>{children}</CreatedDay>
		</StyledAuthorWrap>
	);
}
