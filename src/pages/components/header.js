import React from 'react'
import { Link } from 'gatsby'

const header = () => {
    return (
        <header>
            <h1>Devansh Chaudhary</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default header