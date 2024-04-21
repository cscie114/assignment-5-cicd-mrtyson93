import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import Movie from '../movie';

let movieJson = 
{
    "GatsbyPoster": {
        "childrenImageSharp": [
            {
                "gatsbyImageData": {
                    "layout": "constrained",
                    "backgroundColor": "#080808",
                    "images": {
                        "fallback": {
                            "src": "/static/99a7fe10939b9fc2c78cc0876ab59d02/ee55d/MV5BNTM0YTBlMjctZjJjZS00MDU4LTg5YmQtMDY5Y2FhMWZiMjQ2XkEyXkFqcGdeQXVyNzU0NzQxNTE%40._V1_SX300.jpg",
                            "srcSet": "/static/99a7fe10939b9fc2c78cc0876ab59d02/b537e/MV5BNTM0YTBlMjctZjJjZS00MDU4LTg5YmQtMDY5Y2FhMWZiMjQ2XkEyXkFqcGdeQXVyNzU0NzQxNTE%40._V1_SX300.jpg 75w,\n/static/99a7fe10939b9fc2c78cc0876ab59d02/60703/MV5BNTM0YTBlMjctZjJjZS00MDU4LTg5YmQtMDY5Y2FhMWZiMjQ2XkEyXkFqcGdeQXVyNzU0NzQxNTE%40._V1_SX300.jpg 150w,\n/static/99a7fe10939b9fc2c78cc0876ab59d02/ee55d/MV5BNTM0YTBlMjctZjJjZS00MDU4LTg5YmQtMDY5Y2FhMWZiMjQ2XkEyXkFqcGdeQXVyNzU0NzQxNTE%40._V1_SX300.jpg 300w",
                            "sizes": "(min-width: 300px) 300px, 100vw"
                        },
                        "sources": [
                            {
                                "srcSet": "/static/99a7fe10939b9fc2c78cc0876ab59d02/8a22c/MV5BNTM0YTBlMjctZjJjZS00MDU4LTg5YmQtMDY5Y2FhMWZiMjQ2XkEyXkFqcGdeQXVyNzU0NzQxNTE%40._V1_SX300.webp 75w,\n/static/99a7fe10939b9fc2c78cc0876ab59d02/5aef8/MV5BNTM0YTBlMjctZjJjZS00MDU4LTg5YmQtMDY5Y2FhMWZiMjQ2XkEyXkFqcGdeQXVyNzU0NzQxNTE%40._V1_SX300.webp 150w,\n/static/99a7fe10939b9fc2c78cc0876ab59d02/cf936/MV5BNTM0YTBlMjctZjJjZS00MDU4LTg5YmQtMDY5Y2FhMWZiMjQ2XkEyXkFqcGdeQXVyNzU0NzQxNTE%40._V1_SX300.webp 300w",
                                "type": "image/webp",
                                "sizes": "(min-width: 300px) 300px, 100vw"
                            }
                        ]
                    },
                    "width": 300,
                    "height": 444
                }
            }
        ]
    },
    "Title": "Ferrari",
    "imdbID": "tt3758542",
    "Plot": "Set in the summer of 1957, with Enzo Ferrari's auto empire in crisis, the ex-racer turned entrepreneur pushes himself and his drivers to the edge as they launch into the Mille Miglia, a treacherous 1,000-mile race across Italy.",
    "Released": "25 Dec 2023",
    "imdbRating": "6.5",
    "Rated": "R",
    "Runtime": "130 min"
}

test('Movie Info Visible', () => {
    render(<Movie movie={movieJson} />);
    waitFor(() => expect(screen.getByTestId('movieinfo')).toBeVisible());
});

test('Contains Movie Release', () => {
    render(<Movie movie={movieJson} />);
    waitFor(() => expect(screen.getByTestId('movieinfo')).contains(movieJson.Released));
});

test('Unexpected Thing Not Seen', () => {
    render(<Movie movie={movieJson} />);
    waitFor(() => expect(screen.getByTestId('notarealid')).not.toBeVisible());
});