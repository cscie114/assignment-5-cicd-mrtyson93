require("dotenv").config();
const EleventyFetch = require("@11ty/eleventy-fetch");
// Couldn't programatically pull movie data of all Adam Driver movies, so manually collected
// it and pulling it here for reference to loop through below for each movie
const movies = require('./data/movies.json');

let fetchOptions = {
    headers: {
       "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
    }
 };

// The below block of code queries the omdbapi to retrieve movie information on all of
// Adam Driver Movies and create nodes with that data into graphql
exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
   const { createNode } = actions;

   let moviesUrl = "https://omdbapi.com"
   // Loop through all of movies from local data
   for (let movie of movies) {
        try {
            // Construct params for url
            const movieUrlSearchParams = new URLSearchParams({
                i: movie.movieId,
                apiKey: process.env.MOVIE_API_KEY,
            });

            // Fetch data, cache in specific 11ty cache
            let movieData = await EleventyFetch(moviesUrl + "?" + movieUrlSearchParams, {
                type: "json",
                duration: "1d",
                directory: ".11tycache",
                fetchOptions: fetchOptions
            });

            // Create a node of the data pulled back from omdb api
            createNode({
                ...movieData,
                id: createNodeId(movieData.imdbID), 
                parent: null,
                children: [],
                internal: {
                    type: 'Movie',   // name of collection in graphql schema
                    contentDigest: createContentDigest(movieData),
                },
            })

        } catch (e) {
            console.log("Error retrieving movie data: " + e)
        }
   }
}


