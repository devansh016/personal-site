import React from 'react'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'

import {container} from './layout.module.css'
import {content} from './layout.module.css'

import '../styles/main.css'

const Layout = (props) => {
    return (
        <div className = { container }>
        
            <Sidebar />

            <div className = { content }>
                <Header />
                {props.children}
            </div>   

            <Footer />

        </div>
    )
}

export default Layout