import * as React from "react"
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby';
import Movie from '../../components/movie'


const MoviePage = ({ pageContext, data }) => {
    // Getting movie data from graphQL query, only one returned, so accessing 0 index
    const movie = data.allMovie.nodes[0];

return (
    <Layout pageTitle={movie.Title}>
        {/* Inserting custom gatsby movie component that I created */}
        <Movie movie={movie}></Movie>
    </Layout>
    );
  };

  // Querying the specific returned movie information from the omdb api and the image
  // data from the remote image plugin. All gets passed into the Movie component
  export const query = graphql`
    query MoviePageQuery($movieId: String) {
        allMovie(filter: {imdbID: {eq: $movieId}}) {
            nodes {
                Title
                imdbID
                GatsbyPoster {
                    childImageSharp {
                        gatsbyImageData (
                            height: 400
                            placeholder: BLURRED
                        )
                    }
                }
                Plot
                Released
                imdbRating
                Rated
                Runtime
            }
        }
    }
`

  export const Head = () => <Seo title="Movie"></Seo>

  export default MoviePage