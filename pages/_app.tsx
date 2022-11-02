import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head';
import '../scss/styles.scss';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/harry.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Harry Potter App</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}