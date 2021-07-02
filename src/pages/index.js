import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return(
    <div>
      <h1>Hello.</h1>
      <h2>I'm Devansh, a full-stack developer living in Incredible India.</h2>
      <p>Want to know about me? <Link to="/about"> About Me </Link> </p>
      <p>Want to read my blogs? <Link to="/blog"> Blog </Link> </p>
    </div>
  )
}

export default IndexPage