import React from "react";
import styled, { css } from "styled-components";

const StyledCategory = styled.dl`
	display: flex;
	flex-wrap: wrap;
	color: var(--main-color);

	${(props) =>
		props.postView &&
		css`
			margin: 2rem 0 1rem 0;
		`}

	dd {
		margin-right: 0.4rem;
		padding: 0.2rem 1.2rem;
		border-radius: calc(var(--border-radius) * 2);
		background: var(--gray-background);
		font-size: 1.2rem;
	}
`;

export default function CategoryTag(props) {
	return (
		<StyledCategory>
			<dt className="a11y-hidden">Category</dt>
			{props.postCategory.map((category) => (
				<dd>{category}</dd>
			))}
		</StyledCategory>
	);
}
