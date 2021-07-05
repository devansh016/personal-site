import React from 'react'
import Layout from '../components/layout'
import SideProjects from "./sideproject"

const IndexPage = () => {
    return(
      <Layout>
      <p>Hi! I’m Devansh. Welcome to my little home on the web.</p>
      <p>I'm part of the web developing team at ACM JUIT.</p>
      <h2>Side Projects</h2>
      <SideProjects />
      </Layout>
  )
}

export default IndexPage