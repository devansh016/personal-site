import React from 'react'

import Footer from './footer'
import Header from './header'
import {container} from './layout.module.css'
import '../styles/main.css'

const Layout = (props) => {
    return (
        <div className = { container }>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout