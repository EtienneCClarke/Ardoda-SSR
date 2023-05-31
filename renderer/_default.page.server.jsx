export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'

async function render(pageContext) {

	const { Page, pageProps } = pageContext
	
	if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
	const pageHtml = ReactDOMServer.renderToString(
		<PageShell pageContext={pageContext}>
			<Page {...pageProps} />
		</PageShell>
	)

	const documentHtml = escapeInject`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="" />
			<title>SSR Test</title>

		</head>
		
		<body>
			<div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
		</body>
		</html>`

	return {
		documentHtml,
		pageContext: {
		// We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
		}
	}
}

export { render }