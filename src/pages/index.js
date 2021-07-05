import React from 'react'
import Layout from '../components/layout'
import SideProjects from "../components/sideproject"
import { Helmet } from "react-helmet"
import { IndexPageContainer } from "../components/main.module.css"

const IndexPage = () => {
    return(
      <Layout>
      <div className= { IndexPageContainer }>
          <Helmet title={`Devansh Chaudhary`} />
          <p>Hi! I’m Devansh. Welcome to my little home on the web.</p>
          <p>I'm part of the web developing team at ACM JUIT.</p>
          <p>I am a young and energetic professional, looking for challenging opportunities to grow my skills.</p>
          <p>My intellectual curiosity also drives me to be a lifelong learner, and so I'm seeking to connect with like-minded people to learn and grow more. And in the way won't mind working under someone to know how everything works</p>
          <p>I love building things, and have worked across the engineering and product design stack. You can reach me at hello@devanshchaudhary.me</p>

        <h2>Side Projects</h2>
        <SideProjects />
      </div>
      </Layout>
  )
}

export default IndexPage