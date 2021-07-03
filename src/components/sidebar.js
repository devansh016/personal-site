import React from 'react'
import { Link } from 'gatsby'

import '../styles/main.css'

const Sidebar = () => {
    return (
        <div class="sidebar">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Sidebar