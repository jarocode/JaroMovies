import React from 'react';
import styled from '@emotion/styled';
import {Typography} from '@mui/material';

import TabPanel from './TabPanel';
import MovieListCard from '../../reusableComponents/MovieListCard';

const Favourites = ({value}) => {
    const movies = [1, 2, 3, 4, 5]
    return (
       <TabPanel value={value} index={1}>
           <Container>
                {movies.map(el =><MovieListCard/>)}
           </Container>
       </TabPanel>
    )
}

export default Favourites;

const Container = styled.div`
    width: 100%;
    min-height: 10rem;
    background: yellow;
`;




