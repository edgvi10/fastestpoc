// next _app.jsx file
import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps, appProps }) {
    return <>
        <Head>
            <link rel="manifest" id="manifest" href="/api/manifest" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="" />
            <meta name="apple-mobile-web-app-title" content="" />
            <meta name="description" content="" />

            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-TileColor" content="#000000" />
        </Head>
        <Component {...appProps} {...pageProps} />
    </>
}
