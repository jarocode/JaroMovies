import React from 'react';
import styled from '@emotion/styled';
import { Typography, Button} from '@mui/material';

import moviePoster from '../../../assets/images/Thor.jpg';
import { colors } from '../../../config.js/theme';

const MovieJumbotron = () => {
    return (
        <Container bg={moviePoster}>
            <InfoDiv>
                <Typography variant="h3" component="h2" color={colors.dark} fontWeight="bold" marginBottom="1.5rem">
                    THOR RAGNAROK
                </Typography>
                <Typography variant="subtitle2" component="h2" color={colors.dark} marginBottom="1.5rem">
                    Id laboris irure velit magna do dolor exercitation est eu mollit qui laborum. 
                    Dolor ipsum do duis do commodo ea. Fugiat labore ut ut aliqua ipsum.
                    Id laboris irure velit magna do dolor exercitation est eu mollit qui laborum. 
                    Dolor ipsum do duis do commodo ea. Fugiat labore ut ut aliqua ipsum.
                </Typography>
                
            </InfoDiv>
        </Container>
    )
}

export default MovieJumbotron;

const Container = styled.div`
    margin: auto;
    width: 88%;
    background: url(${props => props.bg}) no-repeat top center/cover;
    min-height: 40rem;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    padding-top: 8rem;
`

const InfoDiv = styled.div`
    width: 50%;
    height: 20rem;
    background: #fff;
    padding: 2rem;
`;
