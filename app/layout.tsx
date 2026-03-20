import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Ayush Ortho",
  description:
    "At Ayush Ortho, we relieve knee pain without surgery using Ayurveda, Varma Therapy, Orthopaedic Manual Therapy, and Chiropractic Care.",
  generator: "Nextjs15",
  icons: {
    icon: [
      { url: "https://ik.imagekit.io/aegfxmf0u/public/fav.png?updatedAt=1773306127826", sizes: "16x16", type: "image/png" },
      { url: "https://ik.imagekit.io/aegfxmf0u/public/fav.png?updatedAt=1773306127826", sizes: "32x32", type: "image/png" },
      { url: "https://ik.imagekit.io/aegfxmf0u/public/fav.png?updatedAt=1773306127826", sizes: "48x48", type: "image/png" },
      { url: "https://ik.imagekit.io/aegfxmf0u/public/fav.png?updatedAt=1773306127826", sizes: "192x192", type: "image/png" },
      { url: "https://ik.imagekit.io/aegfxmf0u/public/fav.png?updatedAt=1773306127826", sizes: "512x512", type: "image/png" }, 
    ],
    apple: [
      { url: "https://ik.imagekit.io/aegfxmf0u/public/fav.png?updatedAt=1773306127826", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "https://ik.imagekit.io/aegfxmf0u/public/fav.png?updatedAt=1773306127826",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WG9FT5LD');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WG9FT5LD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}