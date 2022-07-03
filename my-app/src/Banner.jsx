import React from "react";
import styled from "styled-components";
import bannerBackImg from "./assets/background.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

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
		margin: 0 auto;
		width: 100%;
	}
	&::before {
		@media (max-width: 1280px) {
			width: 44rem;
		}

		@media (max-width: 768px) {
			width: 100%;
		}

		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: calc((100% - 1224px) / 2 + 44rem);
		height: 100%;
		background: rgba(40, 48, 63, 0.5);
	}
`;

const StyledBannerPos = styled.p`
	position: relative;
`;
const StyledSubText = styled(StyledBannerPos)`
	border: 1px solid rgba(249, 249, 249, 0.3);
	border-width: 1px 0;
	padding: 1rem 0 0.8rem;
	font-size: 2rem;
	letter-spacing: 0.2em;
`;

const StyledMainText = styled(StyledBannerPos)`
	font-weight: bold;
	font-size: 5.4rem;
	margin: 1.6rem 0;
`;

const StyledDescription = styled(StyledBannerPos)`
	font-size: 1.2rem;
	text-align: left;
	word-break: break-all;
	padding: 0 0.8rem;
`;

export default function Banner() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/data.json")
			.then((response) => {
				setData(response.data);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, []);

	const bannerData = data && data.blog;
	const mainTitle = bannerData && bannerData.mainTitle;
	const subTitle = bannerData && bannerData.subTitle;
	const description = bannerData && bannerData.description;
	return (
		<StyledBanner>
			<div className="max-width">
				<StyledBannerCont>
					<StyledSubText>{subTitle}</StyledSubText>
					<StyledMainText>{mainTitle}</StyledMainText>
					<StyledDescription>{description}</StyledDescription>
				</StyledBannerCont>
			</div>
		</StyledBanner>
	);
}
