import React from "react";
import styled from "styled-components";
import CategoryTag from "./CategoryTag";
import Author from "./Author";

const StyledWrap = styled.div`
	padding: 1.6rem 2.4rem 2.4rem;

	& > h3,
	p {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
	}

	& > h3 {
		height: calc(1.8rem * 1.4 * 2);
		margin: 1rem 0;
		font-size: 1.8rem;
		font-weight: bold;
		-webkit-line-clamp: 2;
		letter-spacing: -0.02em;

		@media (max-width: 540px) {
			height: auto;
			-webkit-line-clamp: 1;
		}
	}

	& > p {
		height: calc(1.4rem * 1.4 * 3);
		margin-top: 1.6rem;
		color: var(--gray-color);
		font-size: 1.4rem;
		-webkit-line-clamp: 3;
		text-indent: 0.5em;

		@media (max-width: 540px) {
			height: auto;
			-webkit-line-clamp: 2;
		}
	}
`;

const StyledA = styled.a`
	display: block;
	overflow: hidden;
	border-radius: var(--border-radius);
	background: var(--white-color);
	font-size: 2rem;

	img {
		width: 100%;
	}
`;

export default function PostCard({ post }) {
	const postId = post.id;
	const postImg = post.thumbnail;
	const postCategory = post.category;
	const postTitle = post.title;
	const postCreated = post.created;
	const postContents = post.contents;
	const postDescription = postContents[0].text;

	console.log(postTitle);
	console.log(postId);
	console.log(postContents);

	return (
		<li>
			<StyledA>
				<article>
					<img src={postImg} alt="" />
					<StyledWrap>
						<CategoryTag postCategory={postCategory} />
						<h3>{postTitle}</h3>

						<Author>{postCreated}</Author>

						<p>{postDescription}</p>
					</StyledWrap>
				</article>
			</StyledA>
		</li>
	);
}
