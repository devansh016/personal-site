import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { footer} from './main.module.css'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)

    return (
        <footer className = { footer }>
                <center>Created by {data.site.siteMetadata.author}, © 2021 All rights reserved.</center>
        </footer>
    )
}

export default Footer