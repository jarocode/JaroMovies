import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import TabPanel from './TabPanel';
import MovieCardRow from '../../reusableComponents/MovieCardRow';
import { chunkArrayInGroups } from '../../../utils/helpers';
import { MovieContext } from '../../../context/MovieContext';
import NoMovieFound from '../../reusableComponents/NoMovieFound';

const AllMovies = ({value, setOpen}) => {
    const {movieList} = useContext(MovieContext);
    const movies = chunkArrayInGroups(movieList, 4);
      return (
       <TabPanel value={value} index={0}>
           <Container>
             {Array.isArray(movies) && movies.length !== 0 ?(<Carousel axis="horizontal" showArrows>
                                    { movies.map(movie => <MovieCardRow movieData={movie} setOpen={setOpen}/>)}
                                    </Carousel>) :
                                    <NoMovieFound text="No results found"/>
            }
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



