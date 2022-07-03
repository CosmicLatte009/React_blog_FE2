import React from "react";
import styled from "styled-components";
import bannerBackImg from "./assets/post-background6.jpg";
// import axios from "axios";
// import { useState, useEffect } from "react";

const StyledBanner = styled.div`
	position: relative;
	background: url(${bannerBackImg}) no-repeat 50% 50% / cover;
	height: 27em;
	margin-bottom: -7em;
`;

const StyledBannerCont = styled.div`
	width: 28rem;
	padding: 7rem 0 14.5rem;
	text-align: center;
	color: var(--gray-background-light);

	@media (max-width: 768px) {
		width: 100%;
		margin: 0 auto;
	}

	&::before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: calc((100% - 1224px) / 2 + 44rem);
		height: 100%;
		background: rgba(40, 48, 63, 0.5);

		@media (max-width: 1280px) {
			width: 44rem;
		}

		@media (max-width: 768px) {
			width: 100%;
		}
	}

	& > * {
		position: relative;
	}

	& > p {
		padding-left: 0.8em;
		font-size: 5rem;
		font-weight: bold;
		text-align: left;
		line-height: 1.1;

		em {
			display: block;
			font-size: 2em;
			margin-bottom: -0.15em;

			@media (max-width: 1260px) {
				display: inline;
				font-size: 1.4em;
			}
		}

		@media (max-width: 1260px) {
			font-size: 3rem;
			padding-left: 0.2em;
		}

		@media (max-width: 768px) {
			text-align: center;
			padding-left: 0;
		}
	}
`;

export default function Banner() {
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:3000/data.json")
	// 		.then((response) => {
	// 			setData(response.data);
	// 		})
	// 		.catch((Error) => {
	// 			console.log(Error);
	// 		});
	// }, []);

	// const bannerData = data && data.posts;
	// const month = bannerData && bannerData.mainTitle;
	// const week = bannerData && bannerData.subTitle;
	return (
		<StyledBanner>
			<div className="max-width">
				<StyledBannerCont>
					<p>
						May <em>25</em> Wednesday
					</p>
				</StyledBannerCont>
			</div>
		</StyledBanner>
	);
}
