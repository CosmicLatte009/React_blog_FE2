import React from "react";
import styled from "styled-components";
import Author from "./components/Author";
import CategoryTag from "./components/CategoryTag";
import SmallButton from "./components/SmallButton";
import LikeButton from "./components/LikeButton";
import View from "./components/View";
import backIcon from "./assets/ArrowLeft-blue.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledView = styled.div`
	.wrap-box {
		position: relative;
		width: 60rem;
		max-width: calc(100% - 4rem);
		margin: -22rem auto 0;
		padding: 8rem 0;
		border-radius: var(--border-radius);
		background: var(--white-color);
		font-size: 4rem;
		transition: all 0.3s;

		@media (max-width: 1024px) {
			margin-top: -35rem;
			padding: 6rem;
			width: 100%;
		}

		@media (max-width: 640px) {
			padding: 4rem;
		}

		.inner {
			width: 39.2rem;
			max-width: calc(100% - 8rem);
			margin: 0 auto;
			font-size: 1.6rem;
		}

		h2 {
			margin-bottom: 4.8rem;
			margin-bottom: 0;
			font-size: 3.2rem;
			font-weight: bold;
			text-transform: uppercase;
		}

		ul {
			margin-bottom: 2.4rem;
		}

		li:not(:first-child) {
			margin-top: 4rem;
		}

		width: 91.2rem;
		max-width: 100%;
		margin: -30rem 0 auto auto;
		padding: 8rem;

		.inner {
			width: 100%;
			max-width: 100%;
		}
	}

	hr {
		border: 1px solid var(--border-color);
		border-width: 1px 0 0 0;
		margin: 3.2rem 0;
	}

	.title-wrap {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 8rem;
		margin-bottom: 1rem;
		font-size: 1.6rem;

		@media (max-width: 1024px) {
			flex-direction: column;
			gap: 2rem;
		}

		h2 {
			width: 100%;
			text-transform: none;
			font-size: 3.2rem;
			font-weight: bold;
		}
	}
`;

const StyledBackBtn = styled(Link)`
	position: absolute;
	top: 8rem;
	left: 0;
	width: 6.4rem;
	height: 6.4rem;
	border-radius: 0 var(--border-radius) var(--border-radius) 0;
	background: var(--gray-background) url(${backIcon}) no-repeat 50% 50% / 4rem;
	font-size: 1.6rem;
	@media (max-width: 1024px) {
		top: 6rem;
		width: 5.2rem;
		height: 5.2rem;
	}
	@media (max-width: 640px) {
		top: 4rem;
	}
`;

export default function MainPostView() {
	const postId = useParams().id;
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

	const postDatas = data.posts && data.posts[postId - 1];
	const postCategory = postDatas && postDatas.category;
	const postTitle = postDatas && postDatas.title;
	const postCreated = postDatas && postDatas.created;

	return (
		<StyledView>
			<div className="max-width">
				<section className="wrap-box">
					<div className="inner">
						<Author post>{postCreated}</Author>
						{postCategory && (
							<CategoryTag postView postCategory={postCategory} />
						)}
						<div className="title-wrap">
							<h2>{postTitle}</h2>
							<LikeButton>Like</LikeButton>
						</div>
						<hr />
						<View />
						<SmallButton />
						<StyledBackBtn to="/">
							<span className="a11y-hidden">Back</span>
						</StyledBackBtn>
					</div>
				</section>
			</div>
		</StyledView>
	);
}
