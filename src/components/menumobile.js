import React from 'react'
import { Link } from 'gatsby'

import { menu } from './main.module.css'

const Menu = () => {
    return (
            <div className = { menu }>
            
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About me</Link>
            </div>
    )
}

export default Menu