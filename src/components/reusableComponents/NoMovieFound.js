import React from 'react';
import styled from '@emotion/styled';
import { Typography, Button } from '@mui/material';

import { colors } from '../../config.js/theme';

const NoMovieFound = ({text}) => {
    return (
        <Container>
            <Typography 
                variant="subtitle2" 
                component="h2" 
                color={colors.white}
                marginBottom="1.5rem"
                fontSize="1em"
            >
                {text}
            </Typography>
        </Container>
    )
}

export default NoMovieFound;

const Container = styled.div`
    width: 70%;
    height: 10rem;
    border-radius: 8px;
    background: ${colors.grey};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 2rem;
`;

