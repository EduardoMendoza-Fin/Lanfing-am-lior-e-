import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react'; // ✅ ajout ici

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* ---- META DE BASE ---- */}
        <title>Analyse gratuite assurance hypothécaire</title>
        <meta
          name="description"
          content="Découvrez en 30 secondes comment économiser sur votre assurance hypothécaire au Québec. Analyse gratuite, 100 % confidentielle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* ---- OPEN GRAPH (réseaux sociaux / Facebook) ---- */}
        <meta property="og:title" content="Analyse gratuite assurance hypothécaire" />
        <meta
          property="og:description"
          content="Recevez une analyse gratuite et confidentielle pour protéger votre maison et réduire vos coûts d’assurance hypothécaire."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1505847512855-63b39e38fe97?auto=format&fit=crop&w=1600&q=80"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_CA" />

        {/* ---- FAVICON ---- */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ---- META PIXEL ---- */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID'); 
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
        />
      </noscript>

      {/* ---- COMPOSANT PRINCIPAL ---- */}
      <Component {...pageProps} />

      {/* ---- ANALYTICS VERCEL ---- */}
      <Analytics /> {/* ✅ tracking automatique */}
    </>
  );
}