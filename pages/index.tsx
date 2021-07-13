import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import preset from '@rebass/preset'
import {
    Box,
    Card,
    Image,
    Heading,
    Text,Button
  } from 'rebass'
  

const theme = {
    fontSizes: [
      12, 14, 16, 24, 32, 48, 64
    ],
    colors: {
      primary: '#07c',
      gray: '#f6f6ff',
    },
    buttons: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      outline: {
        color: 'primary',
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 2px'
      },
    },
  }
function handleSubmit () {
    console.log("on Submit")
}  
export default function Home(props) {
    return (
        <>
            <header>
            <nav>
                <a href="/"><h1>냠냠이</h1></a>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/add">Add</a>
                    </li>
                </ul>
            </nav>
            </header>
            <form onSubmit={handleSubmit}>
              <button type="submit">Submit</button>
            </form>
        </>
    )
}
