import * as React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="An Anthology of Adam Driver Movies Test">
    <div>
      <p>Explore {" "} <Link to="/movies">Adam Driver Movies</Link>, {" "}</p>
      {/* This is my one and only Static Image */}
      <StaticImage src="../images/driverhome.jpg" height={600} alt="Adam Driver SNL Thumbs Up"></StaticImage>
    </div>
  </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
