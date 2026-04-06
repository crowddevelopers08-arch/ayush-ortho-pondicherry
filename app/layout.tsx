import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import { GoogleAdsTag } from "@/components/google-ads-tag"
import "./globals.css"

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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18044684782"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18044684782');
            `,
          }}
        />
      </head>
      <body>
        <GoogleAdsTag />
        {children}
      </body>
    </html>
  )
}