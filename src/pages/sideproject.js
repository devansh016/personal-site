import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'
import { BlogList } from '../components/main.module.css'

const SideProjects = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark(
          filter: { frontmatter: { tags: { in: ["Side Project"] } } }
        ) {
          totalCount
          edges {
            node {
                timeToRead
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    path
                }
            }
          }
        }
      }
`)

return (
        <div className= { BlogList }>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li> 
                            <Link to={edge.node.frontmatter.path}> <h2>{edge.node.frontmatter.title} </h2> 
                            <p>{edge.node.frontmatter.date} <span> • </span> {edge.node.timeToRead} min </p> </Link>
                                {/* Createing tags */}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default SideProjects