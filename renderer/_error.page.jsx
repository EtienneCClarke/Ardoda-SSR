import React from 'react'
import { Header } from '../components';
import error from "../assets/vectors/404.svg";
import unplugged from "../assets/vectors/unplugged.svg";
import "../assets/css/style.css";
import "./pageNotFound.css";

function Page({ is404 }) {
	if (is404) {
		return (
			<section id="pageNotFound">
				<Header />
				<div class="not-found-container">
					<img
						src={error}
						className="not-found-text"
						draggable="false"
					/>
					<img
						src={unplugged}
						className="not-found-img"
						draggable="false"
					/>
				</div>
			</section>
		)
	} else {
		return (
			<section id="pageNotFound">
				<Header />
				<div class="internal-error-container">
					<h1>500 Internal Error</h1>
					<p>Something went wrong.</p>
				</div>
			</section>
		)
	}
}

export { Page }