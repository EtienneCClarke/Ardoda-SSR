import React from 'react'

function Page({ is404 }) {
	if (is404) {
		return (
			<section id="pageNotFound">
				<div class="not-found-container">
					<h1>404 Not Found</h1>
				</div>
			</section>
		)
	} else {
		return (
			<section id="pageNotFound">
				<div class="internal-error-container">
					<h1>500 Internal Error</h1>
					<p>Something went wrong.</p>
				</div>
			</section>
		)
	}
}

export { Page }