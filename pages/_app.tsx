import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Analyse gratuite assurance hypothécaire</title>
        <meta
          name="description"
          content="Recevez une analyse confidentielle pour protéger votre maison et économiser sur votre assurance hypothécaire."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
