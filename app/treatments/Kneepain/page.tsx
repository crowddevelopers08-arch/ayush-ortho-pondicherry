import ClinicLocationMap from "@/components/maps"
import Chatbot from "@/components/chatbot"
import ComponentName from "@/components/hero-section"
import StatsComponent from "@/components/about-section"
import KneePainConditionsGrid from "@/components/fisness"
import KneePainTreatment from "@/components/consultation-section"
import PatientSuccessStories from "@/components/expertssection"
import AppointmentBanner from "@/components/appointment"
import { ConsultationModal } from "@/components/popupform"
import CombinedComponent from "@/components/combinebanmap"
import { Footer } from "@/components/footer"
import KneePainReliefCards from "@/components/scrollstak"
import Kneevideo from "@/components/kneevideo"
import { Kneeheader } from "@/components/kneeheader"
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
        <Kneeheader />
        <ComponentName />
        <StatsComponent />
        <section id="treatments">
          <KneePainConditionsGrid />
        </section>
        <KneePainTreatment />
        <KneePainReliefCards />
        <section id="reviews">
          {/* <Kneevideo /> */}
          <PatientSuccessStories />
        </section>
        <section id="contacts">
          <CombinedComponent />
        </section>
        <Chatbot />
        <Footer />
      </main>
    </>
  )
}