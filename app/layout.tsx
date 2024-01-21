import type { Metadata } from 'next'
import './globals.css'
import NavbarComp from '@/components/NavbarComp'
import FooterComp from '@/components/FooterComp'
import { Merriweather } from '@next/font/google'
import Script from 'next/script'
import { ToastContainer } from '@/components/nextToast';
import "react-toastify/dist/ReactToastify.css";

const meriaweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ['latin'],
  variable: '--font-meriaweather'
})



export const metadata: Metadata = {
  title: {
    default: "Velocity Click",
    template: "%s | Velocity Click"
  },
  description: "Connect with advertisers, customers, and affiliates with ease through our automated and integrated services. Enhance your brand's visibility and success with Velocity Click's advanced tracking, analytics, and anti-fraud mechanisms. Choose a partner known for safety, stability, and exceptional customer support. Trust Velocity Click Ad Media Solutions to elevate your brand's presence in multiple channels.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

        <!-- Clarity tracking code for https://velocityclick.in/ -->
          <script> 
            (function(c,l,a,r,i,t,y){        
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    
            })(window, document, "clarity", "script", "kpfgqlkq68");
          </script>

        {/* <!-- Standard favicon --> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* <!-- Apple Touch Icon (at least 200x200px) --> */}
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />

        {/* <!-- Android Chrome Icon --> */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="384x384" href="/android-chrome-384x384.png" />

        {/* <!-- Recommended favicon size for general browser display --> */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* <!-- The Web App Manifest --> */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* <!-- Safari Icon --> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />


        {/* <!-- SEO Meta Tags --> */}
        <meta name="author" content="" />
        {/* <!-- Meta Robots --> */}
        <meta name="robots" content="index, follow" />

        {/* <!-- OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn --> */}
        <meta property="og:site_name" content="Velocity Click" /> {/*website name */}
        <meta property="og:site" content="https://https://velocityclick.in/" />  {/*website link */}
        <meta property="og:title" content="velocity Click" />  {/*title shown in the actual shared post */}
        <meta property="og:description"
          content="Velocity Click is one of the renowned & trusted platform for Performance Marketing. Our Mission is to help our clients achieve their marketing goals by delivering the peerless & result-driven solutions." />
        {/* <!-- description shown in the actual shared post --> */}
        <meta property="og:image" content="logo.png" />    {/* image link, make sure it's jpg */}
        <meta property="og:url" content="https://velocityclick.in/" />  {/* where do you want your post to link to */}
        <meta property="og:type" content="website" />  {/* The type of content (in this case, "website") */}

        {/* canonical tag */}
        <link rel="canonical" href="https://velocityclick.com" />
        <meta name="title" content="Velocity Click"/>


        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.GA_MEASUREMENT_ID}');
        `}
        </Script>
      </head>
      <body >
        <main className={`${meriaweather.variable}`}>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <NavbarComp />
          {children}
          <FooterComp />
        </main>
      </body>
    </html>
  )
}
