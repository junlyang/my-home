import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    console.log("MY APP STARTED")
    return (
        <>
            <Head>
                <title>량량스</title>
                <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Component {...pageProps} />
        </>
        )
}