import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    plot
} from './movie.module.css'

const Movie = ({ movie }) => {

    // Use gatsby image getImage function to get the image from graphql data
    const poster = getImage(movie.GatsbyPoster?.childImageSharp?.gatsbyImageData)
    return (
        <div>
            <p><b>Released:</b> {movie.Released}, <b>Rating:</b> {movie.Rated}, <b>Runtime:</b> {movie.Runtime}</p>
            {/* Dynamic GatsbyImage, Yay */}
            <GatsbyImage image={poster} alt={movie.Title}></GatsbyImage>
            <p className={plot}><b>Plot:</b> {movie.Plot}</p>
        </div>
    );
};

export default Movie;