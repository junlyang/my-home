import React, { useEffect, useState } from 'react'
import TopHeader from './Header'
import SideMenu from './SideMenu'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function AppLayout ({ children }){
    const childWithProps = React.Children.map(children, child =>
        React.cloneElement(child, {}),
    )
    return (
        <Layout>
            <Header>헤드</Header>
            <Layout>
                <Sider><SideMenu/></Sider>
                <Content>{childWithProps}</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}