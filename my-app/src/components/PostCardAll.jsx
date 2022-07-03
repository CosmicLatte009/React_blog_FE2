import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import PostCard from "./PostCard";

const StyledLink = styled(Link)`
	display: block;
	overflow: hidden;
	border-radius: var(--border-radius);
	background: var(--white-color);
	font-size: 2rem;

	& > img {
		width: 100%;
	}
`;

export default function PostCardAll() {
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
		<>
			{data.posts &&
				data.posts
					.slice(0)
					.reverse()
					.map((post) => (
						<li>
							<StyledLink to={`${postView}/${post.id}`}>
								<PostCard post={post} />
							</StyledLink>
						</li>
					))}
		</>
	);
}
