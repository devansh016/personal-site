import React from 'react'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'
import Menu from './menumobile'

import {container} from './main.module.css'

import '../styles/main.css'

const Layout = (props) => {
    return (
        <div className = { container }>
        <Sidebar />
        <Header />
            <div>
                {props.children}
            </div>   
        <Menu />
        <Footer />
        </div>
    )
}

export default Layout