// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import logoUrl from '../assets/images/icons/favicon.ico'

async function render(pageContext) {

	const { Page, pageProps } = pageContext
	
	// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
	if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
	const pageHtml = ReactDOMServer.renderToString(
		<PageShell pageContext={pageContext}>
		<Page {...pageProps} />
		</PageShell>
	)

	// See https://vite-plugin-ssr.com/head
	const { documentProps } = pageContext.exports
	const title = (documentProps && documentProps.title) || 'Ardoda'
	const desc = (documentProps && documentProps.description) || 'We tear down barriers within the creator economy so innovation and prosperity will thrive.'

	const documentHtml = escapeInject`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<link rel="icon" href="${logoUrl}" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="${desc}" />
			<title>${title}</title>

			<meta name="keywords" content="Ardoda, Web3, Crypto, Payment Splitter, Fintech, DeFi, Law, Contract, Smart Contract, Business, Legal, Solicitors">
			<meta name="keywords" content="Ardoda, Ardoda.com, Ardado, Arddo, Ardoda.biz, ardao, Squid, Squid.biz, Squid.com, Leonardo Davinci, Leonardo, Vinci">
			<meta name="keywords" content="Web3, Crypto, Decentralised, Blockchain, Finance, DeFi, Polygon, Ethereum, Polygon Splitter, Smart Contract, MultiShare, Decentralised Finance">
			<meta name="keywords" content="Law, Online Law, Legal, Legal Tech, Smart Contracts for Law, Web3 Solicitor, DeLaw, DeFi Law">
			<meta name="keywords" content="Business, Management, Finances, Money, Hustle, Online, Digital, Revenue, ROI, Cash Flow, Commission, Product">
			<meta name="keywords" content="Accounting, Profit, Margin, Debt, Revenue Streams, Revenue, Automatic Accounting, Blockchain accounting, crypto management, Autonomous Accounting">
			<meta name="keywords" content="Revenue share, split revenue, share, share cashflow, split cashflow, code cashflow, accounting tools">
			<meta name="keywords" content="team share, team tool, web3 community tools, work online tool, work from home tools, remote work tools, financial tools for freelancers, Freelancer finance">
			<meta name="keywords" content="International, global, Multi National, Multi-national, Multinational, no borders, worldwide, intercontinental, universal, national, local">
			<meta name="keywords" content="DAO, Trust, Funds, Limited Company, Private Equity, Public Company, Partnership, Sole trader, Conglomerate, Coorperate, Limited Liability Partnerships">
			<meta name="keywords" content="money tools, make money online, make money with crypto, hustle, fintech, manchester money, Manchester united Tezos, Manchester City OKX">
			<meta name="keywords" content="Metafest.ch, Paul Clarke, Etienne Clarke, Paul Cellier-Clarke, Etienne Cellier-Clarke, JRich ENT, CryptoJamieNFT, Crypto Jamie,">
			<meta name="keywords" content="Manchester Blockchain Alliance, UK Crypto, Web3 UK, Web3 UK Companies, Invest UK, Angel Investor, What is angel inventment">
			<meta name="keywords" content="North West Invest, Northern Powerhouse Invest, Global Finance Powerhouse UK, Private Equity, Family Office, Venture Capital">

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