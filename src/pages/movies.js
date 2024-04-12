import * as React from "react"
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'


const MoviesPage = ({ data }) => {
    const movies = data.allMoviesJson.nodes;
    return (
        <Layout pageTitle="Adam Driver Movies">
            <ul>
                {/* Just looping through the local movies and creating a link to that movie's page */}
                {movies.map((movie) => {
                    return (
                        <li key={movie.movieId}>
                            <Link to={"/movies/"+movie.movieId}>{movie.movieName}</Link>
                        </li>)
                })}
            </ul>
        </Layout>
    )
}

// Querying the local data of Adam Driver movies
// API doesnt allow a search on specific actors, so I 
// created the list myself for the local data requirement
export const query = graphql`
    query MoviesPageQuery {
        allMoviesJson {
            nodes {
                movieName
                movieId
            }
        }
    }
`

export const Head = () => <Seo title="Movies"></Seo>

export default MoviesPage