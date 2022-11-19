import React from "react";
import "../styles/variables.css";
import "../styles/global.css";
import "../styles/reset.css";
import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" key="shortcutIcon" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
