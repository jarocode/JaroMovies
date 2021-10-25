import React from 'react';
import styled from '@emotion/styled';

import MovieCard from './MovieCard';
import url from '../../config.js/url';
import movie1 from '../../assets/images/Project.jpg'
import movie2 from '../../assets/images/freedom.jpg'
import movie3 from '../../assets/images/Beauty-Beast.jpg'
import movie4 from '../../assets/images/captain-marvel.jpg'

const MovieCardRow = ({movieData, setOpen}) => {
    
    return (
        <Container>
            {movieData.map(movie => {
                            const {id, poster_path, release_date, title} = movie;
                            return(<MovieCard
                                    key={id}
                                    id={id}
                                    movieData={movieData}
                                    poster={url["IMAGE_BASE_URL"]+poster_path} 
                                    title={title}
                                    setOpen={setOpen}
                                    date={release_date} 
                            />);
                        })}
        </Container>
    )
}

export default MovieCardRow;

const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 2%;
`;

