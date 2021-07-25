import React from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import App, { AppInitialProps, AppContext } from 'next/app';
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'
import rootSaga from '../sagas'
import Head from 'next/head'
import AppLayout from '../partials/AppLayout'
import wrapper from '../store';

const MyHome = ({ Component, pageProps }) => {
    console.log("MY APP STARTED")
    return (
        <>
            <Head>
                <title>량량스</title>
                <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <AppLayout>
                <Component {...pageProps}/>
            </AppLayout>
        </>
        )
}
class WrappedApp extends App<AppInitialProps> {
    public static getInitialProps = async ({ Component, ctx }: AppContext) => {

        return {
            pageProps: {
                ...(Component.getInitialProps ?
                    await Component.getInitialProps(ctx)
                    :
                    {})
            },
            appProp: ctx.pathname
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>량량스</title>
                    <meta property="og:title" content="my project" key="title" />
                    <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>
                </Head>
                <style jsx global>{`
                    body {margin: 0}
                `}
                </style>
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
            </>
        );
    }
}


export default wrapper.withRedux(MyHome)