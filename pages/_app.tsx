import 'styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { SWRConfig } from 'swr'
import { ToastContainer } from 'react-toastify'
import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import Hero from 'components/layout/Hero'
import { CustomMeta } from 'components/static/CustomMeta'

import '../components/icons/fa'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        redirectUri={process.browser && window.location.origin}
      >
        <SWRConfig
          value={{
            revalidateOnFocus: false,
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json())
          }}
        >
          <CustomMeta
            title="Roadmap • Link Cord"
            description="View, Request and Vote for features you would like to see added in Upcoming Link Cord Releases."
            imageURL="/logo.png"
            siteName="Link Cord Roadmap"
          />
          <Header />
          <Hero />
          <br />
          <br />
          <div className="antialiased max-w-xl mx-auto px-4">
            <main>
              <Component {...pageProps} />
            </main>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer />

          <ToastContainer autoClose={3000} hideProgressBar draggable={false} />
        </SWRConfig>
      </Auth0Provider>
    </ThemeProvider>
  )
}
