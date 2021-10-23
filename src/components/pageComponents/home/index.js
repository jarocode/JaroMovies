import React from 'react';
import Header from './Header';
import MovieJumbotron from './MovieJumbotron';
import MovieSelection from './MovieSelection';

const index = () => {
    return (
        <div>
           <Header/>
           <MovieJumbotron/>
           <MovieSelection/>
        </div>
    )
}

export default index;
