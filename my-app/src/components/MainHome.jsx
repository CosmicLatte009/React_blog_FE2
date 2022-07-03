import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AboutMe from "../AboutMe";
import PostCard from "./PostCard";
import styled from "styled-components";

const StyledMain = styled.main`
	.max-width {
		display: flex;
		flex-direction: row-reverse;
		gap: 2.4rem;
		position: relative;

		@media (max-width: 1024px) {
			flex-direction: column;
		}
	}

	.ally-hidden {
		overflow: hidden;
		position: absolute;
		clip: rect(0, 0, 0, 0);
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
	}
`;

const StyledPosts = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2.4rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 540px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export default function MainHome() {
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

	const postView = "/postview";

	return (
		<StyledMain>
			<div className="max-width">
				<h2 className="ally-hidden">Post</h2>
				<StyledPosts>
					{data.posts &&
						data.posts
							.slice(0)
							.reverse()
							.map((post) => (
								<Link to={`${postView}/${post.id}`}>
									<PostCard post={post} />
								</Link>
							))}
				</StyledPosts>
				<AboutMe />
			</div>
		</StyledMain>
	);
}
