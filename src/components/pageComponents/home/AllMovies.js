import React from 'react';
import styled from '@emotion/styled';
import {Carousel} from 'react-responsive-carousel';

import TabPanel from './TabPanel';
import MovieCardRow from '../../reusableComponents/MovieCardRow';

const AllMovies = ({value}) => {
    return (
       <TabPanel value={value} index={0}>
           <Container>
             <Carousel autoPlay>
                 <MovieCardRow/>
                 <MovieCardRow/>
                 <MovieCardRow/>
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
    background: red;
`;



