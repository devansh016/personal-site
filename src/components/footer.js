import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
        <footer>
            <center>Created by {data.site.siteMetadata.author}, © 2021 All rights reserved.</center>
        </footer>
    )
}

export default Footer