import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head';
import { useLoaderRouter } from '../hooks/LoaderHook';
import LoadingCard from '../components/loadingCard';
import '../scss/styles.scss';

export default function App({ Component, pageProps }) {

    const isLoading = useLoaderRouter();

    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/harry.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Harry Potter App</title>
            </Head>
            <Layout>
                {isLoading ? <LoadingCard /> :
                    <Component {...pageProps} />
                }
            </Layout>
        </>
    )
}