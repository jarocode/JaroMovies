import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import TabPanel from './TabPanel';
import MovieCardRow from '../../reusableComponents/MovieCardRow';
import { chunkArrayInGroups } from '../../../utils/helpers';
import { MovieContext } from '../../../context/MovieContext';

const AllMovies = ({value}) => {
    const {movieList, setMovieList} = useContext(MovieContext);
    const movies = chunkArrayInGroups(movieList, 4);
      return (
       <TabPanel value={value} index={0}>
           <Container>
             <Carousel axis="horizontal" showArrows>
                { movies.map(movie => <MovieCardRow movieData={movie}/>)}
             </Carousel>
            </Container>
       </TabPanel>
    )
}

export default AllMovies;
const Container = styled.div`
    padding-top: 3rem;
    width: 100%;
    min-height: 10rem;
    background: none;
`;



