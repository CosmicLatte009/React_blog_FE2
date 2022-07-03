import React from "react";
import styled from "styled-components";
import deleteIcon from "../assets/icon-delete.svg";
import deleteIconWhite from "../assets/icon-delete-white.svg";
import modifyIcon from "../assets/icon-modify.svg";
import modifyIconWhite from "../assets/icon-modify-white.svg";

const StyledBtnGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	position: absolute;
	top: 9.2rem;
	right: 8rem;
	font-size: 1.6rem;

	@media (max-width: 1024px) {
		top: 6rem;
		right: 6rem;
		height: 5.2rem;
	}

	@media (max-width: 640px) {
		top: 4rem;
		right: 4rem;
	}

	a,
	button {
		width: 4rem;
		height: 4rem;
		border: 0;
		border-radius: var(--border-radius);
		transition: all 0.3s;
	}

	button:focus {
		outline-color: rgba(var(--red-rgb), 0.2);
		box-shadow: 0 0 0 1px var(--red-color);
	}

	a {
		background: var(--gray-background) url(${modifyIcon}) no-repeat 50% 50% /
			1.6rem;
		right: 13rem;
	}

	a:hover {
		background: var(--main-color) url(${modifyIconWhite}) no-repeat 50% 50% /
			1.6rem;
	}

	button {
		background: var(--gray-background) url(${deleteIcon}) no-repeat 50% 50% /
			1.6rem;
	}

	button:hover {
		background: var(--red-color) url(${deleteIconWhite}) no-repeat 50% 50% /
			1.6rem;
	}
`;

export default function SmallButton({ children }) {
	return (
		<StyledBtnGroup>
			<a href="#" class="btn-modify">
				<span className="a11y-hidden">modify</span>
			</a>
			<button type="button" class="btn-delete">
				<span className="a11y-hidden">delete</span>
			</button>
		</StyledBtnGroup>
	);
}
