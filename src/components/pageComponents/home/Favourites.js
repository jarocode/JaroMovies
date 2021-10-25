import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {Typography} from '@mui/material';

import TabPanel from './TabPanel';
import { FavouriteContext } from '../../../context/FavouriteContext';
import MovieListCard from '../../reusableComponents/MovieListCard';
import NoMovieFound from '../../reusableComponents/NoMovieFound';

const Favourites = ({value}) => {
    const {favorites, setFavourites} = useContext(FavouriteContext);
    const isFavouriteData = favorites.length !== 0;
    return (
       <TabPanel value={value} index={2}>
           <Container>
                {isFavouriteData? favorites.map(data =><MovieListCard movieData={data} />) :
                 <NoMovieFound text="No favourites added yet"/>
                }
           </Container>
       </TabPanel>
    )
}

export default Favourites;

const Container = styled.div`
    width: 100%;
    min-height: 10rem;
    background: none;
`;




