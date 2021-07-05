import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'
import { SideProjectList } from "../components/main.module.css"

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
        <div className = { SideProjectList }>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li key= {edge.node.frontmatter.path}> 
                            <Link to={edge.node.frontmatter.path}> <h2>{edge.node.frontmatter.title}  </h2> </Link>
                            <p>{edge.node.frontmatter.date} <span> • </span> {edge.node.timeToRead} min </p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default SideProjects