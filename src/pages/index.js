import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import fetch from 'node-fetch'

const IndexPage = () => {

  // Calling serverless function
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    fetch("/.netlify/functions/weather", {
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
      <h4>{weatherData.name} Weather:</h4>
      <p><b>Temperature:</b> {weatherData.main?.temp}<span>&#8457;</span>  <b>Feels Like:</b> {weatherData.main?.feels_like}<span>&#8457;</span>  </p>
      <p><b>Max:</b> {weatherData.main?.temp_max}<span>&#8457;</span>  <b>Min:</b> {weatherData.main?.temp_min}<span>&#8457;</span></p>
        
    </div>
    <div>
      <p>Explore {" "} <Link to="/movies">Adam Driver Movies</Link> {" "}</p>
      {/* This is my one and only Static Image */}
      <StaticImage src="../images/driverhome.jpg" height={600} alt="Adam Driver SNL Thumbs Up"></StaticImage>
    </div>
  </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
