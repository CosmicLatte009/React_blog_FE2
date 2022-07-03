import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StyledViewContents = styled.div`
	img {
		max-width: 100%;
		margin: 3.2rem 0;
	}

	p {
		font-size: 1.6rem;
		line-height: 1.6;
		text-align: justify;
		letter-spacing: -0.01em;
	}
`;

export default function View() {
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
	const postContents = postDatas && postDatas.contents;

	const $viewContents = document.querySelector(".view-contents");

	return (
		<StyledViewContents className="view-contents">
			{postContents &&
				postContents.map((data) => {
					const postType = document.createElement(data.type);
					if (data.type === "p") {
						postType.textContent = data.text;
					} else if (data.type === "img") {
						postType.src = data.src;
					}
					$viewContents.append(postType);
				})}
		</StyledViewContents>
	);
}
