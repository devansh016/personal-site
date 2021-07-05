import React from 'react'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'

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
            <Footer />
        </div>
    )
}

export default Layout