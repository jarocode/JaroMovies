import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const MovieCard = () => {
    return (
        <Container>
            <ImgDiv></ImgDiv>
            <Content>
                <Typography variant="h5" component="h2">
                    h1. Heading
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    h1. Heading
                </Typography>
            </Content>
        </Container>
    )
}

export default MovieCard;

const Container = styled.div`
    width: 25%;
    min-height: 10rem;
    background: #fff;
`;
const ImgDiv = styled.div`
    width: 100%;
    height: 16rem;
    background: #fff;
`;
const Content = styled.div`
    width: 100%;
    height: 6rem;
    background: #000;
`;
