import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery} from 'gatsby'
import { BlogList, blogtag } from '../components/main.module.css'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter{
                        title
                        date (formatString: "MMMM DD, YYYY")
                        path
                        tags
                    }
                    timeToRead
                }
            }
        }
    }
`)

return (
    <Layout>
        <div className= { BlogList }>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li> 
                            <Link to={edge.node.frontmatter.path}> <h2>{edge.node.frontmatter.title} </h2> </Link>
                            <p>{edge.node.frontmatter.date} <span> • </span> {edge.node.timeToRead} min </p> 
                                {/* Createing tags */}
                                {edge.node.frontmatter.tags.map((tag) => {
                                    return (
                                        <div className={blogtag}> {tag} </div>
                                    )
                                })}
                        </li>
                    )
                })}
            </ol>
        </div>
    </Layout>
    )
}

export default BlogPage