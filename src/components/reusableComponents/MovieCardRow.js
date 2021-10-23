import React from 'react';
import styled from '@emotion/styled';

import MovieCard from './MovieCard';

const MovieCardRow = () => {
    const cards = [1,2,3,4]
    return (
        <Container>
            {cards.map(el => <MovieCard/>)}
        </Container>
    )
}

export default MovieCardRow;

const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 2%;
`;

