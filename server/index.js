// Note that this file isn't processed by Vite, see https://github.com/brillout/vite-plugin-ssr/issues/562

const express = require('express') 
const compression = require('compression')
const { renderPage } = require('vite-plugin-ssr/server')

const http = require("http")
const https = require("https")

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
	const app = express()

	app.use(compression())

	if (isProduction) {
		const sirv = require('sirv')
		app.use(sirv(`${root}/dist/client`))
	} else {
		const vite = require('vite')
		const viteDevMiddleware = (
		await vite.createServer({
			root,
			server: { middlewareMode: true }
		})
		).middlewares
		app.use(viteDevMiddleware)
	}

	app.get('*', async (req, res, next) => {
		console.log(`Received a ${req.method} request from '${req.socket.remoteAddress}' for ${req.url}`);
		const pageContextInit = {
			urlOriginal: req.originalUrl
		}
		const pageContext = await renderPage(pageContextInit)
		const { httpResponse } = pageContext
		if (!httpResponse) return next()
		const { body, statusCode, contentType, earlyHints } = httpResponse
		if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
		res.status(statusCode).type(contentType).send(body)
	});

	http.createServer(app).listen(8080);
}
