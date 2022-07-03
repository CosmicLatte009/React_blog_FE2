import React from "react";
import Category from "./components/Category";
import SnsIcon from "./components/SnsIcon";
import profileImg from "./assets/profile.jpg";
import facebookIcon from "./assets/Facebook.svg";
import twitterIcon from "./assets/Twitter.svg";
import instaIcon from "./assets/Instagram.svg";
import gitHubIcon from "./assets/Github.svg";
import styled from "styled-components";

const StyledAside = styled.aside`
	flex-basis: calc((100% - 2.4rem * 3) / 4);
	flex-shrink: 0;
	align-self: flex-start;
	padding: 4rem 2.4rem 7rem;
	box-sizing: border-box;
	border-radius: var(--border-radius);
	background: var(--white-color);
	text-align: center;
	font-size: 2rem;

	@media (max-width: 1024px) {
		width: 100%;
	}

	& > h2,
	h3 {
		margin-bottom: 2rem;
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: underline;
		letter-spacing: 0.1em;
	}

	& > h3 {
		margin-top: 6rem;
	}
`;

const StyledProfile = styled.img`
	width: 8rem;
	height: 8rem;
	object-fit: cover;
	border-radius: 50%;
`;

const StyledName = styled.p`
	color: var(--main-color);
	font-weight: bold;
	font-size: 1.6rem;
	margin: 1.2rem 0 0.8rem;
`;

const StyledScript = styled.p`
	font-size: 1.4rem;
	padding: 0 0.4rem;
`;

const StyledCategories = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
`;

const StyledSNS = styled.ul`
	display: flex;
	gap: 0.6rem;
	justify-content: center;
	margin-top: -0.4rem;
`;

export default function AboutMe() {
	return (
		<StyledAside>
			<h2>About Me</h2>
			<StyledProfile src={profileImg} alt="" />
			<StyledName>Chilli</StyledName>
			<StyledScript>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</StyledScript>
			<h3>Categories</h3>
			<StyledCategories>
				<Category>Life</Category>
				<Category>Style</Category>
				<Category>Tech</Category>
				<Category>Sport</Category>
				<Category>Photo</Category>
				<Category>Develop</Category>
				<Category>Music</Category>
			</StyledCategories>
			<h3>Follow</h3>
			<StyledSNS>
				<SnsIcon src={facebookIcon} alt="Facebook" />
				<SnsIcon src={twitterIcon} alt="Twitter" />
				<SnsIcon src={instaIcon} alt="Instagram" />
				<SnsIcon src={gitHubIcon} alt="GitHib" />
			</StyledSNS>
		</StyledAside>
	);
}
