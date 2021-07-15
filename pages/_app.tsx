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
import { wrapper } from '../store';

const MyApp = ({ Component, store }) => {
    console.log("MY APP STARTED")
    return (
        <Provider store={store}>
            <Head>
                <title>량량스</title>
                <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </Provider>
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
                    <title>my project</title>
                    <meta property="og:title" content="my project" key="title" />
                </Head>
                <style jsx global>{`
                    body {margin: 0}
                `}
                </style>
                
                <Component {...pageProps} />
            </>
        );
    }
}

export default wrapper.withRedux(WrappedApp);