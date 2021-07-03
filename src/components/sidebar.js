import React from 'react'
import { Link } from 'gatsby'

import {sidebar} from './main.module.css'

const Sidebar = () => {
    return (
        <div className = { sidebar}>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
        </div>
    )
}

export default Sidebar