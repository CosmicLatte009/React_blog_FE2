import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
	background: var(--gray-background);
	color: var(--gray-text);
	font-size: 1.2rem;
	border-radius: calc(var(--border-radius) * 2);
	padding: 0.2rem 1.2rem;
`;

export default function Category({ children }) {
	return (
		<li>
			<StyledA href="#">{children}</StyledA>
		</li>
	);
}
