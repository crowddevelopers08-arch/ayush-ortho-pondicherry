import { Header } from "@/components/header"
import { Backhero } from "@/components/backhero"
import Backreviews from "@/components/backreviews"
import Backthird from "@/components/backthird"
import BackcombinedComponent from "@/components/backcombined"
import Backcenterimg from "@/components/backcenterimg"
import Backfour from "@/components/backfour"
import Backsix from "@/components/backsix"
import WhatSetsUsApart from "@/components/WhatSetsUsApart"
import { Backfooter } from "@/components/backfooter"
import Backchatbot from "@/components/backchatbot"
import Script from "next/script"

export default function HomePage() {
  return (
    <>
      {/* Google Tag Manager - Head Script */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WH34B7DF');
          `
        }}
      />

      {/* Google Analytics / Google Ads Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18044684782"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18044684782');
        `}
      </Script>

      {/* Conversion Tracking Script */}
      <Script id="conversion-tracking" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-18044684782/m4bQCMHqyJwcEO6TsJxD',
              'value': 1.0,
              'currency': 'INR',
              'event_callback': callback
            });
            return false;
          }
        `}
      </Script>

      {/* Google Tag Manager - Noscript (Body) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-WH34B7DF"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <main className="min-h-screen">
        <Header />
        <Backhero />
        <section id="treatments">
          <Backthird />
        </section>
        <Backfour />
        <Backsix />
        <Backcenterimg />
        <WhatSetsUsApart />
        {/* <Backvideo /> */}
        <section id="reviews">
          <Backreviews />
        </section>
        <section id="contacts">
          <BackcombinedComponent />
        </section>
        <Backchatbot />
        <Backfooter />
      </main>
    </>
  )
}