export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import logoUrl from '../assets/images/icons/favicon.ico'
import cardImage from "../public/ardoda.jpg";

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
			<link rel="icon" href="${logoUrl}" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Smart contracts for your business that tear down barriers so innovation and prosperity will thrive." />
			<title>Ardoda</title>

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

			<!-- Open Graph -->
			<meta property="og:site_name" content="Ardoda.com">
			<meta property="og:title" content="Ardoda">
			<meta property="og:description" content="Smart contracts that tear down barriers so innovation and prosperity will thrive.">
			<meta property="og:type" content="website">
			<meta property="og:card" content="summary_large_image">
			<meta property="og:image" content="http://www.ardoda.com/ardoda_circular.jpg">
			<meta property="og:image:secure_url" content="https://www.ardoda.com/ardoda_circular.jpg">
			<meta property="og:image:type" content="image/jpeg">
			<meta property="og:image:alt" content="Ardoda logo and sub-heading">
			<meta property="og:image:width" content="1200">
			<meta property="og:image:height" content="630">
			<meta property="og:url" content="https://www.ardoda.com">

			<!-- TWITTER -->
			<meta property="twitter:site_name" content="Ardoda.com">
			<meta property="twitter:title" content="Ardoda">
			<meta property="twitter:description" content="Smart contracts that tear down barriers so innovation and prosperity will thrive.">
			<meta property="twitter:type" content="website">
			<meta property="twitter:card" content="summary_large_image">
			<meta property="twitter:image" content="http://www.ardoda.com/ardoda_circular.jpg">
			<meta property="twitter:image:secure_url" content="https://www.ardoda.com/ardoda_circular.jpg">
			<meta property="twitter:image:type" content="image/jpeg">
			<meta property="twitter:image:alt" content="Ardoda logo and sub-heading">
			<meta property="twitter:image:width" content="1200">
			<meta property="twitter:image:height" content="630">
			<meta property="twitter:url" content="https://www.ardoda.com">

		</head>

		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-KL3K7CPYMB"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-KL3K7CPYMB', { 'anonymize_ip': true });
		</script>
		
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