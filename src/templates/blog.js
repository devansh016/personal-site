import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { blogtag, blogpostcontainer } from "../components/main.module.css"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
      <Layout>
          <div className={blogpostcontainer}>
              <Helmet title={`${post.frontmatter.title}`} />
              <div>
                    <h1>{post.frontmatter.title}</h1>
                    <h5>{post.frontmatter.date} <span> • </span> {post.timeToRead} min </h5>
                      {post.frontmatter.tags.map((tag) => {
                        return (
                                <div key = { tag } className= { blogtag} > {tag}</div>
                        )
                      })}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
           </div>
      </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
      timeToRead
    }
  }
`