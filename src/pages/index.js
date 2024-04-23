import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import fetch from 'node-fetch'

const IndexPage = () => {

  // Calling serverless function
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    fetch("/.netlify/functions/movienetlify", {
      method: "GET",
    })
    .then((result) => {
        return result.json()
    })
    .then(json => {
      console.log(json.data)
      setWeatherData(json.data)
    })
    .catch((error) => console.log("Error getting from serverless" + error));
  },[weatherData.title]);


  return (
    <Layout pageTitle="An Anthology of Adam Driver Movies">
    <div>
      <p>Explore {" "} <Link to="/movies">Adam Driver Movies</Link> {" "}</p>
      {/* This is my one and only Static Image */}
      <StaticImage src="../images/driverhome.jpg" height={600} alt="Adam Driver SNL Thumbs Up"></StaticImage>
    </div>

    <div>
        <h3>Cloud Atlas IMDB API Call</h3>
        <p>Building on the Atlas metaphor: Serverless Functions</p>
          <ul>
          {
            Object.entries(weatherData).map(([key, value]) => {
              return <li key={key}><b>{key}: </b>{value.toString()}</li>  
            })
          }</ul>
          
      </div>
  </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
