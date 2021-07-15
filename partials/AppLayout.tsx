import React, { useEffect, useState } from 'react'
import Header from './Header'
export default function AppLayout ({ children }){
    const childWithProps = React.Children.map(children, child =>
        React.cloneElement(child, {}),
    )
    return (
        <>
            <main>
                <Header />
                {childWithProps}
            </main>

        </>
    )
}