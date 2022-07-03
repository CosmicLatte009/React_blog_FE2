import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import BannerPostView from "./BannerPostView";
import PostViewPage from "./PostViewPage";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
	--main-color: rgb(55, 170, 236);
	--main-rgb: 55, 171, 236;
	--outline-border: rgb(55, 160, 236);
	--red-color: rgb(243, 124, 75);
	--red-rgb: 243, 124, 75;
	--black-color: #28303f;
	--white-color: #fff;
	--gray-color: #767676;
	--border-color: #ddd;
	--gray-background-light: #f9f9f9;
	--gray-background: #f5f5f5;
	--gray-text: #6f6f6f;
	--border-radius: 0.4em;
}

/* 공통 css */
h1,
a,
div,
p,
section,
article,
input,
textarea {
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: inherit;
}

html {
	font-size: 10px;
}

body {
	font-size: 1.6rem;
	line-height: 1.4;
}

input,
button {
	font-size: inherit;
	font-family: inherit;
}

button {
	cursor: pointer;
}

a {
	border-radius: 0.8rem;
	overflow: hidden;
}
img {
	vertical-align: bottom;
}

a:focus,
input:focus,
button:focus,
textarea:focus {
	outline: 3px solid rgba(var(--main-rgb), 0.2);
	box-shadow: 0 0 0 1px var(--outline-border);
}

body {
	background: var(--gray-background-light);
}

.a11y-hidden {
	overflow: hidden;
	position: absolute;
	clip: rect(0, 0, 0, 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
}

.max-width {
	width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
}

.link-underline {
	display: block;
	width: 5em;
	text-align: center;
	text-decoration: underline;
	color: var(--gray-color);
	padding: 0.4rem 1rem;
	margin: 1rem 0 auto auto;
	transition: all 0.3s;
}

.link-underline:hover {
	color: var(--main-color);
}

.not-found {
	text-align: center;
	margin-top: 8rem;
}

.not-found h2 {
	color: var(--main-color);
	font-size: 5rem;
	font-weight: bold;
}

.not-found p {
	font-size: 2rem;
	margin-bottom: 2rem;
}

`;

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/postview/:id">
					<BannerPostView />
					<PostViewPage />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
