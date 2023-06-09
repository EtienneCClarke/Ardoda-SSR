export { render }

import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  hydrateRoot(
    document.getElementById('page-view'),
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}