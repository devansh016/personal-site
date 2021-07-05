import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { blogtag } from "../components/main.module.css"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
      <Layout>
          <div className="blog-post-container">
      <Helmet title={`Devansh | ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.tags.map((tag) => {
                    return (
                      <div className= { blogtag} > {tag}</div>
                    )
                })}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
    }
  }
`