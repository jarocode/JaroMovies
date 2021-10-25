import React, {useEffect, createContext, useState} from 'react';

import URL from '../config.js/url';

export const MovieContext = createContext();

export const MovieProvider = ({children}) => {
    const [movieList, setMovieList] = useState();

    const movieApiCall = async() => {
        try {
        const getMovies = async () => {
            const result = await fetch(URL["MOVIE_URL"]);
            const data = await result.json();
            return data;
        }
        const movies = await getMovies();
        console.log (movies);
        setMovieList(movies?.results);
      } catch (error) {
          console.log(error);
          throw error;
      }
    
}

    useEffect(() => {
        movieApiCall();
    }, []);

    return (
        <MovieContext.Provider value={{movieList, setMovieList}}>
            {children}
        </MovieContext.Provider>
    );
}




