import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
//import { baseUrl } from './sitemap'
//import { baseUrl } from './robots'
//import { baseUrl } from 'app/sitemap'
import SocialLinks from './components/social'
import Header from './components/header'
import Footer from './components/footer'
import { Navbar } from './components/nav';
import { publicDecrypt } from 'crypto'

const baseUrl = 'https://josedallatorre.github.io/'
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Josè Dalla Torre',
    template: '%s | Josè Dalla Torre',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-gradient-to-br from-[#380036] to-[#0CBABA]',
        GeistSans.variable,
        GeistMono.variable
      )}>
      <body>
        <div className="min-h-screen  text-white">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <main className="p-6 max-w-screen-sm mx-auto">
              <div className="mb-6">
                {/*<Header />*/}
                <div className="mt-6">
                  {/*<SocialLinks/>*/}
                </div>
              </div>
            </main>
            {/*<Footer />*/}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col xl:flex-row">
            {/* Left Column (Header and Social Links) */}
            <div className="xl:fixed xl:w-2/5 h-screen p-8 xl:p-12 xl:pl-[10%] flex flex-col 
      justify-between min-w-[300px] max-w-[800px]  ">
              <div>
                <Header />
                <div className="mt-6">
                  <SocialLinks />
                </div>
              </div>
            </div>
            {/* Right Column (Main Content) */}
            <div className="xl:ml-[40%] w-full xl:w-3/5 min-h-screen min-w-[500px] max-w-[1200px] mx-auto">
              <main className="p-8 xl:p-12 xl:pr-[10%]">
                <Navbar />
                <div className="mt-3">
                  {children}
                  <Analytics />
                  <SpeedInsights />
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
