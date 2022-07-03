import React from "react";
import styled from "styled-components";

const SNS = styled.a`
	display: block;
	padding: 0.4rem;
	line-height: 1;

	& > img {
		width: 1.6rem;
		display: block;
	}
`;
export default function SnsIcon(props) {
	return (
		<li>
			<SNS href="#">
				<img src={props.src} alt={props.alt} />
			</SNS>
		</li>
	);
}
